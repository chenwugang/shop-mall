import { request } from './request.js'


// 请求首页顶部数据
export function getHomeMultiData() {
	return request({
		url: '/home/multidata'
	})
}
// 请求首页商品列表数据
export function getHomeGoodList(type, page) {
	return request({
		url: '/home/data',
		params: {
			type,
			page
		}
	})
}