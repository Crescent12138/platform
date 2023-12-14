<template>
  <!-- <el-radio-group v-model="radio" style="">
    <el-radio :label="1">中文</el-radio>
    <el-radio :label="2">英文</el-radio>
    <el-radio :label="3">其他语言</el-radio>
  </el-radio-group> -->
  <div v-if="this.radio === 1" class="container">
    <h1 class="title">参与问卷调查知情同意书</h1>
    <div class="content">
      <div class="partion">尊敬的参与者：</div>
      <div class="partion">
        您好！感谢您愿意参与我们的问卷调查。在您开始回答问题之前，请您仔细阅读以下内容，并确保您充分理解并同意参与本次调查。
      </div>
      <p class="notice">研究目的：</p>
      <div class="partion">
        本次问卷调查旨在收集关于文本预测评估的信息，以便我们能够更好地了解该主题的相关情况，并为相关研究和决策提供参考。您将被要求回答一系列与研究主题相关的问题。问卷调查中您的个人信息将被保密处理，不会被泄露给任何第三方。
      </div>
      <p class="notice">风险和利益：</p>
      <div class="partion">
        问卷调查通常不涉及任何风险，但可能会消耗您一些时间和精力。通过参与调查，您将有机会对某一特定主题进行表达，为相关研究和决策提供宝贵的信息。
      </div>
      <p class="notice">保密和隐私：</p>
      <div class="partion">
        我们将严格保护您的个人信息，确保其安全性和保密性。您的回答将仅用于研究目的，并不会用于商业目的。在研究结果中，我们会以汇总的形式呈现，不会透露任何能够识别您个人身份的信息。
      </div>
      <p class="notice">自愿参与：</p>
      <div class="partion">
        您的参与是完全自愿的，您有权随时中断或退出问卷调查，而不会受到任何处罚或不利影响。
      </div>
      <div class="partion">
        如果您对本次问卷调查有任何疑问或需要进一步的信息，请随时与我们联系。如果您同意参与本次调查，请在下方签字表示您已经阅读并理解了以上内容，并同意参与本次问卷调查。
      </div>
      <div class="partion">感谢您的合作与支持！</div>
      <div class="right">研究团队签名：广西大学语言认知实验室</div>
      <div class="right">日期：2023年12月4日</div>
      <div class="right">
        <el-button type="success" @click="agree" size="large">同意</el-button>
      </div>
    </div>
  </div>
  <div v-else class="container">
    <h1 class="title">Experimental informed consent</h1>
    <div class="content">
      <p class="notice">Introduction of research background:</p>
      <ul>
        <li>
          You are about to participate in a study organized by the School of
          Literature of Guangxi University, which will last for one hour. Since
          you meet the requirements of the test subjects, you are hereby invited
          to participate in this experiment.
        </li>
        <li>
          This informed consent form will provide information that will help you
          decide whether or not to participate in the study. Your participation
          in this study is voluntary, and this study has been reviewed by the
          Ethics Review Committee of the research institution. If you agree to
          participate in this study, please read the following instructions:
        </li>
      </ul>
      <p class="notice">Informed consent Signature:</p>
      <ul>
        <li>
          I have read this informed consent carefully, and the researcher has
          given me a detailed explanation of the purpose, content, risks and
          benefits of the experiment, and given answers to my questions. I have
          learned about this experiment, and I am willing to participate in this
          experiment.
        </li>
      </ul>
      <div class="right">
        <el-button type="success" @click="agree">AGREE</el-button>
      </div>
    </div>
  </div>

</template>

<script>
import { ElMessageBox } from "element-plus";
export default {
  data() {
    return {
      radio: 1,
      dialogVisible: false,
      languageVisible: false,
    };
  },
  methods: {
    agree() {
      // this.dialogVisible = true;

      // 在此处可以添加逻辑，表示用户已同意阅读须知
      console.log("用户已同意阅读须知");
      window.location.href = '/info';
    },
    zh() {
      // this.dialogVisible = false ;
      window.location.href = "/zh/formDate";
      this.dialogVisible = false;
    },
    en() {
      // this.dialogVisible = false ;
      window.location.href = "/en/formDate";
      this.dialogVisible = false;
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 1024px;
  margin: 0 auto;
  padding: 20px;
  font-size: 24px;
  /* display: flex; */
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
.partion {
  text-indent: 2em;
}

.content {
  margin-top: 50px;
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
  margin-bottom: 10px;
}
</style>
