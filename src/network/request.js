import axios from 'axios'

export function request(config) {
	// 创建 axios 实例
	const instance = axios.create({
		baseURL: 'http://123.207.32.32:8000',
		timeout: 5000
	})
	const instance2 = axios.create({
		baseURL: 'http://152.136.185.210:7878/api/m5'
	})
	// axios 请求拦截器
	axios.interceptors.request.use(config => {
		return config
	}, err => {
		return err
	})
	// 发送请求
	// 返回的为一个promise对象
	return [instance(config), instance2(config)]
}
