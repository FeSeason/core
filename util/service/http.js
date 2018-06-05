/**
 * Created by Season on 17/12/7.
 * QQ: 741876294
 */
import axios from 'axios'
import {Notification} from 'element-ui'

// axios.defaults.baseURL = 'http://192.168.1.12:8899'
axios.defaults.withCredentials = true

axios.interceptors.request.use(config => {
  return config
}, error => {
  return Promise.reject(error)
})

function checkCode (response = {}) {
  if (response.code === 200) {
    return response
  } else {
    if (response.message) {
      Notification.warning({message: response.message, duration: 2000})
    }
    return {}
  }
}

export default {
  post (url, data) {
    return axios({
      method: 'post',
      url,
      data: data
    }).then(
      (response) => {
        return checkCode(response.data)
      }
    )
  },
  get (url, params) {
    return axios({
      method: 'get',
      url,
      params // get 请求时带的参数
    }).then(
      (response) => {
        return checkCode(response.data)
      }
    )
  }
}
