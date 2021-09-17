import { ADD_COUNTER, ADD_TO_CAR } from './mutations-types'
export default {
  // 添加到购物车
  addCar(context, payload) {
    // 判断购物车是否有改商品
    let identical = context.state.carProduct.find(item => payload.id === item.id)
    // 一样在 mutations 中使数量加1
    if (identical) {
      context.commit(ADD_COUNTER, identical)
    }
    // 不一样 在 mutations 中是数量为1, 并添加到购物车列表中
    else {
      payload.count = 1
      context.commit(ADD_TO_CAR, payload)
    }
  }
}