<script setup>
import  Table  from '../views/CpusE.vue';



</script>

<template>
    <div>
        <el-container>
  <el-header>Language Experience and Chinese Proficiency Questionnaire</el-header>
  <el-main><Table></Table></el-main>
  <!-- <el-footer>Footer</el-footer> -->
</el-container>
    </div>
</template>
<style>
  .el-header {
    /* background-color: #B3C0D1; */
    /* color: #333; */
    text-align: center;
    font-size: 40px;
    line-height: 120px;
    position: page;
    background-size: cover;
    width: 100vw;
    height: 13vh;
    left:0px;
    right:0px;
    /* position: absolute; */
    /* top: 0px; */
    left: 0px;
    /* width: 100%; */
  } 
  .el-footer{
    /* background-color: #B3C0D1; */
    /* color: #333; */
    text-align: center;
    font-size: 40px;
    line-height: 120px;
    position: absolute;
    /* top: 0px; */
    left: 0px;
    width: 100%;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    /* color: #333; */
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    /* background-color: #E9EEF3; */
    /* color: #333; */
    width: 100%;
    /* position: absolute; */
    /* text-align: center; */
    line-height: 40px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>