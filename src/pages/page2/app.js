import Vue from 'vue'
import App from './App.vue'
import Components from '@/components'
import { createStore } from './store';
Vue.use(Components)

export function createApp() {
    const store = createStore();
    const app = new Vue({
        // 根实例简单的渲染应用程序组件。
        store,
        components: { App },                      //演示如何从初始化地方传递数据给子组件。这个页面不使用vuex，展示简单粗暴的方式，配合global event bus即可https://vuejs.org/v2/guide/components.html#Non-Parent-Child-Communication
        render: h => h(App)
    });
    return { app, store}
}