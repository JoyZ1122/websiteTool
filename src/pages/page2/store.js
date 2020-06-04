
// store.js
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
export function createStore() {
    return new Vuex.Store({
        state: {
            list: null
        },
        actions: {
            // updateList(state, list) {
            //     state.list = list
            // } 
            fetchItem(context, list) {
                // `store.dispatch()` 会返回 Promise，
                // 以便我们能够知道数据在何时更新
                context.commit('setItem', list)
            }
        },
        mutations: {
            setItem(state, a) {
                state.list=a;
            }
        }
    })
}