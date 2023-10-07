<template>
    <div>
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>测试规则</span>
                <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
            </div>
            <div class="text item">
                不知道介绍什么，总之就随便写写。
            </div>
            <div>
                <el-button @click = "onNext">开始答题</el-button>
            </div>
            <!-- <div v-for="o in 4" :key="o" class="text item">
                {{ '列表内容 ' + o }}
            </div> -->
        </el-card>
    </div>
</template>

<script>
export default{
    data(){

    },
    methods: {
    onNext() {
      console.log(this.form);
      console.log("submit!");
      window.location.href = '/paper'; 
    },
    // addOption() {
    //   this.form.map_cultural_identity_percent.push({
    //     key: "",
    //     val: 0,
    //   });
    // },
    // removeOption() {
    //   if (this.form.map_cultural_identity_percent.length > 1) {
    //     this.form.map_cultural_identity_percent.pop();
    //   }
    // },
  },
}
</script>
<style>
.text {
    font-size: 14px;
}

.item {
    margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
    display: table;
    content: "";
}

.clearfix:after {
    clear: both
}

.box-card {
    width: 480px;
}
</style>