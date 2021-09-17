import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

//定义全局过滤器进行时间格式化
Vue.filter('dateFormat', function (time, pattern) {
  const dateStr = new Date(time * 1000)
  var y = dateStr.getFullYear();
  var m = (dateStr.getMonth() + 1).toString().padStart(2, '0')
  var d = dateStr.getDate().toString().padStart(2, '0');
  if (pattern.toLowerCase() === 'yyyy-mm-dd') {
    return `${y}-${m}-${d}`
  } else {
    var hh = dateStr.getHours().toString().padStart(2, '0');
    var mm = dateStr.getMinutes().toString().padStart(2, '0');
    var ss = dateStr.getSeconds().toString().padStart(2, '0');
    return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
