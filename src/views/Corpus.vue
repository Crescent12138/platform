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
      <el-input v-model="back" style="width: 100%;float: left;" ref="refInput" autofocus>
        <template #append>
          <el-button @click="clickAns" type="primary" :loading="this.loading_status"
            style="margin-left: auto;">提交</el-button>
        </template></el-input>
    </div>
  </el-card>
  <el-dialog v-model="TestVisible" title="Tips" width="30%" :before-close="handleClose" style="line-height: 1.5;">
    <span>测试完毕，请问是否需要重新测试</span>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="reset">重新开始</el-button>
        <el-button type="primary" @click="nextForm">
          进入正式题
        </el-button>
      </span>
    </template>
  </el-dialog>
  <el-dialog v-model="FormVisible" title="Tips" width="30%" :before-close="handleClose" style="line-height: 1.5;">
    <span>点击确认即可进入下一题（共五题）</span>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click=" FormVisible = false">Cancel</el-button>
        <el-button type="primary" @click="nextForm">
          Confirm
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>
<script >
import { createSimpleExpression } from '@vue/compiler-core';
import { postRequest } from '../api/paper'
// import {is_test,setIsTest} from '../shared/const'
import { ref, h, nextTick } from 'vue'
// import { ref, h } from 'vue'
import { ElNotification } from 'element-plus'
export default {
  data() {
    return {
      // refInput:ref(),
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
      is_ok: false,
      TestVisible: false,
      FormVisible: false,
    };
  },
  mounted() {
    this.selectNextQuestion();
  },
  created() {
  },
  methods: {
    async selectNextQuestion() {

      this.loading_status = true
      postRequest('/paper/selectNextQuestion', {}).then((data) => {
        console.log(data)
        if (typeof data === 'undefined' || data.code != 200) {
          ElNotification({
            title: '已完成',
            message: h('i', { style: 'color: teal' }, ""),
          });
          window.location.href = '/';
          return
        }
        this.is_test = data.data.is_test
        // setIsTest(data.data.is_test) 
        this.is_finish = data.data.is_finish
        console.log(data.data)
        if (typeof data.data.is_ok !== 'undefined') {
          this.is_ok = data.data.is_ok
          if (typeof data.data.text !== 'undefined') {
            this.show_text = data.data.text;
          } else {
            this.show_text = data.data.show_text;
          }
        } else
          if (typeof data.data.text !== 'undefined') {
            this.show_text = data.data.text + "___";
          } else {
            this.show_text = data.data.show_text + "___";
          }
        console.log(this.show_text)
        this.loading_status = false
      });
      this.$nextTick(() => {
        this.$refs.refInput.focus();
      })

    },
    async getSimulation() {
      postRequest('/paper/simulation', {}).then((data) => {
      });
    },
    sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    },

    async getForm() {
      postRequest('/paper/form', { number: 5 }).then((data) => {

        // setIsTest(false)
        this.is_test = false
        postRequest("/paper/createNextCorpus", {}).then((data) => {
          this.selectNextQuestion()
        });
      });
    },
    async clickAns() {
      this.loading_status = true;
      this.$nextTick(() => {
        this.$refs.refInput.focus();
      })
      if (this.is_ok) {
        if (this.is_test) {
          this.TestVisible = true;
          this.loading_status = false
        } else {
          this.FormVisible = true;
          this.loading_status = false
        }
      } else
        postRequest('/paper/updateAns', { "corpus": this.back }).then((data) => {
          if (typeof data == 'undefined' || typeof data.success == 'undefined' || data.success == false) {
            ElNotification({
              title: '频繁提交',
              message: h('i', { style: 'color: teal' }, '请稍后'),
            });
            this.loading_status = false;
            this.selectNextQuestion();
          } else {
            if (this.is_finish) {
              postRequest('/paper/initAns', {}).then((data) => {
                console.log(data)
                if (typeof data.data.is_ok !== 'undefined') {
                  this.is_ok = data.data.is_ok;
                  this.show_text = ref(data.data.text);
                } else
                  if (typeof data.data.text !== 'undefined') {
                    this.show_text = ref(data.data.text + "___");
                  }
                this.is_finish = ref(data.data.is_finish);
                this.loading_status = false;
                this.numbers += 1
              });

            } else
              postRequest('/paper/initAns', {}).then((data) => {
                console.log(data)
                if (typeof data.data.is_ok !== 'undefined') {
                  this.is_ok = data.data.is_ok;
                  this.show_text = ref(data.data.text);
                } else
                  if (typeof data.data.text !== 'undefined') {
                    this.show_text = ref(data.data.text + "___");
                  }
                this.is_finish = ref(data.data.is_finish);
                this.loading_status = false;
                this.numbers += 1
              });
          }
          this.back = ""
          this.loading_status = false;
        });
    },
    nextForm() {
      this.TestVisible = false;
      this.FormVisible = false;
      if (this.is_test) {
        this.getForm();
      } else {
        postRequest("/paper/createNextCorpus", {}).then((data) => {
          console.log(data)
          if (typeof data !== 'undefined' && data.data == "success") {
            ElNotification({
              title: '致谢',
              message: h('i', { style: 'color: teal' }, '已完成所有测试，感谢您的参与'),
            });
            window.location.href = '/over';
          }
          this.selectNextQuestion();
          this.loading_status = false;

        });
      }
      this.loading_status = false;
      this.is_ok = false;
    },
    reset() {
      this.TestVisible = false
      this.is_ok = false
      postRequest('/paper/resetSimulation', {}).then((data) => {

        this.selectNextQuestion();
      });
    }

  },
  function: {



  }
}
// export {is_test}
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
  height: 100vh;
}

.r {
  /* position: fixed; */
  /* bottom: 40px; */
  /* bottom: 400px; */
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  padding: 20px;
  /* background-color: #f5f5f5; */
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
}
</style>