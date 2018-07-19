import fetch from '@system.fetch';
import prompt from '@system.prompt';
import Md5 from '../utils/md5';
import Authentication from '../utils/authentication'
const baseUrl = 'http://client.h5sdk.yokong.com/api/';;

export default{
    /**
     * 生成签名
     * @param {*待提交的数据} postdata 
     */
    makeSign(postdata) {
        //属性排序
        let properties = [];
        for (var p in postdata) {
            properties.push(p);
        }
        var sortProArr = properties.sort((a, b) => a.toLocaleLowerCase() < b.toLocaleLowerCase() ? -1 : 1);
        //拼接
        let str = '';
        for (var i = 0, len = sortProArr.length; i < len; i++) {
            str = str + (sortProArr[i].toLocaleLowerCase() + '=' + postdata[sortProArr[i]]) + (i < len - 1 ? '&' : '');
        }
        console.log(str);
        str += '&key=PKwUJyO1GGraH7mDhClqWHExSPgGgcq';
        var signStr = Md5.md5(Md5.md5(str));
        return signStr;
    },   
    /**
     * post提交数据
     * @param {*请求地址} url 
     * @param {*请求数据} postdata  
     */
    post(url, postdata) {
        var $self = this;
        return new Promise(function(resolve, reject) {
            Promise.all([Authentication.getUserData(),Authentication.getToken()]).then(res=>{
                if(res[0]==''){
                    postdata['uid'] = 0
                }else{
                    postdata['uid'] = JSON.parse(res[0]).id
                }
                postdata['token'] = res[1] || '';
                postdata['channel_id'] = 35795;
                postdata['pkgname'] = 'com.youkongt.reader';
                postdata['device_id'] = 35795;
                postdata['sign'] = $self.makeSign(postdata);
                fetch.fetch({
                    url: baseUrl + url,
                    method: 'POST',
                    data: postdata,
                    success: (res=>{
                        let result = JSON.parse(res.data)
                        if(result.Success){
                            resolve(result)
                        }else{
                            prompt.showToast({
                                message: result.Message
                            });
                            reject(result.Message)
                        }
                    }),
                    fail: (res=>{
                        reject(res);
                    })
                })
            })
            
        });
    },
}