<template>
    <div>
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span style="font-family: font-family: SimHei, Arial, sans-serif; font-size: 36px; 
                    font-weight: bold;;">测试规则</span>
                <!-- <el-button style="float: right; padding: 3px " type="text">操作按钮</el-button> -->
            </div>
            <div class="text item">
                您需要根据已知信息预测下一个即将出现的词，并填在下方文本框中。本次测试并无固定答案，请根据您的判断放心填写。
            </div>
            <div>
                <el-button @click="onNext">开始答题</el-button>
            </div>
        </el-card>
    </div>
</template>

<script>
export default {
    data() {
    },
    methods: {
        onNext() {
            console.log(this.form);
            console.log("submit!");
            window.location.href = '/paper';
        },
    },
}
</script>
<style>
.text {
    font-size: 16px;
    line-height: 1.5;
}

.item {
    margin-bottom: 10px;
    text-indent: 2em;
    text-align: left !important;
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
    width: 400px;
}
</style>