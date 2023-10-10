<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <br />
      <!-- <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button> -->
    </div>
    <div :key="show_text" class="text item">
      {{ show_text }}
    </div>

    <div class="r">
      <el-input v-model="back" style="width: 60%;float: left;"></el-input>
      <el-button @click="clickAns" type="primary" :loading="this.loading_status" style="margin-left: auto;">提交</el-button>
    </div>
  </el-card>
</template>
<script >
import { createSimpleExpression } from '@vue/compiler-core';
import { postRequest } from '../api/paper'
import { ref } from 'vue'
export default {
  data() {
    return {
      text: "",
      show_text: "请等待...",
      text_list: [],
      numbers: 140,
      cid: 0,
      nex: 0,
      cids: [],
      back: "",
      is_finish: false,
      is_test: true,
      loading_status: false,
    };
  },
  mounted() {
    this.selectNextQuestion();
  },
  created() {
    // this.selectNextQuestion();
  },
  methods: {
    async selectNextQuestion() {
      this.loading_status = true
      postRequest('/paper/selectNextQuestion', {}).then((data) => {
        console.log(data.data.tmp)
        this.cid = ref(data.data.cid);
        this.cids = data.data.cids
        this.is_test = data.data.is_test
        this.is_finish = ref(data.data.is_finish)
        this.nex = data.data.nex
        this.numbers = data.data.number;
        if (typeof data.data.tmp !== 'undefined') {
          this.show_text = data.data.tmp.text + "___";
        } else {
          this.show_text = data.data.show_text + "___";
        }
        this.loading_status = false
      });
    },
    async getSimulation() {
      postRequest('/paper/simulation', {}).then((data) => {
        this.cid = ref(data.data.data[0])
      });
    },
    sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    },
    async run() {
      this.show_text = ""
      for (var i = 0; i < this.text.length; i++) {
        this.show_text += this.text[i];
        await this.sleep(200);
      }
    },
    async getForm() {
      postRequest('/paper/form', { number: 5 }).then((data) => {
        this.cids = ref(data.data.data);
        this.nex = 0;
        this.cid = ref(data.data.data[0])
        this.numbers = 1;
        this.is_test = false

        postRequest('/paper/initAns', { "num": this.numbers, "cid": this.cid }).then((data) => {
          if (typeof data.data.text !== 'undefined') {
            this.show_text = ref(data.data.text + "___");
          }
          this.is_finish = ref(data.data.is_finish);
          this.loading_status = false
        });
      });
    },
    async splitCorpus() {
      this.loading_status = true;
      if (this.is_finish) {
        if (this.is_test) {
          await this.getForm();
          return;
        } else {
          this.numbers = 1;
          this.nex += 1
          if (nex >= this.cids) {
            console.log("已完成");
            this.loading_status = false;
            return;
          }
          this.cid = ref(this.cids[nex]);
        }
      }
      // console.log(444)
      postRequest('/paper/initAns', { "num": this.numbers, "cid": this.cid }).then((data) => {
        if (typeof data.data.text !== 'undefined') {
          this.show_text = ref(data.data.text + "___");
        }
        this.is_test = data.data.is_test;
        this.is_finish = ref(data.data.is_finish);
        this.loading_status = false;
      });
    },
    async clickAns() {
      this.loading_status = true;
      postRequest('/paper/updateAns', { "num": this.numbers, "cid": this.cid, "corpus": this.back }).then((data) => {
        if (data.success == false) {
          console.log("失败");
          this.loading_status = false;
        } else {
          this.back = "";
          this.numbers += 1;
          if (this.is_finish) {
            if (this.is_test) {
              this.$alert('已完成模拟测试，接下来是正式回答', {
                confirmButtonText: '确定',
                callback: action => {
                  this.$message({
                    type: 'info',
                    message: `action: ${action}`
                  });
                }
              });
              this.getForm();
                return;
              } else {
              this.numbers = 1;
              this.nex += 1
              if (nex >= this.cids.length) {
                this.$alert('已完成所有测试，感谢您的参与', {
                confirmButtonText: '确定',
                callback: action => {
                  this.$message({
                    type: 'info',
                    message: `action: ${action}`
                  });
                }
              });
                this.loading_status = false;
                return;
              }
              this.cid = ref(this.cids[nex]);
            }
          }
          console.log(111)
          postRequest('/paper/initAns', { "num": this.numbers, "cid": this.cid }).then((data) => {
            console.log(data)
            if (typeof data.data.text !== 'undefined') {
              this.show_text = ref(data.data.text + "___");
              //Vue.set(this.show_text ,0, data.data.text + "___");
            }
            this.is_finish = ref(data.data.is_finish);
            this.loading_status = false;
          });


        }
        this.loading_status = false;
      });
    }

  },
  function: {



  }
}
</script>
<style>
.text {
  font-size: 24px;
  text-indent: 2em;
  text-align: "left";
}

.item {
  /* padding: 28px; */
  /* padding-top: 20px; */
  /* padding-bottom: 20px; */

  line-height: 35px;
}

.box-card {
  width: 580px;
  display: flex;
  height: 860px;
}

.r {
  position: fixed;
  bottom: 40px;
  /* margin-left: auto;  左外边距设置为自动 
  margin-right: auto; 右外边距设置为自动 */
  text-align: center;
}

.clearfix {
  line-height: 35px;
  display: table;
  content: "";
}

.clearfix:after {
  clear: both
}</style>