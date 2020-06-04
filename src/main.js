import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'

import 'normalize.css/normalize.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import 'font-awesome/css/font-awesome.min.css'
import Components from './components'
Vue.use(VueRouter);

Vue.use(ElementUI, {
  size: 'small'
})

const eventBus = {
  install(Vue) {
    Vue.prototype.$bus = new Vue()
  }
}
Vue.use(eventBus)
Vue.use(Components)


const routes = [
  {
    path: "/preview",
    name: "preview",
    component: () => import(`./views/preview`),
  },
  {
    path: "/editor",
    name: "editor",
    component: () => import(`./views/editor`),
  },

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

