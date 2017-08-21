import axios from 'axios';
import qs from 'qs';
import MsgToast from '@/components/prompt-msg';

let URL;
switch (process.env.NODE_ENV) {
  case 'production':
    URL = 'https://pmo.corpautohome.com/api/v1';
    break;
  case 'testing-environment':
    URL = 'http://test.kanban.corpautohome.com/api/v1';
    // URL = 'http://10.168.2.46/api/v1';
    break;
  default:
    URL = 'http://localhost:4000/';
}

// 默认设置
axios.defaults.baseURL = URL;
axios.defaults.timeout = 10000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.transformRequest = data => {
  // allowDots配置：risksList[0][riskType] => risksList[0].riskType  连接符用 “.”
  return qs.stringify(data, { allowDots: true });
};
// 调试相关
// 用于调试线上接口  methods 'PUT', 'POST', and 'PATCH'
if (process.env.NODE_ENV !== 'production') {
  axios.defaults.data = {
    apiType: 'localTest'
  };
}

// 请求拦截器
axios.interceptors.request.use(config => {
  // 用于调试线上接口 检测 get 方式检测
  if (process.env.NODE_ENV !== 'production') {
    if (['get', 'delete'].includes(config.method.toLowerCase())) {
      let params = config.params || {};
      params.apiType = 'localTest';
    }
  }
  return config;
}, error => {
  return Promise.reject(error);
});

// 响应拦截器
axios.interceptors.response.use(response => {
  // 状态码提示框
  MsgToast({
    status: response.data.status,
    msg: response.data.msg
  });
  if (response.data.status !== 0) {
    console.warn('axios 响应拦截器拦截 状态码异常:', response.data);
    return Promise.reject(new Error('状态码异常'));
  }
  return response;
}, error => {
  console.log(error);
  MsgToast({
    msg: '网络请求异常'
  });
  return Promise.reject(error);
});

/**
 * 这是一个请求方法
 * @param  {string}  method 请求方式
 * @param  {string}  url    请求连接
 * @param  {object}  params 请求参数
 * @return {Promise}        返回 Promise
 */
function reqMethod(method, url, obj) {
  let modeKey = ['post', 'put'].includes(method.toLowerCase()) ? 'data' : 'params';
  return new Promise((resolve, reject) => {
    axios({
      method: method.toLowerCase(),
      url: url,
      [modeKey]: obj || {}
    })
    .then(function(response) {
      resolve(response.data, url);
    })
    .catch(function(error) {
      reject(error);
    });
  });
};

export default reqMethod;
