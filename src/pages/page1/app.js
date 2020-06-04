import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Components from '@/components'
import ElementUI from 'element-ui'
import { createStore } from '../page2/store';



const eventBus = {
    install(Vue) {
        Vue.prototype.$bus = new Vue()
    }
}


const routes = [
    {
        path: "/preview",
        name: "preview",
        component: () => import(`@/views/preview`),
    },
    {
        path: "/editor",
        name: "editor",
        component: () => import(`@/views/editor`),
    },

];

const createRouter = function () {
    return new VueRouter({
        mode: "history",
        base: process.env.BASE_URL,
        routes,
    })
};
Vue.use(eventBus)
Vue.use(VueRouter);
Vue.use(ElementUI, {
    size: 'small'
})
Vue.use(Components)

export function createApp(data) {
    const router = new createRouter();
    const store = createStore();

    const app = new Vue({
        components: { App },                      //演示如何从初始化地方传递数据给子组件。这个页面不使用vuex，展示简单粗暴的方式，配合global event bus即可https://vuejs.org/v2/guide/components.html#Non-Parent-Child-Communication
        render: h => h(App),
        router,
        store,
        mounted: function () {
            console.log('mounted')
        }
    });
    return { app, store };
}