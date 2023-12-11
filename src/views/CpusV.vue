<template>
    <div class="container">
        <div class="content">
            <el-form ref="form" :model="form" :rules="rules" label-position="left" label-width="600px">
                <el-card class="box-card" v-for="(id, idx, o) in  question " :key="o" shadow="never">

                    <div class="text item">
                        {{ o + 1 }}.{{ id }}
                        <br>
                        <br>
                        <!-- <div>
                            注释部分 选中日期使用当前的选框
                        </div> -->
                        <div v-if="idx === 'birthday' || idx === 'come_to_china'">
                            <el-form-item label="  " label-width="10px" prop="dates">
                                <el-date-picker v-model.date="form[idx]" type="date" placeholder="选择日期"
                                    style="width: 100%;float: left;width: 300px"></el-date-picker>
                            </el-form-item>
                        </div>
                        <!-- <div>
                            注释部分 数字使用当前的选框
                        </div> -->
                        <div v-else-if="idx === 'age' || idx === 'education_time' || idx === 'learning_chinese_age' || idx === 'learn_chinese_time' || idx === 'oral_age' || idx === 'talk_well_age'
                            || idx === 'talk_well_age' || idx === 'learning_read_age' || idx === 'read_well_age' || idx === 'chinese_oral' || idx === 'understand_chinese_oral' || idx === 'read_chinese'
                            ">
                            <el-form-item label="  " label-width="10px" :prop="idx" :rules="[
                                { required: true, message: '不能为空' },
                                { type: 'number', message: '必须为数字值' }
                            ]">
                                <el-input v-model.number="form[idx]" type="number"
                                    style="width: 100%;float: left;width: 300px"></el-input>
                            </el-form-item>
                        </div>
                         <!-- <div>
                            注释部分 数字使用当前的选框0-10区间判定
                        </div> -->
                        <div
                            v-else-if="idx === 'promote_family' || idx === 'promote_app' || idx === 'promote_friend' || idx === 'promote_radio' || idx === 'promote_tv'
                                || idx === 'frequency_family' || idx == 'frequency_app' || idx === 'frequency_friend' || idx === 'frequency_radio' || idx === 'frequency_tv'">
                            <el-form-item label="  " label-width="10px" :prop="idx" :rules="[
                                { required: true, message: '不能为空' },
                                { type: 'number', message: '必须为数字值' },
                                { validator: this.validateMaxMin, trigger: 'blur' }]">
                                <el-input v-model.number="form[idx]" type="number"
                                    style="width: 100%;float: left;width: 300px"></el-input>
                            </el-form-item>
                        </div>
                        <!-- <div>
                            注释部分 特定列表1，语言顺序选择列表
                        </div> -->
                        <div v-else-if="idx === 'order_language_list' || idx === 'learned_language_list'">
                            <el-form-item label="  " label-width="10px" :prop="idx" :rules="[
                                    { required: true, message: '不能为空' },
                                ]">
                                <el-select v-model="form[idx]" multiple placeholder="请选择" style="width: 60%;float: left;"
                                filterable allow-create  clearable>
                                    <el-option v-for=" item  in  language_list_option " :key="item.value"
                                        :label="item.label" :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                        </div>
                        <!-- <div>
                            注释部分 特定列表2，语言频率选择列表 百分比
                        </div> -->
                        <div
                            v-else-if="idx === 'touch_language_list' || idx === 'map_read_language_percent' || idx === 'map_interacton_language_percent'">
                            <el-form-item label="  " label-width="10px" :prop="idx" :rules="[
                                    { validator: this.validateSum, trigger: 'blur' },
                                ]">
                                <br />
                                <!-- <el-checkbox-group v-model="selectedOptions"> -->
                                <el-form-item v-for="( option, it ) in  form.order_language_list " :key="option"
                                    :label="option" label-width="80px" :prop="idx" :rules="[
                                            { validator: this.validateSum, trigger: 'blur' },
                                        ]" style="margin-bottom: 20px;">
                                    <el-input v-model.number="form[idx][it]" type="number"
                                        style="width: 80%;float: left;width: 200px"></el-input>
                                </el-form-item>
                            </el-form-item>
                        </div>
                        <!-- <div>
                            注释部分 文化认同专题
                        </div> -->
                        <div v-else-if="idx === 'map_cultural_identity_percent'">
                            <div slot="header">
                                <el-button style="float: left; ;margin-right: 5px;" type="primary"
                                    @click="addCultural">ADD</el-button>
                                <el-button style="float: right; ;margin-right: 5px;" type="danger"
                                    @click="delCultural">DELETE</el-button>
                            </div>

                            <div slot="body">
                                <br>
                                <!-- <el-input v-model="form.map_cultural_identity_percent[0].val" style="width: 200px"></el-input> -->
                                <div v-for="( option, it ) in  form.map_cultural_identity_percent " :key="option">
                                    <!-- <el-input v-model="form.map_cultural_identity_percent[0].val" style="width: 200px"></el-input> -->
                                <!-- <el-form-item :label="it"> -->
                                    <el-input v-model="option.val" style="width: 260px"> 

                                        <!-- {{ it }} -->
                                        <template #prepend class="input-with-select">
                                            <el-select v-model="option.key" placeholder="Please select"
                                                style="width: 200px;; text-align: left;" filterable allow-create>
                                                <el-option v-for=" item  in  culturalidentity_percent_option "
                                                    :key="item.value" :label="item.label" :value="item.value"
                                                    style="text-align: left;">
                                                </el-option>
                                            </el-select>
                                        </template>
                                    </el-input>
                                    
                                    <!-- </el-form-item> -->
                                </div>
                            </div>
                        </div>
                        <!-- <div>
                            注释部分 教育程度专题
                        </div> -->
                        <div v-else-if="idx === 'academic_credentials' || idx === 'chinese_number'">
                            <div>
                                <!-- <el-form-item label=" "> -->
                                    <el-select v-model="form[idx]" placeholder="请选择"
                                        style="width: 200px;; text-align: left;">
                                        <div v-if="idx === 'academic_credentials'">
                                            <el-option v-for=" item  in  education_credentials_option " :key="item.value"
                                                :label="item.label" :value="item.value" style="text-align: left;">
                                            </el-option>
                                        </div>
                                        <div v-else-if="idx === 'chinese_number'">
                                            <el-option v-for=" item  in  language_number " :key="item.value"
                                                :label="item.label" :value="item.value" style="text-align: left;">
                                            </el-option>
                                        </div>
                                    </el-select>
                                <!-- </el-form-item> -->
                            </div>
                        </div>
                        <!-- <div>
                            注释部分 是否具有障碍
                        </div> -->
                        <div v-else-if="idx === 'disability_list'">
                            <div>
                                <!-- <el-form-item label=" "> -->
                                    <el-select v-model="form[idx]" placeholder="请选择" style="" multiple collapse-tags>
                                        <el-option v-for=" item  in  disable " :key="item.value" :label="item.label"
                                            :value="item.value" style="text-align: left;">
                                        </el-option>
                                    </el-select>
                                <!-- </el-form-item> -->
                            </div>
                        </div>

                        <!-- <div>
                            注释部分 字符串非空
                        </div> -->
                        <div v-else>
                            <el-form-item label="  " label-width="10px" :prop="idx" :rules="[
                                    { required: true, message: '不能为空' },
                                ]">
                                <el-input v-model="form[idx]" class="center-input"></el-input>
                            </el-form-item>
                        </div>
                    </div>
                </el-card>
                <br>
                <el-card style=" display: flex; justify-content: center;" shadow="never">
                    <el-button type="primary" @click="onSubmit">提交</el-button>
                </el-card>
                <!-- </el-card> -->
            </el-form>
        </div>
    </div>
