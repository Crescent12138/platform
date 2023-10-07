import axios from 'axios';

// 创建自定义的Axios实例
const instance = axios.create({
  baseURL: 'http://localhost:8080/', // 设置请求的域名
  headers: {
    'Corpus-Token':"1",
    'Content-Type': 'application/json' // 设置默认的请求头
  }
});

// 定义请求拦截器
instance.interceptors.request.use(function (config) {
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
      return response.data;
    })
    .catch(function (error) {
      console.error(error);
      throw error;
    });
}
