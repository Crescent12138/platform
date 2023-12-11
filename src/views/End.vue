<template>
    <div>
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span style="font-family: font-family: SimHei, Arial, sans-serif; font-size: 36px; 
                    font-weight: bold;;">致谢</span>
            </div>
            <div class="text item">
                感谢您的参与，我们的工作人员会主动联系您并发放测试报酬，请您耐心等待。
            </div>
            <div class="text item">
                联系地址：广西大学文学院
            </div>
            <div class="text item">
                <!-- <br/> -->
                广西大学语言认知实验室；
            </div>
            <div class="text item">
                联系电话：12312312312
            </div>
        </el-card>
    </div>
</template>
<script>
export default {
    data() {
    },
    methods: {
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