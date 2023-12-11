<template>
    <div>
        <el-container>
            <el-header>
                <div class="font-edit">
                    预测性评定平台
                </div>
                <div class="start-button">
                    <el-button type="success" size="large" round @click="next">START</el-button>
                </div>

            </el-header>
            <!-- <el-main></el-main> -->
            <el-footer>
                广西大学语言认知实验室
                <br>
                地址：广西大学文学院505

            </el-footer>
        </el-container>
    </div>
</template>
<script>
export default {
    data() {
        return {

        };
    },
    methods: {
        next() {
            window.location.href = '/forahead';
        }
    }

}

</script>
<style>
.el-header {
    background-image: url('@/assets/R-C.png');
    font-size: 40px;
    justify-content: center;
    line-height: 120px;
    /* position: page; */
    background-size: cover;
    width: 100vw;
    height: 90vh;
    left: 0px;
    right: 0px;
    left: 0px;
}

.el-footer {
    background-color: #E9EEF3;
    text-align: center;
    font-size: 20px;
    line-height: 50px;
    height: 10vh;
    /* position: absolute; */
    /* left: 0px; */
    width: 100%;
}

.el-aside {
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

.font-edit {
    margin-top: 70px;
    /* justify-content: center; */
    /* color:black !important; */

    /* opacity: 1 !important; */
    /* color:rgba(255,255,255,0.4); */
    text-align: center;
    font-family: 'Courier New', Courier, monospace;
    font-size: 40px;
}

.start-button {
    display: flex;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    margin-top: 70px;
}

body>.el-container {
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