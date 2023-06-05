
import fetch from 'dva/fetch';
import qs from 'qs';
import {message} from 'antd'

function parseJSON(response) {
  return response.json();
}

function checkStatus(response) {
  // console.log(response)
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  if (response.status === 401) {
      // router.push("/login");
    console.error("用户权限不足")
  }
  if (response.status === 400) {
    message.error("填写数据格式不正确")
  }
  if (response.status === 500) {
    console.error("服务器异常")
    return response;
  }
  if (response.status === 504) {
    console.error("网络超时")
  }
  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

let token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ7XCJhY2NvdW50Tm9uRXhwaXJlZFwiOnRydWUsXCJhY2NvdW50Tm9uTG9ja2VkXCI6dHJ1ZSxcImF1dGhvcml0aWVzXCI6W10sXCJjcmVkZW50aWFsc05vbkV4cGlyZWRcIjp0cnVlLFwiZG5cIjpcInVpZD1hZG1pbixvdT1QZW9wbGUsZGM9bXlsaXRib3ksZGM9Y29tXCIsXCJlbmFibGVkXCI6dHJ1ZSxcImdyYWNlTG9naW5zUmVtYWluaW5nXCI6MjE0NzQ4MzY0NyxcInRpbWVCZWZvcmVFeHBpcmF0aW9uXCI6MjE0NzQ4MzY0NyxcInVzZXJuYW1lXCI6XCJhZG1pblwifSIsImV4cCI6MTYwOTM0MTc4MiwiaWF0IjoxNTc3ODA1NzgyLCJhdXRob3JpdGllcyI6W119.0hW52HNCaJVou49aw9y-tC1jP5YzktbR1TGl8WOt29U"
//"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ7XCJhY2NvdW50Tm9uRXhwaXJlZFwiOnRydWUsXCJhY2NvdW50Tm9uTG9ja2VkXCI6dHJ1ZSxcImF1dGhvcml0aWVzXCI6W10sXCJjcmVkZW50aWFsc05vbkV4cGlyZWRcIjp0cnVlLFwiZG5cIjpcInVpZD1hZG1pbixvdT1QZW9wbGUsZGM9bXlsaXRib3ksZGM9Y29tXCIsXCJlbmFibGVkXCI6dHJ1ZSxcImdyYWNlTG9naW5zUmVtYWluaW5nXCI6MjE0NzQ4MzY0NyxcInRpbWVCZWZvcmVFeHBpcmF0aW9uXCI6MjE0NzQ4MzY0NyxcInVzZXJuYW1lXCI6XCJhZG1pblwifSIsImV4cCI6MTU3ODM1ODI3OSwiaWF0IjoxNTc3NzUzNDc5LCJhdXRob3JpdGllcyI6W119.RAr84eEGEi2XDABaiQ5mjQ5fjEnXoTB0aQfq5nO5rjY"



/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export function request(url, options) {
    // token=sessionStorage.getItem("userToken");
  return fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      'Authorization': "Bearer " + token,
    },
    body: options
  })
    .then(checkStatus)
    .then(parseJSON)
    .then(data => ({ data }))
    .catch(err => ({ err }));
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export function post(url, options) {
  // token=sessionStorage.getItem("userToken");
  return fetch(url, {
    method: 'POST',
    // mode: 'cors',
    // credentials: 'include',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      'Authorization': "Bearer " + token,
    },
    body: options
  })
    .then(checkStatus)
    .then(parseJSON)
    .then(data => ({ data }))
    .catch(err => ({ err }));
}

/**
 * 公共方法.
 *
 * @param  {string} path       The path we want to request,接口地址位于配置文件../.umirc.js 中  proxy:{}
 * @param  {object} [payload] The payload we want to pass to "fetch"
 * @param  {object} method    The method of query,an object containing either "post" 、 "get" or null
 * @return {object}           An object containing either "data" or "err"
 */

export async function execute(payload,path,method) {
  if(method=="post"){
    // return post(`/api${path}`,JSON.stringify(payload));
    return post(`http://www.zzhixin.xyz:10106${path}`,JSON.stringify(payload));
  }else{
    // return request(`/api${path}?${qs.stringify(payload)}`);
    return request(`http://www.zzhixin.xyz:10106${path}?${qs.stringify(payload)}`);
  }
}
