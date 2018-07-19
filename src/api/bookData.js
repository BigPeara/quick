import apiHttp from '../utils/apiUtils'
import prompt from '@system.prompt'

export default {
    /**
     * 图书列表
     * @param 请求参数 params
     */
    BookStorage(params){
        let that = this;
        return new Promise((resolve,reject)=>{
            apiHttp.post('BookStorage/Filter',params).then(res=>{
                resolve(res)
            },error=>{
                reject(error)
            })
        })
    },
    /**
     * 热销短篇
     * @param 请求参数 params
     */
    specialBook(params){
        let that = this;
        return new Promise((resolve,reject)=>{
            apiHttp.post('BookStorage/SpecialOfferBookList',params).then(res=>{
                resolve(res)
            },error=>{
                reject(error)
            })
        })
    },
    /**
     * 图书详情
     * @param 请求参数 params
     */
    bookInfo(params){
        let that = this;
        return new Promise((resolve,reject)=>{
            apiHttp.post('ReadingCenter/BookInfo',params).then(res=>{
                resolve(res)
            },error=>{
                reject(error)
            })
        })
    },
    /**
     * 图书评论
     * @param 请求参数 params
     */
    bookComments(params){
        let that = this;
        return new Promise((resolve,reject)=>{
            apiHttp.post('OperationCenter/GetComments',params).then(res=>{
                resolve(res)
            },error=>{
                reject(error)
            })
        })
    },
    /**
     * 阅读页
     * @param 请求参数 params
     */
    bookRead(params){
        let that = this;
        return new Promise((resolve,reject)=>{
            apiHttp.post('v2/ReadingCenter/ChapterContent',params).then(res=>{
                resolve(res)
            },error=>{
                reject(error)
            })
        })
    },
    /**
     * 目录页
     * @param 请求参数 params
     */
    bookChapter(params){
        let that = this;
        return new Promise((resolve,reject)=>{
            apiHttp.post('ReadingCenter/ChapterList',params).then(res=>{
                resolve(res)
            },error=>{
                reject(error)
            })
        })
    },
    /**
     * @param 增加阅读记录 params
     */
    addReadRecords(params){
        let that = this;
        return new Promise((resolve,reject)=>{
            apiHttp.post('BookCase/AddReadRecords',params).then(res=>{
                resolve(res)
            },error=>{
                reject(error)
            })
        })
    },
    /**
     * @param 添加书架 params
     */
    addBookCase(params){
        let that = this;
        return new Promise((resolve,reject)=>{
            apiHttp.post('BookCase/Add',params).then(res=>{
                resolve(res)
            },error=>{
                reject(error)
            })
        })
    },
    /**
     * @param 移出书架 params
     */
    deleteBookCase(params){
        let that = this;
        return new Promise((resolve,reject)=>{
            apiHttp.post('BookCase/Delete',params).then(res=>{
                resolve(res)
            },error=>{
                reject(error)
            })
        })
    },
    /**
     * @param 订阅章节 params
     */
    subscribeChapter(params){
        let that = this;
        return new Promise((resolve,reject)=>{
            apiHttp.post('OperationCenter/SubscribeChapter',params).then(res=>{
                resolve(res)
            },error=>{
                reject(error)
            })
        })
    },
    /**
     * @param 全本订阅 params
     */
    subscribeSpecial(params) {
        let that = this;
        return new Promise((resolve,reject)=>{
            apiHttp.post('OperationCenter/BuySpecialOfferBook',params).then(res=>{
                resolve(res)
            },error=>{
                prompt.showDialog({
                    message: error
                })
                reject(error)
            })
        })
    },
    /**
      * 书城轮播
      * @param 请求参数 params
      */ 
     bookIndex(params){
         let that = this;
         return new Promise((resolve,reject)=>{
             apiHttp.post('BookStorage/Index',params).then(res=>{
                 resolve(res)
             },error=>{
                 reject(error)
             })
         })
     },
     /**
      * 书城分类接口
      * @param 请求参数 params
      */ 
     BookClassInit(params){
         let that = this;
         return new Promise((resolve,reject)=>{
             apiHttp.post('v2/BookStorage/BookClassInit',params).then(res=>{
                 resolve(res)
             },error=>{
                 reject(error)
             })
         })
     },
     /**
      * 书城分类搜索接口
      * @param 请求参数 params
      */
     bookFilter(params){
         let that = this;
         return new Promise((resolve,reject)=>{
             apiHttp.post('BookStorage/Filter',params).then(res=>{
                 resolve(res)
                 // debugger
             },error=>{
                 reject(error)
             })
         })
     },
     /**
     * 搜索热搜
     * @param 请求参数 params
     */
    searchHot(params){
        let that = this;
        return new Promise((resolve,reject)=>{
            apiHttp.post('BookStorage/SearchHot',params).then(res=>{
                resolve(res)
            },error=>{
                reject(error)
            })
        })
    },
    // BookStorage/Search
    search(params){
        let that = this;
        return new Promise((resolve,reject)=>{
            apiHttp.post('BookStorage/Search',params).then(res=>{
                resolve(res)
            },error=>{
                reject(error)
            })
        })
    }
}