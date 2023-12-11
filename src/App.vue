<script setup>

</script>

<template>
  <div class="container">
    
    
    <!-- 原先的内容 -->
    <RouterView />
  </div>
</template>

<style scoped>
.container {
  /* margin-top:0px; */
  /* max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh; 让容器充满整个视口高度 */
  /* height: 100vh; */
  /* background-image: url('@/assets/back.jpg'); 设置背景图路径，根据实际情况进行修改 */
  /* background-repeat: no-repeat; 禁止背景图重复显示 */
  background-size: cover; /* 背景图按比例缩放以填满容器 */
  width: 100%;
  height: 100%;
  margin: 0;
  /* background-color: rgba(0, 0, 255, 0.); */
}

@media (min-width: 1024px) {
  /* 可选：如果你想在大屏幕上应用不同的样式 */
}
</style>
