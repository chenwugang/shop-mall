import { request } from './request.js'
// 请求商品基本信息数据
export function getDetailData(iid) {
  return request({
    url: '/detail',
    params: {
      iid
    }
  })
}
// 请求商品推荐相关的数据
export function getRecommendData() {
  return request({
    url: '/recommend'
  })
}
// 封装商品基本信息数据
export class Goods {
  constructor(itemInfo, columns, services) {
    this.title = itemInfo.title
    this.oldPrice = itemInfo.oldPrice
    this.price = itemInfo.price
    this.lowNowPrice = itemInfo.lowNowPrice
    this.discountDesc = itemInfo.discountDesc
    this.discountBgColor = itemInfo.discountBgColor
    this.desc = itemInfo.desc
    this.columns = columns
    this.services = services
  }
}
// 封装商家的基本信息
export class ShopInfo {
  constructor(shopInfo) {
    this.logo = shopInfo.shopLogo
    this.name = shopInfo.name
    this.fans = shopInfo.cFans
    this.sells = ((shopInfo.cSells) / 10000).toFixed(2) + '万'
    this.score = shopInfo.score
    this.goodCount = shopInfo.cGoods
  }
}
// 封装参数相关信息
export class Goodparams {
  constructor(itemParams) {
    this.tables = itemParams.rule.tables[0]
    this.infoSet = itemParams.info.set
  }
}
// 封装评论相关的数据
export class CommentInfo {
  constructor(rote) {
    this.img = rote.list[0].user.avatar
    this.name = rote.list[0].user.uname
    this.content = rote.list[0].content
    this.time = rote.list[0].created
    this.style = rote.list[0].style
    this.images = rote.list[0].images
    this.cRate = rote.cRate
  }
}