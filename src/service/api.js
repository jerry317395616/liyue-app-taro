// src/service/api.js
import Taro from '@tarojs/taro'

const BASE_URL = process.env.TARO_APP_BASE_URL // 替换为你的 API 基础 URL

const request = (url, method = 'GET', data = {}) => {
  return Taro.request({
    url: `${BASE_URL}${url}`,
    method,
    data,
    header: {
      'Content-Type': 'application/json',
      // 可以添加其他请求头，如 Authorization
      'Authorization': 'token 7f6546a02c53292:8e189362e983528'
    }
  }).then(response => {
    // 处理响应
    const { data, statusCode } = response
    if (statusCode === 200) {
      return data
    } else {
      // 可以根据需要处理不同的状态码
      throw new Error(`请求错误，状态码：${statusCode}`)
    }
  }).catch(error => {
    // 处理请求错误
    console.error('请求错误：', error)
    throw error
  })
}

export default request
