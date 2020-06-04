/**
 * 用于打包服务器直出部分的逻辑
 */
import { createApp } from './app'


export default context => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {              //模拟拉取接口获取数据
            const { app } = createApp();
            // router.push(context.url);
            resolve(app);

        }, 100);
        //reject({code: 500});  //对应server.js的baseRender方法
    })
}
