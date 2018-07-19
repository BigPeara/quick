/**
 * 书架业务操作类
 * filename:bookcaseService.js
 * created by charlesshang
 */

import storage from '@system.storage'
import prompt from '@system.prompt';
import apiHttp from '../utils/apiUtils'
// 阅读章节
const WS_LOCAL_SIMPLE_BOOKPAGE = 'ws_local_simple_bookpage';
const WS_LOCAL_SIMPLE_BOOKCASE = 'ws_local_simple_bookcase';
const WS_LOCAL_SIMPLE_READINGRECORDS = 'ws_local_simple_readingRecords';

export default {
    /**
     * 书架初始化
     * @param {视图模型}  
     * @param {书籍Id} bids 
     */
    init($vm) {
        var $self = this;
        return new Promise(function (resolve, reject) {
            if ($vm.pager.loadFinished || $vm.pager.isloading)
                return;
            $vm.pager.isloading = true;
            apiHttp.requestPager('api/BookCase/Init', {
                pageSize: $vm.pager.pageSize,
                pageIndex: $vm.pager.pageIndex
            }).then(
                response => {
                    $vm.pager.isloading = false;
                    $vm.pager.records += response.data.items.length;
                    $vm.pager.pageIndex++;
                    if ($vm.pager.records >= response.Total)
                        $vm.pager.loadFinished = true;
                    resolve(response.data);
                    $self.addLocalBookCase(response.data.items);
                });
        });

    },
    /**
     * 加入书架
     * @param {视图模型}  
     * @param {*书籍Id} bid 
     * @param {*章节Id} cid 
     */
    add($vm, bid, cid) {
        var $self = this;
        return new Promise(function (resolve, reject) {
            apiHttp.request('api/BookCase/Add', {
                bid: bid,
                cid: cid
            }).then(
                response => {
                    resolve(response.data);
                    $self.addLocalBookCase([{ id: bid, cid: cid }]);
                    prompt.showToast({
                        message: "收藏成功！"
                    });
                });
        });
    },
    /**
     * 移除书架
     * @param {视图模型}  
     * @param {*书籍Id} bid 
     */
    delete($vm, bids) {
        var $self = this;
        return new Promise(function (resolve, reject) {
            apiHttp.request('api/BookCase/Delete', {
                bids: bids
            }).then(
                response => {
                    resolve(response.data);
                    prompt.showToast({
                        message: "移除成功！"
                    });
                    $self.removeLocalBookCase(bids);
                });
        });
    },
    /**
     * 发送给后台阅读记录，并缓存到本地
     * @param {视图模型}  
     */
    addReadRecords(bid, cid) {
        var $self = this;
        return new Promise(function (resolve, reject) {
            apiHttp.post('BookCase/AddReadRecords', { bid: bid, cid: cid }).then(
                response => {
                    // $self.addLocalReadRecords([{ id: bid, cid: cid }]);
                    resolve(response.data);
                });
        });
    },
    /**
    * 添加到本地 阅读状态
    * @param {视图模型}  
    */
    addLocalBookCase(item) {
        return new Promise((resolve, reject) => {
            this.getLocalBookCase().then(res => {
                for (let i in res) {
                    if (res[i].bid == item.bid) {
                        res.splice(i, 1)
                    }
                }
                res.push(item);
                storage.set({
                    key: WS_LOCAL_SIMPLE_READINGRECORDS,
                    value: res,
                    success: function (data) {
                        resolve(data)
                    }
                })
            })
        })
    },
    /**
     * 获取缓存的阅读记录
     * @param {视图模型}  
     */
    getLocalBookCase() {
        return new Promise((resolve, reject) => {
            storage.get({
                key: WS_LOCAL_SIMPLE_READINGRECORDS,
                complete: function (data) {
                    if (data == '' || data == undefined) {
                        resolve([]);
                        return
                    }
                    resolve(JSON.parse(data))
                }
            })
        })
    },
    /**
     * 获取缓存的书籍是否在书架中
     * @param {视图模型}  
     */
    isExistInBookCase(bid) {
        return new Promise((resolve) => {
            this.getLocalBookCase().then(res => {
                for (let i in res) {
                    if (res[i].bid == bid) {
                        resolve(true);
                        return;
                    }
                }
                resolve(false);
            })
        })
    },
    /**
    * 删除书架缓存
    * @param {视图模型}  
    */
    removeLocalBookCase(bid) {
        return new Promise((resolve)=>{
            this.getLocalBookCase().then(res=>{
                for(let i in res){
                    if(res[i].bid == bid){
                        res.splice(i,1)
                    }
                }
                
                storage.set({
                    key: WS_LOCAL_SIMPLE_READINGRECORDS,
                    value: res,
                    success: function (data) {
                        resolve(data)
                    }
                })
            })
        })
    },
    /**
     * 初始化缓存
     * @param {视图模型}  
     */
    initBookCase(arr) {
        return new Promise((resolve) => {
            storage.set({
                key: WS_LOCAL_SIMPLE_READINGRECORDS,
                value: arr,
                success: function (data) {
                    resolve(data)
                }
            })
        })
    },
    clearLocalRecords() {
        var records = this.getLocalReadRecords();
        records = {};
        VueCookie.set(WS_LOCAL_SIMPLE_READINGRECORDS, JSON.stringify(records));
    },
    clear() {
        var localBookcase = this.getLocalBookCase();
        localBookcase = {};
        VueCookie.set(WS_LOCAL_SIMPLE_BOOKCASE, JSON.stringify(localBookcase));
    },
    reloadBookCase() {
        this.clear();
        this.init({
            pager: {
                pageSize: 100,
                pageIndex: 1,
                records: 1
            }
        });
    },
    /**
    * 添加到本地 阅读章节
    * @param {视图模型}  
    */
    addLocalBookpage(item) {
        return new Promise((resolve, reject) => {
            this.getLocalBookpage().then(res => {
                for (let i in res) {
                    if (res[i].bid == item.bid) {
                        res.splice(i, 1)
                    }
                }
                res.push(item);
                storage.set({
                    key: WS_LOCAL_SIMPLE_BOOKPAGE,
                    value: res,
                    success: function (data) {
                        resolve(data)
                    }
                })
            })
        })
    },
    /**
     * 获取缓存的阅读章节
     * @param {视图模型}  
     */
    getLocalBookpage() {
        return new Promise((resolve, reject) => {
            storage.get({
                key: WS_LOCAL_SIMPLE_BOOKPAGE,
                complete: function (data) {
                    if (data == '' || data == undefined) {
                        resolve([]);
                        return
                    }
                    resolve(JSON.parse(data))
                }
            })
        })
    },
}