import { request } from './request'

// 手机账号密码登录
export function phoneLogin(phone, password) {
  return request({
    url: '/login/cellphone',
    params: {
      phone,
      password
    }
  })
}
