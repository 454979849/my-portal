import axios from 'axios';
import {Message} from 'element-ui';
import qs from 'qs'
import apiConfig from '@/api/apiConfig'
import urlConfig from '@/api/urlConfig'

const baseUrl = urlConfig.baseUrl;

export const fetch = axios.create({
  baseURL: baseUrl,
  timeout: 5000
});

fetch.interceptors.request.use(
  config => {

    return config
  },
  error => {
    console.log(error)
    Promise.reject(error)
  }
)

fetch.interceptors.response.use(
  response => response,
  error => {
    console.log('err' + error);
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    });
    return Promise.reject(error);
  }
);

//请求工具封装
export const request = (url, method, params, headers = {}, postQuery) => {
  let path = url in apiConfig ? apiConfig[url] : url;
  if (method === 'get') { //get请求
    let query = '', fullUrl = '';
    if (typeof params === 'object') {
      query = Object.keys(params).map(function (key) {
        return encodeURIComponent(key) + '=' + encodeURIComponent(params[key]);
      }).join('&');
      fullUrl = path + '?' + query;
    } else if (typeof params === 'string') {
      fullUrl = path + '/' + params;
    } else {
      fullUrl = path;
    }
    return fetch(fullUrl).then(res => {
      return Promise.resolve(res);
    }).catch(err => {
      return Promise.reject(err);
    })
  } else if (method === 'post') { //post请求
    params = params || {};
    if (headers['Content-Type'] == 'application/x-www-form-urlencoded') {
      params = qs.stringify(params);
    }
    path = postQuery ? path + postQuery : path;
    return fetch({
      url: path,
      method: 'post',
      headers: Object.assign({}, headers),
      data: params
    }).then(res => {
      return Promise.resolve(res);
    }).catch(err => {
      return Promise.reject(err);
    })
  } else if (method === 'upload') { //上传文件
    params = params || {};
    let data = new FormData();
    data.append(params.name, params.file)
    return fetch({
      url: path,
      method: 'post',
      headers: {
        'Content-Type': 'multipart/form-data'
      },
      data: data
    }).then(function (res) {
      return Promise.resolve(res)
    }).catch((err) => {
      return Promise.reject(err)
    })
  }
}
