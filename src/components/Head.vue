<template>
   <el-header>
    <div class="head">
        <div class = "hair">

        </div>
    </div>
   </el-header>
</template>
<style scoped>
head{
     position: relative;
  height: 100px; /* 设置头部高度 */

}.hair {
  position: absolute;
  top: 0;
  left: 50%; /* 设置刘海的水平位置为中间 */
  transform: translateX(-50%); /* 水平居中 */
  width: 100%; /* 设置刘海的宽度 */
  height: 50px; /* 设置刘海的高度 */
  background-color: #409EFF; /* 设置刘海的背景颜色 */
}
</style>