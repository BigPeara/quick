/**
 * 阅读配置类
 * filename:readingConfig.js
 * created by charlesshang
 */
import storage from '@system.storage'
const WS_READINGCONFIG = "ws_readingconfig";
const WS_LINKLOGINHISTORY = "ws_linkloginhistory";
const MAX_FONTSIZE = 64;
const MINI_FONTSIZE = 25;

export default {
    get() {
        return new Promise(function (resolve, reject) {
            storage.get({
                key: WS_READINGCONFIG,
                success: function (data) {
                    resolve(data)
                }
            })
        })

    },
    set(val) {
        return new Promise((resolve) => {
            storage.set({
                key: WS_READINGCONFIG,
                value: val,
                success: function () {
                    resolve(val)
                }
            })
        })

    },
    setMode(mode) {
        return new Promise((resolve) => {
            this.get().then(res => {
                res.mode = mode;
                this.set(res).then(res => {
                    resolve(mode)
                })
            })
        })
    },
    changeFontSize(val) {
        return new Promise((resolve) => {
            this.get().then(res1 => {
                let data =  {};
                if(res1){
                    data = JSON.parse(res1);
                }else{
                    data = {
                        fontsize: 32
                    }
                }
                let fontsize = data.fontsize;
                if (fontsize + val < MINI_FONTSIZE) {
                    data.fontsize = MINI_FONTSIZE;
                } else if (fontsize + val > MAX_FONTSIZE) {
                    data.fontsize = MAX_FONTSIZE;
                } else {
                    data.fontsize += val;
                }
                this.set(data).then(res2 => {
                    resolve(res2.fontsize)
                })
            })
        })
    },
    //获取跳转登录前的页面路由
    getRoute() {
        let that = this
        return new Promise(function (resolve, reject) {
            storage.get({
                key: WS_LINKLOGINHISTORY,
                success: function (data) {
                    that.setRoute('').then(res=>{
                        resolve(data)
                    })
                }
            })
        })

    },
    //设置登录页面路由
    setRoute(val) {
        return new Promise((resolve) => {
            storage.set({
                key: WS_LINKLOGINHISTORY,
                value: val,
                success: function () {
                    resolve(val)
                }
            })
        })
    },
}