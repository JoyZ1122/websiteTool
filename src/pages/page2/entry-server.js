/**
 * 用于打包服务器直出部分的逻辑
 */
import { createApp } from './app'
import preview from './App.vue'
export default context => {
    return new Promise((resolve, reject) => {
        const { app, store } = createApp();
        preview.asyncData(store).then(() => {
            // const { app, store } = createApp();
            console.log('serve')
            // 调用store actions的方法
            context.state = store.state
            resolve(app);

        })

    })
}