</template>
  
<style>
.form-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    position: relative;
    /* 添加相对定位 */
}
.center-input{
    display: flex;
    width: 100%;
    float: right;
    width: 300px ;
    /* margin-left: auto; */
    /* margin-right: auto; */
}
.box-card {
    /* margin-right: 10px; */
    margin-bottom: 20px;
}

.submit-button-container {
    position: absolute;
    /* 添加绝对定位 */
    bottom: 0;
    /* 将按钮定位到底部 */
    align-items: center;
    margin-bottom: 40px;
    /* 添加一些底边距 */
}

.container {
    display: flex;
    justify-content: center;
}

.content {
    max-width: 800px;
    /* 设置容器的最大宽度 */
    width: 100%;
    /* background-color: #f0f0f0; */
    /* 设置背景颜色为灰色 */
}

.item {
    padding: 18px 0;
}

.input-with-select {

    background-color: #fff;
}

.text {
    font-family: "宋体", Arial, sans-serif;
    /* 设置字体为宋体，如果系统中无法找到宋体字体，则使用Arial字体作为替代 */
    font-size: 16px;
    /* 设置字体大小为16像素 */
}
</style>
<script>
import { postRequest } from '../api/paper';
import { ElNotification } from 'element-plus'
import { ref, h } from 'vue'
export default {
    data() {
        return {
            validateSum(rule, value, callback) {
                let sum = 0
                for (let i in value) {
                    console.log(value[i])
                    sum += Number(value[i]);
                }
                const targetSum = 100; // 设置目标和为10
                if (sum !== targetSum) {
                    callback(new Error('数字之和必须为100'));
                } else {
                    callback();
                }
            },
            validateMaxMin(rule, value, callback) {
                // console.log(value)
                if (value < 0) {
                    callback(new Error('数字区间必须在0-10范围内'));
                }
                if (value > 10) {
                    callback(new Error('数字区间必须在0-10范围内'));
                }
                callback();
            },
            culturalidentity_percent_option: [
                { value: "中国文化", label: "中国文化" },
                { value: "美国文化", label: "美国文化" },
                { value: "基督文化", label: "基督文化" },
                { value: "嘻哈文化", label: "嘻哈文化" },
                { value: "躺平文化", label: "躺平文化" },
            ],
            education_credentials_option: [
                { value: "高中及以下", label: "高中及以下" },
                { value: "大专", label: "大专" },
                { value: "本科", label: "本科" },
                { value: "硕士", label: "硕士" },
                { value: "博士", label: "博士" },
            ],
            disable: [
                { value: "视力障碍", label: "视力障碍" },
                { value: "听力障碍", label: "听力障碍" },
                { value: "语言障碍", label: "语言障碍" },
                { value: "学习障碍", label: "学习障碍" },
                { value: "以上均无", label: "以上均无" },
            ],
            language_number: [
                { value: "第一语言", label: "第一语言" },
                { value: "第二语言", label: "第二语言" },
                { value: "第三语言", label: "第三语言" },
                { value: "第四语言", label: "第四语言" },
                { value: "超过四个", label: "超过四个" },
            ],
            formData: {
                name: '',
                gender: '',
                age: '',
                nativePlace: '',
                phone: '',
                qq: ''
            },
            form: {
                name: "",
                age: null,
                birthday: "",
                birthplace: "",
                sex: "",
                country: "",
                order_language_list: [],
                learned_language_list: [],
                touch_language_list: [],
                map_read_language_percent: [],
                map_interacton_language_percent: [],
                map_cultural_identity_percent: [
                    {
                        key: "",
                        val: 0,
                    }
                ],
                education_time: "",
                academic_credentials: "",
                come_to_china: "",
                disability_list: [],
                chinese_number: "",
                learning_chinese_age: "",
                learn_chinese_time: "",
                // age_list:[],
                oral_age: "",
                talk_well_age: "",
                learning_read_age: "",
                read_well_age: "",
                chinese_country: "",
                chinese_country_month: "",
                chinese_country_year: "",
                chinese_family_month: "",
                chinese_family_year: "",
                chinese_family: "",
                chinese_school_month: "",
                chinese_school_year: "",
                chinese_school: "",
                chinese_oral: "",
                understand_chinese_oral: "",
                read_chinese: "",
                promote: [],
                frequency: [],
                oral_accent: "",
                others_feeling_oral_accent: "",
                region: "",
                date1: "",
                date2: "",
                delivery: false,
                type: [],
                resource: "",
                last_year: "",
                desc: "",
                promote_friend: "",
                promote_family: "",
                promote_app: "",
                promote_tv: "",
                promote_radio: "",
                frequency_friend: "",
                frequency_family: "",
                frequency_app: "",
                frequency_tv: "",
                frequency_radio: "",
            },
            question: {
                name: "请问你的名字是",
                age: "请问你的年龄是",
                birthday: "请问你的生日是",
                birthplace: "请问你的出生地是",
                come_to_china: "请问你来中国的时间是",
                sex: "请问你的性别是",
                // country: "请问你来中国的时间是",
                order_language_list: "请你按照从先往后对你所习得的语言进行一个排序",
                learned_language_list: "请你对你所习得的语言使用的主次顺序进行排序",
                touch_language_list: "请列出您目前接触每种语言的时间百分比（总和为100%）",
                map_read_language_percent: "如果要阅读一篇您未掌握的语言的材料，您更想用您所掌握的哪几种语言来阅读，请写出您选择每种语言的概率",
                map_interacton_language_percent: "当您和一个语言能力与您完全匹配的人交流时，您更想用您所掌握的哪几种语言交流，请写出您选择每种语言的概率",
                map_cultural_identity_percent: "请列出您所认同的各种文化，并在0-10的数值范围内标出您对每种文化认同程度。",
                education_time: "请问你受教育的时长是多少年",
                academic_credentials: "请问你的最高教育程度是",

                disability_list: "请问你是否有以下障碍",
                chinese_number: "汉语是你的第几语言",
                learning_chinese_age: "你从几岁开始学汉语",
                learn_chinese_time: "你学了几年汉语",
                // age_list:[],
                oral_age: "你几岁开始学习口语",
                talk_well_age: "你几岁开始熟练说口语",
                learning_read_age: "你几岁开始学习阅读",
                read_well_age: "你几岁开始能读的流畅",
                chinese_country: "你在汉语国家度过的时长",
                // chinese_country_month: "",
                // chinese_country_year: "",
                // chinese_family_month: "",
                // chinese_family_year: "",
                chinese_family: "你在汉语的家庭中度过的时长",
                // chinese_school_month: "",
                // chinese_school_year: "",
                chinese_school: "你在使用汉语的学校中度过的时长",
                chinese_oral: "请在1-10的范围内，标出你的汉语口语能力",
                understand_chinese_oral: "请在1-10的范围内，标出你的汉语理解能力",
                read_chinese: "请在1-10的范围内，标出你的阅读能力",
                promote_friend: "请在1-10的范围内，标出与朋友交流互动对您学习汉语的促进效果",
                promote_family: "请在1-10的范围内，标出与家庭交流互动对您学习汉语的促进效果",
                promote_app: "请在1-10的范围内，标出汉语APP自学对您学习汉语的促进效果",
                promote_tv: "请在1-10的范围内，标出看电视对您学习汉语的促进效果",
                promote_radio: "请在1-10的范围内，标出听收音机对您学习汉语的促进效果",
                frequency_friend: "请在1-10的范围内，标出您目前接触与朋友交流互动的频率",
                frequency_family: "请在1-10的范围内，标出您目前接触与家庭交流互动的频率",
                frequency_app: "请在1-10的范围内，标出您目前接触汉语APP自学的频率",
                frequency_tv: "请在1-10的范围内，标出您目前接触看电视的频率",
                frequency_radio: "请在1-10的范围内，标出您目前接触听收音机的频率",
                // oral_accent: "",
                // others_feeling_oral_accent: "",
                // region: "",
                // date1: "",
                // date2: "",
                // delivery: false,
                // type: [],
                // resource: "",
                // last_year: "",
                // desc: "",

            },
            language_list_option: [
                { value: "英语", label: "英语" },
                { value: "汉语", label: "汉语" },
                { value: "日语", label: "日语" },
                { value: "俄语", label: "俄语" },
                { value: "法语", label: "法语" },
            ],
        };
    },
    methods: {
        submitForm() {
            // this.$refs.form.validate((valid) => {
            // if (valid) {
            // 提交表单数据
            console.log(this.form);
            // } else {
            // console.log('表单校验失败');
            // return false;
            // }
            // });
        },
        addCultural() {
            // console.log(111)
            // console.log(this.form.map_cultural_identity_percent)
            // this.map_cultural_identity_percent.
            this.form.map_cultural_identity_percent.push({
                key: "",
                val: 0,
            });
            console.log(this.form.map_cultural_identity_percent)
        },
        delCultural() {
            console.log(this.form.map_cultural_identity_percent)
            if (this.form.map_cultural_identity_percent.length > 1) {
                this.form.map_cultural_identity_percent.pop();
            }
        },
        onSubmit() {
            postRequest('/person/receive', {
                "form": this.form,
                "name": this.form.name,
            }).then((data) => {
                // console.log(data);
                localStorage.setItem('Corpus-Token', data.data.id);
                ElNotification({
                    title: 'submit success',
                    message: h('i', { style: 'color: teal' }, 'please wait。。。'),
                });
                setTimeout(function () {
                    window.location.href = '/rule';
                }, 3000);
            });
        },


    }
};
</script>
  