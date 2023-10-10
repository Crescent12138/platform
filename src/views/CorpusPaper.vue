<script setup>
import Paper from '../views/corpus.vue'

</script>

<template>
    <div>
        <el-container>
            <el-header>语言经验和汉语水平问卷</el-header>
            <el-main >
                <div style="display: flex; justify-content: center; align-items: center;">
                    <Paper/>
                </div>
                <!-- <Paper/> -->
            </el-main>
            <el-footer>Footer</el-footer>
        </el-container>
    </div>
</template>
<style>
.el-header,
.el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
}

.el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
}

.el-main {
    background-color: #E9EEF3;
    color: #333;
    /* text-align: center; */
    line-height: 160px;
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
}</style>