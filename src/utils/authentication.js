/**
 * 身份验证操作类
 * filename:authentication.js
 * created by charlesshang
 */
import storage from '@system.storage';
import prompt from '@system.prompt';
const WS_TOKEN = 'ws_token';
const WS_CURRENT_USERDATA = 'ws_current_userdata';
export default {
    /**
     * 获取登录状态
     */
    getLoginState() {
        let that = this;
        return new Promise(function(resolve,reject){
            that.getUid().then(res=>{
                resolve(res)
            })
        })
    },
    setUserData(userdata) {
        return new Promise(function(resolve,reject){
            storage.set({
                key: WS_CURRENT_USERDATA,
                value: userdata,
                success: function(){
                    resolve("成功")
                }
            })
        })
    },
    getToken() {
        return new Promise(function(resolve,reject){
            storage.get({
                key:WS_TOKEN,
                complete: function(data){
                    resolve(data)
                }
            })
        })
    },
    setToken(token){
        return new Promise(function(resolve,reject){
            storage.set({
                key: WS_TOKEN,
                value: token,
                success: function(){
                    resolve("成功")
                }
            })
        })
    },
    getUid() {
        return new Promise(function(resolve,reject){
            storage.get({
                key: WS_TOKEN,
                success: function(res){
                    resolve(res.split(',')[1])
                }
            })
        })
    },
    getUserData() {
        return new Promise(function(resolve,reject){
            storage.get({
                key:WS_CURRENT_USERDATA,
                complete: function(data){
                    resolve(data)
                }
            })
        })
    },
    goPay() {
        return new Promise((resolve)=>{
            let app_id = '35795';
            let payLocation = "http://client.h5sdk.yokong.com/pay/sdk/default_" + app_id + ".aspx";
            let userData = this.getUserData();
            payLocation += "?username=" + userData.nickName;
            payLocation += "&client_ver=IOS_1_0_2";
            payLocation += "&device_id=85bd4771ce1f67f8ec5ea433f87d39a6";
            payLocation += "&channel_id=35795";
            payLocation += "&pn_id=35795";
            payLocation += "&app_scheme=luochu";
            Promise.all([this.getUserData(),this.getToken()]).then(res=>{
                payLocation += "&uid=" + JSON.parse(res[0]).id;
                payLocation += "&token=" + res[1];
                resolve(payLocation);
            })
        })
    }
}