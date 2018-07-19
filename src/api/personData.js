import apiHttp from '../utils/apiUtils'

export default {
    /**
     * 个人信息
     * @param 请求参数 params
     */
    personInfo(){
        let that = this;
        return new Promise((resolve,reject)=>{
            apiHttp.post('PersonalCenter/Info',{}).then(res=>{
                resolve(res)
            },error=>{
                reject(error)
            })
        })
    },
    /**
     * 发送验证码
     * @param 请求参数 params
     */
    sendSmsAuthCode(params){
        let that = this;
        return new Promise((resolve,reject)=>{
            apiHttp.post('Sys/SendSmsAuthCode',params).then(res=>{
                resolve(res)
            },error=>{
                reject(error)
            })
        })
    },
    /**
     * 手机验证码登录
     * @param 请求参数 params
     */
    mobileLogin(params){
        let that = this;
        return new Promise((resolve,reject)=>{
            apiHttp.post('PersonalCenter/MobileLogin',params).then(res=>{
                resolve(res)
            },error=>{
                reject(error)
            })
        })
    },
    /**
     * 账号密码登录
     * @param 请求参数 params
     */
    userLogin(params){
        let that = this;
        return new Promise((resolve,reject)=>{
            apiHttp.post('PersonalCenter/UserLogin',params).then(res=>{
                resolve(res)
            },error=>{
                reject(error)
            })
        })
    },
    /**
     * 消费记录-章节订阅
     * @param 请求参数 params
     */
    subscriptionRecord(params){
        let that = this;
        return new Promise((resolve,reject)=>{
            apiHttp.post('OperationCenter/SubscriptionRecord',params).then(res=>{
                resolve(res)
            },error=>{
                reject(error)
            })
        })
    },
    /**
     * 消费记录-全本订阅
     * @param 请求参数 params
     */
    specialSubRecord(params){
        let that = this;
        return new Promise((resolve,reject)=>{
            apiHttp.post('OperationCenter/SpecialSubRecord',params).then(res=>{
                resolve(res)
            },error=>{
                reject(error)
            })
        })
    },
    /**
     * 充值记录
     * @param 请求参数 params
     */
    logPay(params){
        let that = this;
        return new Promise((resolve,reject)=>{
            apiHttp.post('Pay/LogPay',params).then(res=>{
                resolve(res)
            },error=>{
                reject(error)
            })
        })
    },
    /**
    * 阅读记录
    * @param 请求参数 params
    */
    bookInit(params){
        let that = this;
        return new Promise((resolve,reject)=>{
            apiHttp.post('BookCase/Init',params).then(res=>{
                resolve(res)
            },error=>{
                reject(error)
            })
        })
    },
    /**
    * 绑定手机号
    * @param 请求参数 params
    */
    boundMobile(params){
        let that = this;
        return new Promise((resolve,reject)=>{
            apiHttp.post('PersonalCenter/BindMobile',params).then(res=>{
                resolve(res)
            },error=>{
                reject(error)
            })
        })
    }
}