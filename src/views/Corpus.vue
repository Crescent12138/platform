<template>
  <el-card class="box-card">
    <div :key="show_text" class="text item">
      {{ show_text }}
    </div>
    <el-input v-model="back" style="width: 60%;float: left;"></el-input>
    <el-button @click="clickAns" type="primary" :loading="this.loading_status">提交</el-button>

  </el-card>
</template>
<script>
import { createSimpleExpression } from '@vue/compiler-core';
import { postRequest } from '../api/paper'
export default {
  data() {
    return {
      text: "",
      show_text: "",
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
        console.log(data)
        this.cid = data.data.cid;
        this.cids = data.data.cids
        this.is_test = data.data.is_test
        this.is_finish = data.data.is_finish
        this.nex = data.data.nex
        this.numbers = data.data.number;
        this.show_text = data.data.show_text + "___";
        // console.log(111,this.show_text)

        if (this.cid == 0) {
          getSimulation();
        }
        if(this.show_text == "___"){
          // console.log(111)
          this.splitCorpus();
        }
        this.loading_status = false
      });
    },
    async getSimulation() {
      postRequest('/paper/simulation', {}).then((data) => {
        this.cid = data.data.data[0]
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
        this.cids = data.data.data;
        this.nex = 0;
        this.cid = data.data.data[0]
        this.numbers = 1;
        this.is_test = false

        postRequest('/paper/initAns', { "num": this.numbers, "cid": this.cid }).then((data) => {
          if (typeof data.data.text !== 'undefined') {
            this.show_text = data.data.text + "___";
          }
          this.is_finish = data.data.is_finish;
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
          this.cid = this.cids[nex];
        }
      }
      postRequest('/paper/initAns', { "num": this.numbers, "cid": this.cid }).then((data) => {
        console.log(data)
        if (typeof data.data.text !== 'undefined') {
          this.show_text = data.data.text + "___";
        }
        this.is_finish = data.data.is_finish;
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
              this.getForm();
              return;
            } else {
              this.numbers = 1;
              this.nex += 1
              if (nex >= this.cids) {
                console.log("已完成");
                this.loading_status = false;
                return;
              }
              this.cid = this.cids[nex];
            }
          }
            console.log(111)
            postRequest('/paper/initAns', { "num": this.numbers, "cid": this.cid }).then((data) => {
              console.log(data)
              if (typeof data.data.text !== 'undefined') {
                this.show_text = data.data.text + "___";
              }
              this.is_finish = data.data.is_finish;
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
  font-size: 14px;
}

.item {
  padding: 18px 0;
}

.box-card {
  width: 480px;
}
</style>