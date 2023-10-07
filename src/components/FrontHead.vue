<template>
  <div class="container">
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
  </div>
</template>

<script>
export default {
  methods: {
    agree() {
      // 在此处可以添加逻辑，表示用户已同意阅读须知
      console.log("用户已同意阅读须知");
      window.location.href = '/formDate'; 
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
  background-color: hsla(120, 60%, 90%, 1);
  height: 100vh; /* 让容器充满整个视口高度 */
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
  background-color: lightblue;
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
.right{
     display: flex;
  justify-content: flex-end;
}
</style>
