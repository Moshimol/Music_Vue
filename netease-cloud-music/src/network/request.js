import axios from 'axios'

export function request(config) {
  const instance = axios.create({
    // 根路径
    baseURL: 'http://localhost:3000',
    // 请求时间
    timeout: 5000,
  });
  return instance;
}