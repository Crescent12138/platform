<template>
  <el-radio-group v-model="radio" style="">
    <el-radio :label="1">中文</el-radio>
    <el-radio :label="2">英文</el-radio>
    <el-radio :label="3">其他语言</el-radio>
  </el-radio-group>
  <div v-if="this.radio===1" class="container">
    <h1 class="title">实验知情同意书</h1>
    <div class="content">
      <p class="notice">研究背景介绍：</p>
      <ul>
        <li>您即将参加一项由广西大学文学院组织的研究，它将历时1小时，由于您符合被试的条件，特邀请您参加此项实验。</li>
        <li>此份知情同意书将会提供一些信息将会帮助您决定是否参与此项研究。您参与此项研究是本着自愿原则，本项研究已通过本研究机构伦理审查委员会审查。如果那您同意加入此项研究，请详细阅读下列说明：</li>

      </ul>
      <p class="notice">知情同意签字：</p>
      <ul>
        <li>我已经仔细阅读了本知情同意书，并且研究者也将实验目的，内容，风险及受益情况向我做了详细的解释说明，对我询问的问题也给予了解答，我已经了解了此项实验，我自愿参与此项实验。</li>
      </ul>
      <div class="right">
        <el-button type="success" @click="agree">同意</el-button>
      </div>
    </div>
    <!-- <el-dialog v-model="dialogVisible" title="Tips" width="30%" :before-close="handleClose">
      <span>请选择问卷中文或者英文</span>
      <br>
      <span>Please choose Chinese or English questionnaire</span>
      <template #footer>
        <span style="display: flex; justify-content: center; margin-left: auto; margin-right: auto;">
          <el-button @click="en" type="primary">英文</el-button>
          <el-button type="primary" @click="zh">
            中文
          </el-button>
        </span>
      </template>
    </el-dialog> -->
  </div>
  <div v-else class="container">
    <h1 class="title">Experimental informed consent</h1>
    <div class="content">
      <p class="notice">Introduction of research background:</p>
      <ul>
        <li>You are about to participate in a study organized by the School of Literature of Guangxi University, which will last for one hour. Since you meet the requirements of the test subjects, you are hereby invited to participate in this experiment.</li>
        <li>This informed consent form will provide information that will help you decide whether or not to participate in the study. Your participation in this study is voluntary, and this study has been reviewed by the Ethics Review Committee of the research institution. If you agree to participate in this study, please read the following instructions:</li>

      </ul>
      <p class="notice">Informed consent Signature:</p>
      <ul>
        <li>I have read this informed consent carefully, and the researcher has given me a detailed explanation of the purpose, content, risks and benefits of the experiment, and given answers to my questions. I have learned about this experiment, and I am willing to participate in this experiment.</li>
      </ul>
      <div class="right">
        <el-button type="success" @click="agree">AGREE</el-button>
      </div>
    </div>
   
  </div>
  <el-dialog v-model="dialogVisible" title="Choose" width="30%" :before-close="handleClose">
      <template #footer>
        <span style="display: flex; justify-content: center; margin-left: auto; margin-right: auto;">
          <el-button @click="this.dialogVisible=false;languageVisible = true;" type="primary">非汉语母语者</el-button>
          <el-button type="primary" @click="zh">
            汉语母语者
          </el-button>
        </span>
      </template>
    </el-dialog>
    <el-dialog v-model="languageVisible" title="Choose" width="30%" :before-close="handleClose">
      <template #footer>
        <span style="display: flex; justify-content: center; margin-left: auto; margin-right: auto;">
          <el-button  @click="languageVisible = false;this.dialogVisible=true;">
            BACK
          </el-button>
          <el-button @click="en" type="primary">ENGLISH</el-button>
          
        </span>
      </template>
    </el-dialog>
</template>

<script>
import { ElMessageBox } from 'element-plus'
export default {
  data() {
    return {
      radio:1,
      dialogVisible: false,
      languageVisible : false,
    };
  },
  methods: {
    agree() {
      this.dialogVisible = true;
      
      // 在此处可以添加逻辑，表示用户已同意阅读须知
      console.log("用户已同意阅读须知");
      // window.location.href = '/formDate';
    },
    zh(){
      // this.dialogVisible = false ; 
      window.location.href = '/zh/formDate';
      this.dialogVisible = false ; 
     
    },
    en(){
      // this.dialogVisible = false ; 
      window.location.href = '/en/formDate';
      this.dialogVisible = false ; 
    
    }
  }
}
</script>

<style scoped>
.container {
  max-width: 1024px;
  margin: 0 auto;
  padding: 20px;
  font-size: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background-color: hsla(120, 60%, 90%, 1); */
  height: 100vh;
  /* 让容器充满整个视口高度 */
}

.title {
  font-size: 36px;
  text-align: center;
}

.content {
  margin-top: 20px;
}

.notice {
  font-weight: bold;
  margin-top: 2em;
  /* background-color: lightblue; */
}

ul {
  list-style-type: disc;
  margin-left: 20px;
}

.agree-btn {
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 16px;
}

.right {
  display: flex;
  justify-content: flex-end;
}
</style>
