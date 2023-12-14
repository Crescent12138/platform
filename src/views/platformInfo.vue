<template>
    <div class = "container">
        <h1 class="title">平台的说明书</h1>
         <div class="content">
      <!-- <div class="partion">尊敬的参与者：</div> -->
      <div class="partion">
       您好，欢迎参与我们的问卷调查！     </div>
      <!-- <p class="notice">研究目的：</p> -->
      <div class="partion">
       本问卷由广西大学语言认知实验室发布，拟在本平台通过问卷收集预测性评定数据。    </div>
      <!-- <p class="notice">风险和利益：</p> -->
      <div class="partion">
     本问卷分为两部分：一是背景问卷，在这项调查中我们严格保密填写者的信息，确保所有的数据只用来进行实验研究。二是完型题目填写，一个练习题和五个正式测试题，填写框内一次只能填写一个词。     </div>
      <!-- <p class="notice">保密和隐私：</p> -->
      <div class="partion">
   本问卷完成后您将获得一定报酬，报酬的发放标准是填写的是否完善，切勿随意填写。报酬的发放最终解释权归广西大学语言认知实验室所有。    </div>
      <!-- <p class="notice">自愿参与：</p> -->
      <div class="partion">
  本研究目前在保密阶段，请勿泄露填写的相关内容。      </div>
      <div class="partion">
     如有疑问，请联系工作人员：   </div>
      <div class="partion">由文华，广西大学文学院，电话17814313598，邮箱3053198530@qq.com。</div>
      <!-- <div class="right">研究团队签名：广西大学语言认知实验室</div>
      <div class="right">日期：2023年12月4日</div> -->
      <div class="right">
        <el-button type="success" @click="agree" size="large">下一步</el-button>
      </div>
  
    </div>
    
   <el-dialog
    v-model="dialogVisible"
    title="Choose"
    width="30%"
    :before-close="handleClose"
  >
    <template #footer>
      <span
        style="
          display: flex;
          justify-content: center;
          margin-left: auto;
          margin-right: auto;
        "
      >
        <el-button
          @click="
            this.dialogVisible = false;
            languageVisible = true;
          "
          type="primary"
          >非汉语母语者</el-button
        >
        <el-button type="primary" @click="zh"> 汉语母语者 </el-button>
      </span>
    </template>
  </el-dialog>
   <el-dialog
    v-model="languageVisible"
    title="Choose"
    width="30%"
    :before-close="handleClose"
  >
    <template #footer>
      <span
        style="
          display: flex;
          justify-content: center;
          margin-left: auto;
          margin-right: auto;
        "
      >
        <el-button
          @click="
            languageVisible = false;
            this.dialogVisible = true;
          "
        >
          BACK
        </el-button>
        <el-button @click="en" type="primary" size="large">ENGLISH</el-button>
      </span>
    </template>
  </el-dialog>
    </div>
</template>
<script>
export default {
    data() {
        return {
        dialogVisible :false,
        languageVisible:false
        }
    },
    methods: {
           agree() {
      this.dialogVisible = true;

      // 在此处可以添加逻辑，表示用户已同意阅读须知
      console.log("用户已同意阅读须知");
      // window.location.href = '/formDate';
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
}
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