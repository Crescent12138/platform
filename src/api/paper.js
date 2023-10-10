import axios from 'axios';
import {BaseURL} from './dev.js';
import { ref, h } from 'vue'
import { ElNotification } from 'element-plus'
// import Vue from 'vue'
// import ElementUI from 'element-ui'
// import locale from 'element-ui/lib/locale/lang/en'
// 创建自定义的Axios实例
const instance = axios.create({
  baseURL: BaseURL, // 设置请求的域名
  headers: {
    // 'Corpus-Token':"",
    'Content-Type': 'application/json' // 设置默认的请求头
  }
});

// 定义请求拦截器
instance.interceptors.request.use(function (config) {
  
  config.headers['Corpus-Token'] = localStorage.getItem('Corpus-Token');
  console.log(config.headers['Corpus-Token'])
  // 在发送请求之前可以进行一些操作，如添加请求头、身份验证等
  return config;
}, function (error) {
  // 处理请求错误
  return Promise.reject(error);
});

// 定义响应拦截器
instance.interceptors.response.use(function (response) {
  // 对响应数据进行处理
  return response;
}, function (error) {
  // 处理响应错误
  return Promise.reject(error);
});

// 封装POST请求
export function postRequest(url, data) {
  return instance.post(url, data)
    .then(function (response) {
      if(typeof response.data.success == 'undefined'){
        ElNotification({
          title: '频繁提交',
          message: h('i', { style: 'color: teal' }, '请稍后')
      });
      return
    }
      if(response.data.code != 200){
          if(response.data.code == 210){
            // this.$message.error(response.data.message);
              window.location.href = '/formDate';

          }
        return ;
      }
      return response.data;
    })
    .catch(function (error) {
      console.error(error);
      throw error;
    });
}
