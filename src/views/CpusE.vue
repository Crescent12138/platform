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

                                <el-date-picker v-model.date="form[idx]" type="date" placeholder="Select Date"
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
                                { required: true, message: 'Cannot be empty' },
                                { type: 'number', message: 'Must be a numeric value' }
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
                                { required: true, message: 'Cannot be empty' },
                                { type: 'number', message: 'Must be a numeric value' },
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
                                { required: true, message: 'Cannot be empty' },
                            ]">
                                <el-select v-model="form[idx]" multiple placeholder="Please select"
                                    style="width: 60%;float: left;" filterable allow-create clearable>
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
                                    <el-select v-model="form[idx]" placeholder="Please select"
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
                                    <el-select v-model="form[idx]" placeholder="Please select" style="" multiple
                                        collapse-tags>
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
                                { required: true, message: 'Cannot be empty' },
                            ]">
                                <el-input v-model="form[idx]" class="center-input"></el-input>
                            </el-form-item>
                        </div>
                    </div>
                </el-card>
                <br>
                <el-card style=" display: flex; justify-content: center;" shadow="never">
                    <el-button type="primary" @click="onSubmit">Submit</el-button>
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
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    /* 设置字体为宋体，如果系统中无法找到宋体字体，则使用Arial字体作为替代 */
    font-size: 16px;
    /* 设置字体大小为16像素 */
}
</style>
<script>
import { postRequest } from '../api/paper';
import { ref, h } from 'vue'
import { ElNotification } from 'element-plus'
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
                    callback(new Error('The sum of numbers must be 100'));
                } else {
                    callback();
                }
            },
            validateMaxMin(rule, value, callback) {
                // console.log(value)
                if (value < 0 || value > 10) {
                    callback(new Error('The number range must be within the range of 0-10'));
                }

                callback();
            },
            culturalidentity_percent_option: [
                { value: "Chinese Culture", label: "Chinese Culture" },
                { value: "American Culture", label: "American Culture" },
                { value: "Christian culture", label: "Christian culture" },
                { value: "Hip-hop culture", label: "Hip-hop culture" },
                { value: "Lying flat culture", label: "Lying flat culture" },
            ],
            education_credentials_option: [
                { value: "High school or below", label: "High school or below" },
                { value: "junior college", label: "junior college" },
                { value: "undergraduate course", label: "undergraduate course" },
                { value: "Master", label: "Master" },
                { value: "Dr", label: "Dr" },
            ],
            disable: [
                { value: "Visual impairment", label: "Visual impairment" },
                { value: "Hearing impairment", label: "Hearing impairment" },
                { value: "language barrier", label: "language barrier" },
                { value: "learning disorder", label: "learning disorder" },
                { value: "None of the above", label: "None of the above" },
            ],
            language_number: [
                { value: "first language", label: "first language" },
                { value: "second language", label: "second language" },
                { value: "Third language", label: "Third language" },
                { value: "Fourth Language", label: "Fourth Language" },
                { value: "More than four", label: "More than four" },
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
                name: "What's your name",
                age: "What's your age",
                birthday: "May I know your birthday",
                birthplace: "May I ask your birthplace",
                come_to_china: "May I ask when you came to China",
                sex: "May I ask your gender",
                // country: "请问你来中国的时间是",
                order_language_list: "Please sort the languages you have learned from first to last. If the language does not exist, you can manually input it",
                learned_language_list: "Please sort the primary and secondary order of the language you have learned. If the language does not exist, you can manually input it",
                touch_language_list: "Please list the percentage of time you have been exposed to each language (totaling 100%)",
                map_read_language_percent: "If you want to read a material in a language you have not yet mastered, and which languages do you prefer to read in? Please write down the probability of choosing each language",
                map_interacton_language_percent: "When communicating with someone with a language proficiency that perfectly matches yours, which languages do you prefer to communicate in? Please write down the probability of choosing each language",
                map_cultural_identity_percent: "(6) Please name the cultures with which you identify.On a scale from zero to ten, please rate the extent to which you identify witheach culture. (Examples of possible cultures include US-American, Chinese, Jewish-Orthodox, etce)",
                education_time: "May I ask how long you have been educated",
                academic_credentials: "May I ask what is your highest level of education",

                disability_list: "Have you ever had a vision problem",
                chinese_number: "This is your __ language",
                learning_chinese_age: "How old have you been learning Chinese since",
                learn_chinese_time: "How many years have you studied Chinese",
                // age_list:[],
                oral_age: "How old did you start learning oral ",
                talk_well_age: "How old did you start speaking fluently",
                learning_read_age: "How old did you start learning to read",
                read_well_age: "How old did you start reading fluently",
                chinese_country: "The length of time you spent in a Chinese speaking country",
                // chinese_country_month: "",
                // chinese_country_year: "",
                // chinese_family_month: "",
                // chinese_family_year: "",
                chinese_family: "The length of time you spent in a Chinese speaking family",
                // chinese_school_month: "",
                // chinese_school_year: "",
                chinese_school: "The length of time you spent in a school where Chinese is spoken",
                chinese_oral: "Please indicate your Chinese speaking ability within the range of 1-10",
                understand_chinese_oral: "Please indicate your Chinese comprehension ability within the range of 1-10",
                read_chinese: "Please indicate your reading ability within the range of 1-10",
                promote_friend: "Please indicate within the range of 1-10 the promotion effect of communication and interaction with friends on your learning of Chinese",
                promote_family: "Please indicate within the range of 1-10 the promotion effect of family communication and interaction on your learning of Chinese",
                promote_app: "Please indicate within the range of 1-10 the promotion effect of self-learning with the Chinese language app on your learning of Chinese",
                promote_tv: "Please mark the promotion effect of watching TV on your learning of Chinese within the range of 1-10",
                promote_radio: "Please mark the promotion effect of listening to the radio on your learning of Chinese within the range of 1-10",
                frequency_friend: "Please indicate the frequency of communication and interaction with friends within the range of 1-10",
                frequency_family: "Please indicate the frequency of your current contact and family interaction within the range of 1-10",
                frequency_app: "Please indicate within the range of 1-10 the frequency of your current exposure to self-study Chinese language apps",
                frequency_tv: "Please indicate the frequency of your current exposure to watching TV within the range of 1-10",
                frequency_radio: "Please indicate the frequency of your current exposure to the radio within the range of 1-10",
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
                { value: "English",   label: "English" },
                { value: "Chinese",   label: "Chinese" },
                { value: "Janpanese", label: "Janpanese" },
                { value: "Russian",   label: "Russian" },
                { value: "French",    label: "French" },
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
  