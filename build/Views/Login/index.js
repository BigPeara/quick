(function(){
      
  var createPageHandler = function() {
    return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(13)
	var $app_template$ = __webpack_require__(83)
	var $app_style$ = __webpack_require__(84)
	var $app_script$ = __webpack_require__(105)
	
	$app_define$('@app-component/index', [], function($app_require$, $app_exports$, $app_module$){
	     $app_script$($app_module$, $app_exports$, $app_require$)
	     if ($app_exports$.__esModule && $app_exports$.default) {
	            $app_module$.exports = $app_exports$.default
	        }
	     $app_module$.exports.template = $app_template$
	     $app_module$.exports.style = $app_style$
	})
	
	$app_bootstrap$('@app-component/index',{ packagerVersion: '0.0.5'})


/***/ }),

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _apiUtils = __webpack_require__(9);
	
	var _apiUtils2 = _interopRequireDefault(_apiUtils);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    /**
	     * 个人信息
	     * @param 请求参数 params
	     */
	    personInfo: function personInfo() {
	        var that = this;
	        return new Promise(function (resolve, reject) {
	            _apiUtils2.default.post('PersonalCenter/Info', {}).then(function (res) {
	                resolve(res);
	            }, function (error) {
	                reject(error);
	            });
	        });
	    },
	
	    /**
	     * 发送验证码
	     * @param 请求参数 params
	     */
	    sendSmsAuthCode: function sendSmsAuthCode(params) {
	        var that = this;
	        return new Promise(function (resolve, reject) {
	            _apiUtils2.default.post('Sys/SendSmsAuthCode', params).then(function (res) {
	                resolve(res);
	            }, function (error) {
	                reject(error);
	            });
	        });
	    },
	
	    /**
	     * 手机验证码登录
	     * @param 请求参数 params
	     */
	    mobileLogin: function mobileLogin(params) {
	        var that = this;
	        return new Promise(function (resolve, reject) {
	            _apiUtils2.default.post('PersonalCenter/MobileLogin', params).then(function (res) {
	                resolve(res);
	            }, function (error) {
	                reject(error);
	            });
	        });
	    },
	
	    /**
	     * 账号密码登录
	     * @param 请求参数 params
	     */
	    userLogin: function userLogin(params) {
	        var that = this;
	        return new Promise(function (resolve, reject) {
	            _apiUtils2.default.post('PersonalCenter/UserLogin', params).then(function (res) {
	                resolve(res);
	            }, function (error) {
	                reject(error);
	            });
	        });
	    },
	
	    /**
	     * 消费记录-章节订阅
	     * @param 请求参数 params
	     */
	    subscriptionRecord: function subscriptionRecord(params) {
	        var that = this;
	        return new Promise(function (resolve, reject) {
	            _apiUtils2.default.post('OperationCenter/SubscriptionRecord', params).then(function (res) {
	                resolve(res);
	            }, function (error) {
	                reject(error);
	            });
	        });
	    },
	
	    /**
	     * 消费记录-全本订阅
	     * @param 请求参数 params
	     */
	    specialSubRecord: function specialSubRecord(params) {
	        var that = this;
	        return new Promise(function (resolve, reject) {
	            _apiUtils2.default.post('OperationCenter/SpecialSubRecord', params).then(function (res) {
	                resolve(res);
	            }, function (error) {
	                reject(error);
	            });
	        });
	    },
	
	    /**
	     * 充值记录
	     * @param 请求参数 params
	     */
	    logPay: function logPay(params) {
	        var that = this;
	        return new Promise(function (resolve, reject) {
	            _apiUtils2.default.post('Pay/LogPay', params).then(function (res) {
	                resolve(res);
	            }, function (error) {
	                reject(error);
	            });
	        });
	    },
	
	    /**
	    * 阅读记录
	    * @param 请求参数 params
	    */
	    bookInit: function bookInit(params) {
	        var that = this;
	        return new Promise(function (resolve, reject) {
	            _apiUtils2.default.post('BookCase/Init', params).then(function (res) {
	                resolve(res);
	            }, function (error) {
	                reject(error);
	            });
	        });
	    },
	
	    /**
	    * 绑定手机号
	    * @param 请求参数 params
	    */
	    boundMobile: function boundMobile(params) {
	        var that = this;
	        return new Promise(function (resolve, reject) {
	            _apiUtils2.default.post('PersonalCenter/BindMobile', params).then(function (res) {
	                resolve(res);
	            }, function (error) {
	                reject(error);
	            });
	        });
	    }
	};

/***/ }),

/***/ 9:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _system = $app_require$('@app-module/system.fetch');
	
	var _system2 = _interopRequireDefault(_system);
	
	var _system3 = $app_require$('@app-module/system.prompt');
	
	var _system4 = _interopRequireDefault(_system3);
	
	var _md = __webpack_require__(10);
	
	var _md2 = _interopRequireDefault(_md);
	
	var _authentication = __webpack_require__(11);
	
	var _authentication2 = _interopRequireDefault(_authentication);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var baseUrl = 'http://client.h5sdk.yokong.com/api/';;
	
	exports.default = {
	    /**
	     * 生成签名
	     * @param {*待提交的数据} postdata 
	     */
	    makeSign: function makeSign(postdata) {
	        //属性排序
	        var properties = [];
	        for (var p in postdata) {
	            properties.push(p);
	        }
	        var sortProArr = properties.sort(function (a, b) {
	            return a.toLocaleLowerCase() < b.toLocaleLowerCase() ? -1 : 1;
	        });
	        //拼接
	        var str = '';
	        for (var i = 0, len = sortProArr.length; i < len; i++) {
	            str = str + (sortProArr[i].toLocaleLowerCase() + '=' + postdata[sortProArr[i]]) + (i < len - 1 ? '&' : '');
	        }
	        console.log(str);
	        str += '&key=PKwUJyO1GGraH7mDhClqWHExSPgGgcq';
	        var signStr = _md2.default.md5(_md2.default.md5(str));
	        return signStr;
	    },
	
	    /**
	     * post提交数据
	     * @param {*请求地址} url 
	     * @param {*请求数据} postdata  
	     */
	    post: function post(url, postdata) {
	        var $self = this;
	        return new Promise(function (resolve, reject) {
	            Promise.all([_authentication2.default.getUserData(), _authentication2.default.getToken()]).then(function (res) {
	                if (res[0] == '') {
	                    postdata['uid'] = 0;
	                } else {
	                    postdata['uid'] = JSON.parse(res[0]).id;
	                }
	                postdata['token'] = res[1] || '';
	                postdata['channel_id'] = 35795;
	                postdata['pkgname'] = 'com.youkongt.reader';
	                postdata['device_id'] = 35795;
	                postdata['sign'] = $self.makeSign(postdata);
	                _system2.default.fetch({
	                    url: baseUrl + url,
	                    method: 'POST',
	                    data: postdata,
	                    success: function success(res) {
	                        var result = JSON.parse(res.data);
	                        if (result.Success) {
	                            resolve(result);
	                        } else {
	                            _system4.default.showToast({
	                                message: result.Message
	                            });
	                            reject(result.Message);
	                        }
	                    },
	                    fail: function fail(res) {
	                        reject(res);
	                    }
	                });
	            });
	        });
	    }
	};

/***/ }),

/***/ 10:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _safeAdd$bitRotateLef;
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	/**
	 * md5加密操作类
	 * filename:md5.js
	 * created by charlesshang
	 */
	exports.default = (_safeAdd$bitRotateLef = {
	    safeAdd: function safeAdd(x, y) {
	        var lsw = (x & 0xffff) + (y & 0xffff);
	        var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
	        return msw << 16 | lsw & 0xffff;
	    },
	    bitRotateLeft: function bitRotateLeft(num, cnt) {
	        return num << cnt | num >>> 32 - cnt;
	    },
	    md5cmn: function md5cmn(q, a, b, x, s, t) {
	        return this.safeAdd(this.bitRotateLeft(this.safeAdd(this.safeAdd(a, q), this.safeAdd(x, t)), s), b);
	    },
	    md5ff: function md5ff(a, b, c, d, x, s, t) {
	        return this.md5cmn(b & c | ~b & d, a, b, x, s, t);
	    },
	    md5gg: function md5gg(a, b, c, d, x, s, t) {
	        return this.md5cmn(b & d | c & ~d, a, b, x, s, t);
	    },
	    md5hh: function md5hh(a, b, c, d, x, s, t) {
	        return this.md5cmn(b ^ c ^ d, a, b, x, s, t);
	    },
	    md5ii: function md5ii(a, b, c, d, x, s, t) {
	        return this.md5cmn(c ^ (b | ~d), a, b, x, s, t);
	    },
	    binlMD5: function binlMD5(x, len) {
	        /* append padding */
	        x[len >> 5] |= 0x80 << len % 32;
	        x[(len + 64 >>> 9 << 4) + 14] = len;
	
	        var i;
	        var olda;
	        var oldb;
	        var oldc;
	        var oldd;
	        var a = 1732584193;
	        var b = -271733879;
	        var c = -1732584194;
	        var d = 271733878;
	
	        for (i = 0; i < x.length; i += 16) {
	            olda = a;
	            oldb = b;
	            oldc = c;
	            oldd = d;
	
	            a = this.md5ff(a, b, c, d, x[i], 7, -680876936);
	            d = this.md5ff(d, a, b, c, x[i + 1], 12, -389564586);
	            c = this.md5ff(c, d, a, b, x[i + 2], 17, 606105819);
	            b = this.md5ff(b, c, d, a, x[i + 3], 22, -1044525330);
	            a = this.md5ff(a, b, c, d, x[i + 4], 7, -176418897);
	            d = this.md5ff(d, a, b, c, x[i + 5], 12, 1200080426);
	            c = this.md5ff(c, d, a, b, x[i + 6], 17, -1473231341);
	            b = this.md5ff(b, c, d, a, x[i + 7], 22, -45705983);
	            a = this.md5ff(a, b, c, d, x[i + 8], 7, 1770035416);
	            d = this.md5ff(d, a, b, c, x[i + 9], 12, -1958414417);
	            c = this.md5ff(c, d, a, b, x[i + 10], 17, -42063);
	            b = this.md5ff(b, c, d, a, x[i + 11], 22, -1990404162);
	            a = this.md5ff(a, b, c, d, x[i + 12], 7, 1804603682);
	            d = this.md5ff(d, a, b, c, x[i + 13], 12, -40341101);
	            c = this.md5ff(c, d, a, b, x[i + 14], 17, -1502002290);
	            b = this.md5ff(b, c, d, a, x[i + 15], 22, 1236535329);
	
	            a = this.md5gg(a, b, c, d, x[i + 1], 5, -165796510);
	            d = this.md5gg(d, a, b, c, x[i + 6], 9, -1069501632);
	            c = this.md5gg(c, d, a, b, x[i + 11], 14, 643717713);
	            b = this.md5gg(b, c, d, a, x[i], 20, -373897302);
	            a = this.md5gg(a, b, c, d, x[i + 5], 5, -701558691);
	            d = this.md5gg(d, a, b, c, x[i + 10], 9, 38016083);
	            c = this.md5gg(c, d, a, b, x[i + 15], 14, -660478335);
	            b = this.md5gg(b, c, d, a, x[i + 4], 20, -405537848);
	            a = this.md5gg(a, b, c, d, x[i + 9], 5, 568446438);
	            d = this.md5gg(d, a, b, c, x[i + 14], 9, -1019803690);
	            c = this.md5gg(c, d, a, b, x[i + 3], 14, -187363961);
	            b = this.md5gg(b, c, d, a, x[i + 8], 20, 1163531501);
	            a = this.md5gg(a, b, c, d, x[i + 13], 5, -1444681467);
	            d = this.md5gg(d, a, b, c, x[i + 2], 9, -51403784);
	            c = this.md5gg(c, d, a, b, x[i + 7], 14, 1735328473);
	            b = this.md5gg(b, c, d, a, x[i + 12], 20, -1926607734);
	
	            a = this.md5hh(a, b, c, d, x[i + 5], 4, -378558);
	            d = this.md5hh(d, a, b, c, x[i + 8], 11, -2022574463);
	            c = this.md5hh(c, d, a, b, x[i + 11], 16, 1839030562);
	            b = this.md5hh(b, c, d, a, x[i + 14], 23, -35309556);
	            a = this.md5hh(a, b, c, d, x[i + 1], 4, -1530992060);
	            d = this.md5hh(d, a, b, c, x[i + 4], 11, 1272893353);
	            c = this.md5hh(c, d, a, b, x[i + 7], 16, -155497632);
	            b = this.md5hh(b, c, d, a, x[i + 10], 23, -1094730640);
	            a = this.md5hh(a, b, c, d, x[i + 13], 4, 681279174);
	            d = this.md5hh(d, a, b, c, x[i], 11, -358537222);
	            c = this.md5hh(c, d, a, b, x[i + 3], 16, -722521979);
	            b = this.md5hh(b, c, d, a, x[i + 6], 23, 76029189);
	            a = this.md5hh(a, b, c, d, x[i + 9], 4, -640364487);
	            d = this.md5hh(d, a, b, c, x[i + 12], 11, -421815835);
	            c = this.md5hh(c, d, a, b, x[i + 15], 16, 530742520);
	            b = this.md5hh(b, c, d, a, x[i + 2], 23, -995338651);
	
	            a = this.md5ii(a, b, c, d, x[i], 6, -198630844);
	            d = this.md5ii(d, a, b, c, x[i + 7], 10, 1126891415);
	            c = this.md5ii(c, d, a, b, x[i + 14], 15, -1416354905);
	            b = this.md5ii(b, c, d, a, x[i + 5], 21, -57434055);
	            a = this.md5ii(a, b, c, d, x[i + 12], 6, 1700485571);
	            d = this.md5ii(d, a, b, c, x[i + 3], 10, -1894986606);
	            c = this.md5ii(c, d, a, b, x[i + 10], 15, -1051523);
	            b = this.md5ii(b, c, d, a, x[i + 1], 21, -2054922799);
	            a = this.md5ii(a, b, c, d, x[i + 8], 6, 1873313359);
	            d = this.md5ii(d, a, b, c, x[i + 15], 10, -30611744);
	            c = this.md5ii(c, d, a, b, x[i + 6], 15, -1560198380);
	            b = this.md5ii(b, c, d, a, x[i + 13], 21, 1309151649);
	            a = this.md5ii(a, b, c, d, x[i + 4], 6, -145523070);
	            d = this.md5ii(d, a, b, c, x[i + 11], 10, -1120210379);
	            c = this.md5ii(c, d, a, b, x[i + 2], 15, 718787259);
	            b = this.md5ii(b, c, d, a, x[i + 9], 21, -343485551);
	
	            a = this.safeAdd(a, olda);
	            b = this.safeAdd(b, oldb);
	            c = this.safeAdd(c, oldc);
	            d = this.safeAdd(d, oldd);
	        }
	        return [a, b, c, d];
	    },
	    rstr2binl: function rstr2binl(input) {
	        var i;
	        var output = [];
	        output[(input.length >> 2) - 1] = undefined;
	        for (i = 0; i < output.length; i += 1) {
	            output[i] = 0;
	        }
	        var length8 = input.length * 8;
	        for (i = 0; i < length8; i += 8) {
	            output[i >> 5] |= (input.charCodeAt(i / 8) & 0xff) << i % 32;
	        }
	        return output;
	    },
	    binl2rstr: function binl2rstr(input) {
	        var i;
	        var output = '';
	        var length32 = input.length * 32;
	        for (i = 0; i < length32; i += 8) {
	            output += String.fromCharCode(input[i >> 5] >>> i % 32 & 0xff);
	        }
	        return output;
	    }
	}, _defineProperty(_safeAdd$bitRotateLef, 'rstr2binl', function rstr2binl(input) {
	    var i;
	    var output = [];
	    output[(input.length >> 2) - 1] = undefined;
	    for (i = 0; i < output.length; i += 1) {
	        output[i] = 0;
	    }
	    var length8 = input.length * 8;
	    for (i = 0; i < length8; i += 8) {
	        output[i >> 5] |= (input.charCodeAt(i / 8) & 0xff) << i % 32;
	    }
	    return output;
	}), _defineProperty(_safeAdd$bitRotateLef, 'rstrMD5', function rstrMD5(s) {
	    return this.binl2rstr(this.binlMD5(this.rstr2binl(s), s.length * 8));
	}), _defineProperty(_safeAdd$bitRotateLef, 'rstrHMACMD5', function rstrHMACMD5(key, data) {
	    var i;
	    var bkey = this.rstr2binl(key);
	    var ipad = [];
	    var opad = [];
	    var hash;
	    ipad[15] = opad[15] = undefined;
	    if (bkey.length > 16) {
	        bkey = this.binlMD5(bkey, key.length * 8);
	    }
	    for (i = 0; i < 16; i += 1) {
	        ipad[i] = bkey[i] ^ 0x36363636;
	        opad[i] = bkey[i] ^ 0x5c5c5c5c;
	    }
	    hash = this.binlMD5(ipad.concat(rstr2binl(data)), 512 + data.length * 8);
	    return this.binl2rstr(this.binlMD5(opad.concat(hash), 512 + 128));
	}), _defineProperty(_safeAdd$bitRotateLef, 'rstr2hex', function rstr2hex(input) {
	    var hexTab = '0123456789abcdef';
	    var output = '';
	    var x;
	    var i;
	    for (i = 0; i < input.length; i += 1) {
	        x = input.charCodeAt(i);
	        output += hexTab.charAt(x >>> 4 & 0x0f) + hexTab.charAt(x & 0x0f);
	    }
	    return output;
	}), _defineProperty(_safeAdd$bitRotateLef, 'str2rstrUTF8', function str2rstrUTF8(input) {
	    return unescape(encodeURIComponent(input));
	}), _defineProperty(_safeAdd$bitRotateLef, 'rawMD5', function rawMD5(s) {
	    return this.rstrMD5(this.str2rstrUTF8(s));
	}), _defineProperty(_safeAdd$bitRotateLef, 'hexMD5', function hexMD5(s) {
	    return this.rstr2hex(this.rawMD5(s));
	}), _defineProperty(_safeAdd$bitRotateLef, 'rawHMACMD5', function rawHMACMD5(k, d) {
	    return this.rstrHMACMD5(this.str2rstrUTF8(k), this.str2rstrUTF8(d));
	}), _defineProperty(_safeAdd$bitRotateLef, 'hexHMACMD5', function hexHMACMD5(k, d) {
	    return this.rstr2hex(this.rawHMACMD5(k, d));
	}), _defineProperty(_safeAdd$bitRotateLef, 'md5', function md5(string, key, raw) {
	    if (!key) {
	        if (!raw) {
	            return this.hexMD5(string);
	        }
	        return this.rawMD5(string);
	    }
	    if (!raw) {
	        return this.hexHMACMD5(key, string);
	    }
	    return this.rawHMACMD5(key, string);
	}), _safeAdd$bitRotateLef);

/***/ }),

/***/ 11:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _system = $app_require$('@app-module/system.storage');
	
	var _system2 = _interopRequireDefault(_system);
	
	var _system3 = $app_require$('@app-module/system.prompt');
	
	var _system4 = _interopRequireDefault(_system3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * 身份验证操作类
	 * filename:authentication.js
	 * created by charlesshang
	 */
	var WS_TOKEN = 'ws_token';
	var WS_CURRENT_USERDATA = 'ws_current_userdata';
	exports.default = {
	    /**
	     * 获取登录状态
	     */
	    getLoginState: function getLoginState() {
	        var that = this;
	        return new Promise(function (resolve, reject) {
	            that.getUid().then(function (res) {
	                resolve(res);
	            });
	        });
	    },
	    setUserData: function setUserData(userdata) {
	        return new Promise(function (resolve, reject) {
	            _system2.default.set({
	                key: WS_CURRENT_USERDATA,
	                value: userdata,
	                success: function success() {
	                    resolve("成功");
	                }
	            });
	        });
	    },
	    getToken: function getToken() {
	        return new Promise(function (resolve, reject) {
	            _system2.default.get({
	                key: WS_TOKEN,
	                complete: function complete(data) {
	                    resolve(data);
	                }
	            });
	        });
	    },
	    setToken: function setToken(token) {
	        return new Promise(function (resolve, reject) {
	            _system2.default.set({
	                key: WS_TOKEN,
	                value: token,
	                success: function success() {
	                    resolve("成功");
	                }
	            });
	        });
	    },
	    getUid: function getUid() {
	        return new Promise(function (resolve, reject) {
	            _system2.default.get({
	                key: WS_TOKEN,
	                success: function success(res) {
	                    resolve(res.split(',')[1]);
	                }
	            });
	        });
	    },
	    getUserData: function getUserData() {
	        return new Promise(function (resolve, reject) {
	            _system2.default.get({
	                key: WS_CURRENT_USERDATA,
	                complete: function complete(data) {
	                    resolve(data);
	                }
	            });
	        });
	    },
	    goPay: function goPay() {
	        var _this = this;
	
	        return new Promise(function (resolve) {
	            var app_id = '35795';
	            var payLocation = "http://client.h5sdk.yokong.com/pay/sdk/default_" + app_id + ".aspx";
	            var userData = _this.getUserData();
	            payLocation += "?username=" + userData.nickName;
	            payLocation += "&client_ver=IOS_1_0_2";
	            payLocation += "&device_id=85bd4771ce1f67f8ec5ea433f87d39a6";
	            payLocation += "&channel_id=35795";
	            payLocation += "&pn_id=35795";
	            payLocation += "&app_scheme=luochu";
	            Promise.all([_this.getUserData(), _this.getToken()]).then(function (res) {
	                payLocation += "&uid=" + JSON.parse(res[0]).id;
	                payLocation += "&token=" + res[1];
	                resolve(payLocation);
	            });
	        });
	    }
	};

/***/ }),

/***/ 12:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _system = $app_require$('@app-module/system.storage');
	
	var _system2 = _interopRequireDefault(_system);
	
	var _system3 = $app_require$('@app-module/system.prompt');
	
	var _system4 = _interopRequireDefault(_system3);
	
	var _apiUtils = __webpack_require__(9);
	
	var _apiUtils2 = _interopRequireDefault(_apiUtils);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// 阅读章节
	var WS_LOCAL_SIMPLE_BOOKPAGE = 'ws_local_simple_bookpage'; /**
	                                                            * 书架业务操作类
	                                                            * filename:bookcaseService.js
	                                                            * created by charlesshang
	                                                            */
	
	var WS_LOCAL_SIMPLE_BOOKCASE = 'ws_local_simple_bookcase';
	var WS_LOCAL_SIMPLE_READINGRECORDS = 'ws_local_simple_readingRecords';
	
	exports.default = {
	    /**
	     * 书架初始化
	     * @param {视图模型}  
	     * @param {书籍Id} bids 
	     */
	    init: function init($vm) {
	        var $self = this;
	        return new Promise(function (resolve, reject) {
	            if ($vm.pager.loadFinished || $vm.pager.isloading) return;
	            $vm.pager.isloading = true;
	            _apiUtils2.default.requestPager('api/BookCase/Init', {
	                pageSize: $vm.pager.pageSize,
	                pageIndex: $vm.pager.pageIndex
	            }).then(function (response) {
	                $vm.pager.isloading = false;
	                $vm.pager.records += response.data.items.length;
	                $vm.pager.pageIndex++;
	                if ($vm.pager.records >= response.Total) $vm.pager.loadFinished = true;
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
	    add: function add($vm, bid, cid) {
	        var $self = this;
	        return new Promise(function (resolve, reject) {
	            _apiUtils2.default.request('api/BookCase/Add', {
	                bid: bid,
	                cid: cid
	            }).then(function (response) {
	                resolve(response.data);
	                $self.addLocalBookCase([{ id: bid, cid: cid }]);
	                _system4.default.showToast({
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
	    delete: function _delete($vm, bids) {
	        var $self = this;
	        return new Promise(function (resolve, reject) {
	            _apiUtils2.default.request('api/BookCase/Delete', {
	                bids: bids
	            }).then(function (response) {
	                resolve(response.data);
	                _system4.default.showToast({
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
	    addReadRecords: function addReadRecords(bid, cid) {
	        var $self = this;
	        return new Promise(function (resolve, reject) {
	            _apiUtils2.default.post('BookCase/AddReadRecords', { bid: bid, cid: cid }).then(function (response) {
	                // $self.addLocalReadRecords([{ id: bid, cid: cid }]);
	                resolve(response.data);
	            });
	        });
	    },
	
	    /**
	    * 添加到本地 阅读状态
	    * @param {视图模型}  
	    */
	    addLocalBookCase: function addLocalBookCase(item) {
	        var _this = this;
	
	        return new Promise(function (resolve, reject) {
	            _this.getLocalBookCase().then(function (res) {
	                for (var i in res) {
	                    if (res[i].bid == item.bid) {
	                        res.splice(i, 1);
	                    }
	                }
	                res.push(item);
	                _system2.default.set({
	                    key: WS_LOCAL_SIMPLE_READINGRECORDS,
	                    value: res,
	                    success: function success(data) {
	                        resolve(data);
	                    }
	                });
	            });
	        });
	    },
	
	    /**
	     * 获取缓存的阅读记录
	     * @param {视图模型}  
	     */
	    getLocalBookCase: function getLocalBookCase() {
	        return new Promise(function (resolve, reject) {
	            _system2.default.get({
	                key: WS_LOCAL_SIMPLE_READINGRECORDS,
	                complete: function complete(data) {
	                    if (data == '' || data == undefined) {
	                        resolve([]);
	                        return;
	                    }
	                    resolve(JSON.parse(data));
	                }
	            });
	        });
	    },
	
	    /**
	     * 获取缓存的书籍是否在书架中
	     * @param {视图模型}  
	     */
	    isExistInBookCase: function isExistInBookCase(bid) {
	        var _this2 = this;
	
	        return new Promise(function (resolve) {
	            _this2.getLocalBookCase().then(function (res) {
	                for (var i in res) {
	                    if (res[i].bid == bid) {
	                        resolve(true);
	                        return;
	                    }
	                }
	                resolve(false);
	            });
	        });
	    },
	
	    /**
	    * 删除书架缓存
	    * @param {视图模型}  
	    */
	    removeLocalBookCase: function removeLocalBookCase(bid) {
	        var _this3 = this;
	
	        return new Promise(function (resolve) {
	            _this3.getLocalBookCase().then(function (res) {
	                for (var i in res) {
	                    if (res[i].bid == bid) {
	                        res.splice(i, 1);
	                    }
	                }
	
	                _system2.default.set({
	                    key: WS_LOCAL_SIMPLE_READINGRECORDS,
	                    value: res,
	                    success: function success(data) {
	                        resolve(data);
	                    }
	                });
	            });
	        });
	    },
	
	    /**
	     * 初始化缓存
	     * @param {视图模型}  
	     */
	    initBookCase: function initBookCase(arr) {
	        return new Promise(function (resolve) {
	            _system2.default.set({
	                key: WS_LOCAL_SIMPLE_READINGRECORDS,
	                value: arr,
	                success: function success(data) {
	                    resolve(data);
	                }
	            });
	        });
	    },
	    clearLocalRecords: function clearLocalRecords() {
	        var records = this.getLocalReadRecords();
	        records = {};
	        VueCookie.set(WS_LOCAL_SIMPLE_READINGRECORDS, JSON.stringify(records));
	    },
	    clear: function clear() {
	        var localBookcase = this.getLocalBookCase();
	        localBookcase = {};
	        VueCookie.set(WS_LOCAL_SIMPLE_BOOKCASE, JSON.stringify(localBookcase));
	    },
	    reloadBookCase: function reloadBookCase() {
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
	    addLocalBookpage: function addLocalBookpage(item) {
	        var _this4 = this;
	
	        return new Promise(function (resolve, reject) {
	            _this4.getLocalBookpage().then(function (res) {
	                for (var i in res) {
	                    if (res[i].bid == item.bid) {
	                        res.splice(i, 1);
	                    }
	                }
	                res.push(item);
	                _system2.default.set({
	                    key: WS_LOCAL_SIMPLE_BOOKPAGE,
	                    value: res,
	                    success: function success(data) {
	                        resolve(data);
	                    }
	                });
	            });
	        });
	    },
	
	    /**
	     * 获取缓存的阅读章节
	     * @param {视图模型}  
	     */
	    getLocalBookpage: function getLocalBookpage() {
	        return new Promise(function (resolve, reject) {
	            _system2.default.get({
	                key: WS_LOCAL_SIMPLE_BOOKPAGE,
	                complete: function complete(data) {
	                    if (data == '' || data == undefined) {
	                        resolve([]);
	                        return;
	                    }
	                    resolve(JSON.parse(data));
	                }
	            });
	        });
	    }
	};

/***/ }),

/***/ 13:
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(14)
	var $app_template$ = __webpack_require__(18)
	var $app_style$ = __webpack_require__(19)
	var $app_script$ = __webpack_require__(20)
	
	$app_define$('@app-component/loading', [], function($app_require$, $app_exports$, $app_module$){
	     $app_script$($app_module$, $app_exports$, $app_require$)
	     if ($app_exports$.__esModule && $app_exports$.default) {
	            $app_module$.exports = $app_exports$.default
	        }
	     $app_module$.exports.template = $app_template$
	     $app_module$.exports.style = $app_style$
	})


/***/ }),

/***/ 14:
/***/ (function(module, exports, __webpack_require__) {

	var $app_template$ = __webpack_require__(15)
	var $app_style$ = __webpack_require__(16)
	var $app_script$ = __webpack_require__(17)
	
	$app_define$('@app-component/layer-bg', [], function($app_require$, $app_exports$, $app_module$){
	     $app_script$($app_module$, $app_exports$, $app_require$)
	     if ($app_exports$.__esModule && $app_exports$.default) {
	            $app_module$.exports = $app_exports$.default
	        }
	     $app_module$.exports.template = $app_template$
	     $app_module$.exports.style = $app_style$
	})


/***/ }),

/***/ 15:
/***/ (function(module, exports) {

	module.exports = {
	  "type": "div",
	  "attr": {},
	  "classList": [
	    "layer-bg"
	  ],
	  "children": [
	    {
	      "type": "div",
	      "attr": {
	        "show": function () {return this.visible}
	      },
	      "classList": function () {return [this.className]},
	      "style": {
	        "backgroundColor": function () {return this.option.background}
	      },
	      "events": {
	        "click": "layerBgClick"
	      },
	      "children": [
	        {
	          "type": "div",
	          "attr": {},
	          "events": {
	            "click": "interceptor"
	          },
	          "children": [
	            {
	              "type": "slot",
	              "attr": {}
	            }
	          ]
	        }
	      ]
	    }
	  ]
	}

/***/ }),

/***/ 16:
/***/ (function(module, exports) {

	module.exports = {
	  "@KEYFRAMES": {
	    "layerBgenter": [
	      {
	        "opacity": 0,
	        "time": 0
	      },
	      {
	        "opacity": 1,
	        "time": 100
	      }
	    ],
	    "layerBgleave": [
	      {
	        "opacity": 1,
	        "time": 0
	      },
	      {
	        "opacity": 0,
	        "time": 100
	      }
	    ]
	  },
	  ".layer-bg-enter": {
	    "animationName": "layerBgenter"
	  },
	  ".layer-bg-leave": {
	    "animationName": "layerBgleave"
	  },
	  ".layer-bg>div": {
	    "position": "fixed",
	    "left": "0px",
	    "right": "0px",
	    "top": "0px",
	    "bottom": "0px",
	    "justifyContent": "center",
	    "alignItems": "center",
	    "animationDuration": "500ms",
	    "animationFillMode": "forwards",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "layer-bg"
	        },
	        {
	          "t": "child"
	        },
	        {
	          "t": "t",
	          "n": "div"
	        }
	      ]
	    }
	  },
	  ".layer-bg>div>div": {
	    "flexDirection": "column",
	    "alignItems": "center",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "layer-bg"
	        },
	        {
	          "t": "child"
	        },
	        {
	          "t": "t",
	          "n": "div"
	        },
	        {
	          "t": "child"
	        },
	        {
	          "t": "t",
	          "n": "div"
	        }
	      ]
	    }
	  }
	}

/***/ }),

/***/ 17:
/***/ (function(module, exports) {

	module.exports = function(module, exports, $app_require$){'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = {
	    props: ['option'],
	    data: function data() {
	        return {
	            visible: false,
	            className: '',
	            defaultOption: {
	                show: false,
	                background: 'rgba(0,0,0,0.4)',
	                autoClose: true
	            }
	        };
	    },
	    onInit: function onInit() {
	        var _this = this;
	
	        Object.keys(this.defaultOption).forEach(function (key) {
	            var methodName = key.replace(/^\w/, function ($0) {
	                return 'update' + $0.toUpperCase();
	            });
	
	            _this.$watch('option.' + key, methodName);
	            _this[methodName]();
	        });
	    },
	    updateBackground: function updateBackground() {
	        !this.option.hasOwnProperty('background') && this.$set('option.background', this.defaultOption.background);
	    },
	    updateAutoClose: function updateAutoClose() {
	        !this.option.hasOwnProperty('autoClose') && this.$set('option.autoClose', this.defaultOption.autoClose);
	    },
	    updateShow: function updateShow() {
	        var _this2 = this;
	
	        if (!this.option.hasOwnProperty('show')) {
	            this.$set('option.show', this.defaultOption.show);
	        } else {
	            clearTimeout(this.timeoutId);
	
	            if (this.option.show) {
	                this.visible = true;
	                this.className = 'layer-bg-enter';
	            } else {
	                this.className = 'layer-bg-leave';
	                this.timeoutId = setTimeout(function () {
	                    _this2.visible = false;
	                }, 500);
	            }
	        }
	    },
	    layerBgClick: function layerBgClick() {
	        this.option.autoClose && (this.option.show = false);
	        this.$emit('蒙层点击');
	    },
	    interceptor: function interceptor() {}
	};}

/***/ }),

/***/ 18:
/***/ (function(module, exports) {

	module.exports = {
	  "type": "layer-bg",
	  "attr": {
	    "option": function () {return this.layerBgOption}
	  },
	  "children": [
	    {
	      "type": "div",
	      "attr": {},
	      "classList": [
	        "loading"
	      ],
	      "children": [
	        {
	          "type": "div",
	          "attr": {},
	          "children": [
	            {
	              "type": "progress",
	              "attr": {
	                "type": "circular"
	              }
	            },
	            {
	              "type": "text",
	              "attr": {
	                "value": function () {return this.option.text}
	              },
	              "shown": function () {return this.option.text}
	            }
	          ]
	        }
	      ]
	    }
	  ]
	}

/***/ }),

/***/ 19:
/***/ (function(module, exports) {

	module.exports = {
	  ".loading": {
	    "width": "540px",
	    "justifyContent": "center"
	  },
	  ".loading progress": {
	    "width": "48px",
	    "height": "48px",
	    "color": "#f76c5b",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "loading"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "t",
	          "n": "progress"
	        }
	      ]
	    }
	  },
	  ".loading>div": {
	    "paddingTop": "25px",
	    "paddingRight": "40px",
	    "paddingBottom": "25px",
	    "paddingLeft": "40px",
	    "flexDirection": "column",
	    "alignItems": "center",
	    "borderRadius": "25px",
	    "backgroundColor": "rgba(71,71,71,0.8)",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "loading"
	        },
	        {
	          "t": "child"
	        },
	        {
	          "t": "t",
	          "n": "div"
	        }
	      ]
	    }
	  },
	  ".loading image": {
	    "marginTop": "9px",
	    "marginRight": "0px",
	    "marginBottom": "9px",
	    "marginLeft": "0px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "loading"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "t",
	          "n": "image"
	        }
	      ]
	    }
	  },
	  ".loading text": {
	    "marginTop": "7px",
	    "color": "#ffffff",
	    "fontSize": "34px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "loading"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "t",
	          "n": "text"
	        }
	      ]
	    }
	  }
	}

/***/ }),

/***/ 20:
/***/ (function(module, exports) {

	module.exports = function(module, exports, $app_require$){'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = {
	    props: ['option'],
	    data: function data() {
	        return {
	            layerBgOption: {
	                show: false,
	                background: 'rgba(0,0,0,.2)',
	                autoClose: false
	            },
	            defaultOption: {
	                show: false,
	                text: ''
	            }
	        };
	    },
	    onInit: function onInit() {
	        var _this = this;
	
	        Object.keys(this.defaultOption).forEach(function (key) {
	            var methodName = key.replace(/^\w/, function ($0) {
	                return 'update' + $0.toUpperCase();
	            });
	
	            _this.$watch('option.' + key, methodName);
	            _this[methodName]();
	        });
	    },
	    updateShow: function updateShow() {
	        if (this.option.hasOwnProperty('show')) {
	            this.$set('layerBgOption.show', this.option.show);
	            this.$set('layerBgOption.background', this.option.background);
	        } else {
	            this.$set('option.show', false);
	        }
	    },
	    updateText: function updateText() {
	        !this.option.hasOwnProperty('text') && this.$set('option.text', this.defaultOption.text);
	    }
	};}

/***/ }),

/***/ 38:
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _system = $app_require$("@app-module/system.storage");
	
	var _system2 = _interopRequireDefault(_system);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var WS_READINGCONFIG = "ws_readingconfig"; /**
	                                            * 阅读配置类
	                                            * filename:readingConfig.js
	                                            * created by charlesshang
	                                            */
	
	var WS_LINKLOGINHISTORY = "ws_linkloginhistory";
	var MAX_FONTSIZE = 64;
	var MINI_FONTSIZE = 25;
	
	exports.default = {
	    get: function get() {
	        return new Promise(function (resolve, reject) {
	            _system2.default.get({
	                key: WS_READINGCONFIG,
	                success: function success(data) {
	                    resolve(data);
	                }
	            });
	        });
	    },
	    set: function set(val) {
	        return new Promise(function (resolve) {
	            _system2.default.set({
	                key: WS_READINGCONFIG,
	                value: val,
	                success: function success() {
	                    resolve(val);
	                }
	            });
	        });
	    },
	    setMode: function setMode(mode) {
	        var _this = this;
	
	        return new Promise(function (resolve) {
	            _this.get().then(function (res) {
	                res.mode = mode;
	                _this.set(res).then(function (res) {
	                    resolve(mode);
	                });
	            });
	        });
	    },
	    changeFontSize: function changeFontSize(val) {
	        var _this2 = this;
	
	        return new Promise(function (resolve) {
	            _this2.get().then(function (res1) {
	                var data = {};
	                if (res1) {
	                    data = JSON.parse(res1);
	                } else {
	                    data = {
	                        fontsize: 32
	                    };
	                }
	                var fontsize = data.fontsize;
	                if (fontsize + val < MINI_FONTSIZE) {
	                    data.fontsize = MINI_FONTSIZE;
	                } else if (fontsize + val > MAX_FONTSIZE) {
	                    data.fontsize = MAX_FONTSIZE;
	                } else {
	                    data.fontsize += val;
	                }
	                _this2.set(data).then(function (res2) {
	                    resolve(res2.fontsize);
	                });
	            });
	        });
	    },
	
	    //获取跳转登录前的页面路由
	    getRoute: function getRoute() {
	        var that = this;
	        return new Promise(function (resolve, reject) {
	            _system2.default.get({
	                key: WS_LINKLOGINHISTORY,
	                success: function success(data) {
	                    that.setRoute('').then(function (res) {
	                        resolve(data);
	                    });
	                }
	            });
	        });
	    },
	
	    //设置登录页面路由
	    setRoute: function setRoute(val) {
	        return new Promise(function (resolve) {
	            _system2.default.set({
	                key: WS_LINKLOGINHISTORY,
	                value: val,
	                success: function success() {
	                    resolve(val);
	                }
	            });
	        });
	    }
	};

/***/ }),

/***/ 83:
/***/ (function(module, exports) {

	module.exports = {
	  "type": "div",
	  "attr": {},
	  "classList": [
	    "login"
	  ],
	  "children": [
	    {
	      "type": "div",
	      "attr": {},
	      "classList": [
	        "login-box"
	      ],
	      "children": [
	        {
	          "type": "div",
	          "attr": {},
	          "classList": [
	            "phone-login"
	          ],
	          "shown": function () {return this.isPhone==true},
	          "children": [
	            {
	              "type": "div",
	              "attr": {},
	              "children": [
	                {
	                  "type": "text",
	                  "attr": {
	                    "value": "手机登录"
	                  },
	                  "classList": [
	                    "phone-title"
	                  ]
	                }
	              ]
	            },
	            {
	              "type": "div",
	              "attr": {},
	              "classList": [
	                "phone-detail",
	                "phone-input"
	              ],
	              "children": [
	                {
	                  "type": "text",
	                  "attr": {
	                    "value": "手机号:"
	                  },
	                  "classList": [
	                    "phone-num"
	                  ]
	                },
	                {
	                  "type": "input",
	                  "attr": {
	                    "type": "number",
	                    "placeholder": "请输入手机号"
	                  },
	                  "classList": [
	                    "ws-input",
	                    "num-input"
	                  ],
	                  "events": {
	                    "change": "setMob"
	                  }
	                },
	                {
	                  "type": "div",
	                  "attr": {},
	                  "classList": [
	                    "btn-send"
	                  ],
	                  "events": {
	                    "click": "sendCode"
	                  },
	                  "children": [
	                    {
	                      "type": "text",
	                      "attr": {
	                        "value": function () {return this.showText}
	                      },
	                      "style": {
	                        "color": function () {return this.validate()?'#cbcbcb':'#f76c5b'}
	                      }
	                    }
	                  ]
	                }
	              ]
	            },
	            {
	              "type": "div",
	              "attr": {},
	              "classList": [
	                "phone-detail"
	              ],
	              "children": [
	                {
	                  "type": "text",
	                  "attr": {
	                    "value": "验证码:"
	                  },
	                  "classList": [
	                    "phone-num"
	                  ]
	                },
	                {
	                  "type": "input",
	                  "attr": {
	                    "type": "number",
	                    "placeholder": "请输入验证码"
	                  },
	                  "events": {
	                    "change": "setCode"
	                  },
	                  "classList": [
	                    "ws-input"
	                  ]
	                }
	              ]
	            },
	            {
	              "type": "div",
	              "attr": {},
	              "classList": [
	                "login-choose"
	              ],
	              "children": [
	                {
	                  "type": "div",
	                  "attr": {},
	                  "classList": [
	                    "btn-login"
	                  ],
	                  "events": {
	                    "click": "mobileLogin"
	                  },
	                  "style": {
	                    "backgroundColor": function () {return this.mob.length==11&&this.verificationCode.length==4?'#f76c5b':'#ffb1a8'}
	                  },
	                  "children": [
	                    {
	                      "type": "text",
	                      "attr": {
	                        "value": "登录"
	                      },
	                      "classList": [
	                        "login-text"
	                      ],
	                      "events": {
	                        "click": "mobileLogin"
	                      }
	                    }
	                  ]
	                },
	                {
	                  "type": "div",
	                  "attr": {},
	                  "children": [
	                    {
	                      "type": "text",
	                      "attr": {
	                        "value": "账号密码登录"
	                      },
	                      "classList": [
	                        "change-login"
	                      ],
	                      "events": {
	                        "click": "checkType"
	                      }
	                    }
	                  ]
	                }
	              ]
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "attr": {},
	          "classList": [
	            "phone-login"
	          ],
	          "shown": function () {return this.isPhone==false},
	          "children": [
	            {
	              "type": "div",
	              "attr": {},
	              "classList": [
	                "num-login"
	              ],
	              "children": [
	                {
	                  "type": "div",
	                  "attr": {},
	                  "children": [
	                    {
	                      "type": "text",
	                      "attr": {
	                        "value": "账号登录"
	                      },
	                      "classList": [
	                        "phone-title"
	                      ]
	                    }
	                  ]
	                },
	                {
	                  "type": "div",
	                  "attr": {},
	                  "classList": [
	                    "phone-detail"
	                  ],
	                  "children": [
	                    {
	                      "type": "text",
	                      "attr": {
	                        "value": "账号:"
	                      },
	                      "classList": [
	                        "phone-num"
	                      ]
	                    },
	                    {
	                      "type": "input",
	                      "attr": {
	                        "type": "email",
	                        "placeholder": "手机号/账号"
	                      },
	                      "events": {
	                        "change": "setAccount"
	                      },
	                      "classList": [
	                        "ws-input"
	                      ]
	                    }
	                  ]
	                },
	                {
	                  "type": "div",
	                  "attr": {},
	                  "classList": [
	                    "phone-detail"
	                  ],
	                  "children": [
	                    {
	                      "type": "text",
	                      "attr": {
	                        "value": "密码:"
	                      },
	                      "classList": [
	                        "phone-num"
	                      ]
	                    },
	                    {
	                      "type": "input",
	                      "attr": {
	                        "type": "password",
	                        "placeholder": "6-18位密码"
	                      },
	                      "events": {
	                        "change": "setPwd"
	                      },
	                      "classList": [
	                        "ws-input"
	                      ]
	                    }
	                  ]
	                }
	              ]
	            },
	            {
	              "type": "div",
	              "attr": {},
	              "classList": [
	                "login-choose"
	              ],
	              "children": [
	                {
	                  "type": "div",
	                  "attr": {},
	                  "classList": [
	                    "btn-login"
	                  ],
	                  "events": {
	                    "click": "userLogin"
	                  },
	                  "style": {
	                    "backgroundColor": function () {return this.isAccountLogin()?'#f76c5b':'#ffb1a8'}
	                  },
	                  "children": [
	                    {
	                      "type": "text",
	                      "attr": {
	                        "value": "登录"
	                      },
	                      "classList": [
	                        "login-text"
	                      ],
	                      "events": {
	                        "click": "userLogin"
	                      }
	                    }
	                  ]
	                },
	                {
	                  "type": "div",
	                  "attr": {},
	                  "children": [
	                    {
	                      "type": "text",
	                      "attr": {
	                        "value": "手机快速登录"
	                      },
	                      "classList": [
	                        "change-login"
	                      ],
	                      "events": {
	                        "click": "checkType"
	                      }
	                    }
	                  ]
	                }
	              ]
	            }
	          ]
	        }
	      ]
	    },
	    {
	      "type": "loading",
	      "attr": {
	        "option": function () {return this.option}
	      }
	    }
	  ]
	}

/***/ }),

/***/ 84:
/***/ (function(module, exports) {

	module.exports = {
	  ".login": {
	    "paddingTop": "0px",
	    "paddingRight": "30px",
	    "paddingBottom": "0px",
	    "paddingLeft": "30px",
	    "flexDirection": "column",
	    "backgroundColor": "#ffffff"
	  },
	  ".login-box": {
	    "flexDirection": "column"
	  },
	  ".phone-login": {
	    "flex": 1,
	    "flexDirection": "column"
	  },
	  ".phone-input": {
	    "justifyContent": "space-between"
	  },
	  ".phone-detail": {
	    "paddingTop": "20px",
	    "paddingRight": "0px",
	    "paddingBottom": "20px",
	    "paddingLeft": "0px",
	    "borderBottomWidth": "1px",
	    "borderTopColor": "#e5e5e5",
	    "borderRightColor": "#e5e5e5",
	    "borderBottomColor": "#e5e5e5",
	    "borderLeftColor": "#e5e5e5",
	    "marginTop": "20px",
	    "marginRight": "0px",
	    "marginBottom": "20px",
	    "marginLeft": "0px"
	  },
	  ".num-input": {
	    "flex": 1
	  },
	  ".phone-title": {
	    "paddingTop": "30px",
	    "paddingRight": "0px",
	    "paddingBottom": "30px",
	    "paddingLeft": "0px",
	    "width": "100%",
	    "textAlign": "center",
	    "fontSize": "32px",
	    "color": "#333333",
	    "fontWeight": "bold"
	  },
	  ".num-login": {
	    "flex": 1,
	    "flexDirection": "column"
	  },
	  ".phone-num": {
	    "fontSize": "30px",
	    "color": "#333333"
	  },
	  ".btn-send": {
	    "fontSize": "30px",
	    "color": "#cbcbcb",
	    "paddingLeft": "15px",
	    "borderLeftWidth": "1px",
	    "borderTopColor": "#cbcbcb",
	    "borderRightColor": "#cbcbcb",
	    "borderBottomColor": "#cbcbcb",
	    "borderLeftColor": "#cbcbcb",
	    "height": "50px",
	    "width": "180px",
	    "justifyContent": "center"
	  },
	  ".btn-login": {
	    "width": "100%",
	    "height": "74px",
	    "borderRadius": "10px",
	    "justifyContent": "center",
	    "alignItems": "center"
	  },
	  ".login-text": {
	    "fontSize": "28px",
	    "color": "#ffffff"
	  },
	  ".ws-input": {
	    "fontSize": "30px",
	    "paddingLeft": "20px",
	    "flex": 1
	  },
	  ".login-choose": {
	    "flexDirection": "column"
	  },
	  ".change-login": {
	    "width": "100%",
	    "textAlign": "center",
	    "marginTop": "20px",
	    "color": "#333333"
	  }
	}

/***/ }),

/***/ 105:
/***/ (function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, $app_require$){'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _personData = __webpack_require__(8);
	
	var _personData2 = _interopRequireDefault(_personData);
	
	var _authentication = __webpack_require__(11);
	
	var _authentication2 = _interopRequireDefault(_authentication);
	
	var _readingConfig = __webpack_require__(38);
	
	var _readingConfig2 = _interopRequireDefault(_readingConfig);
	
	var _bookcaseService = __webpack_require__(12);
	
	var _bookcaseService2 = _interopRequireDefault(_bookcaseService);
	
	var _system = $app_require$('@app-module/system.router');
	
	var _system2 = _interopRequireDefault(_system);
	
	var _system3 = $app_require$('@app-module/system.prompt');
	
	var _system4 = _interopRequireDefault(_system3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    data: {
	        showText: "获取验证码",
	        mob: '',
	        verificationCode: '',
	        account: '',
	        pwd: '',
	        isPhone: true,
	        timer: null,
	        isSend: false,
	        option: {
	            show: false,
	            text: '正在登录中...'
	        }
	    },
	    onInit: function onInit() {
	        clearInterval(this.timer);
	    },
	    onDestroy: function onDestroy() {
	        clearInterval(this.timer);
	    },
	    validate: function validate() {
	        return this.isSend || !/^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/.test(this.mob);
	    },
	    isLogin: function isLogin() {
	        return !this.validate() && this.verificationCode.length == 4;
	    },
	    isAccountLogin: function isAccountLogin() {
	        return this.account.length >= 5 && this.pwd.length >= 5;
	    },
	    sendCode: function sendCode() {
	        var _this = this;
	
	        if (!this.validate()) {
	            this.showText = "发送中...";
	            _personData2.default.sendSmsAuthCode({ mob: this.mob, pType: '4' }).then(function (res) {
	                _this.isSend = true;
	                _this.showText = "已发送";
	                setTimeout(function () {
	                    var num = 60;
	                    _this.timer = setInterval(function (res) {
	                        if (num == 0) {
	                            _this.showText = '重新获取';
	                            _this.isSend = false;
	                            clearInterval(_this.timer);
	                            return;
	                        }
	                        num--;
	                        _this.showText = num + 's';
	                    }, 1000);
	                }, 300);
	            }, function (error) {
	                _this.isSend = false;
	                _this.showText = "重新获取";
	            });
	        }
	    },
	    setMob: function setMob(val) {
	        this.mob = val.text;
	    },
	    setCode: function setCode(val) {
	        this.verificationCode = val.text;
	    },
	    setAccount: function setAccount(val) {
	        this.account = val.text;
	    },
	    setPwd: function setPwd(val) {
	        this.pwd = val.text;
	    },
	    checkType: function checkType() {
	        this.isPhone = !this.isPhone;
	    },
	    mobileLogin: function mobileLogin() {
	        var _this2 = this;
	
	        var that = this;
	        if (this.mob.length == 11 && this.verificationCode.length == 4) {
	            this.option.show = true;
	            _personData2.default.mobileLogin({ mob: this.mob, mobKey: this.verificationCode }).then(function (res1) {
	                Promise.all([_authentication2.default.setToken(res1.Token), _authentication2.default.setUserData(res1.data)]).then(function (res2) {
	                    _personData2.default.bookInit({ pageIndex: 1, pageSize: 100 }).then(function (res3) {
	                        var lists = res3.data.items;
	                        _this2.option.show = false;
	                        _bookcaseService2.default.initBookCase(lists).then(function (res4) {
	                            _system4.default.showToast({
	                                message: "登录成功！",
	                                duration: 0
	                            });
	                            _readingConfig2.default.getRoute().then(function (res) {
	                                if (res == '' || res == undefined) {
	                                    _system2.default.replace({
	                                        uri: 'Index',
	                                        params: {
	                                            currentIndex: 2
	                                        }
	                                    });
	                                } else {
	                                    _system2.default.replace({
	                                        uri: JSON.parse(res).uri,
	                                        params: JSON.parse(res).params || {}
	                                    });
	                                }
	                            });
	                        });
	                    }).catch(function (res) {
	                        _this2.option.show = false;
	                    });
	                });
	            }).catch(function (res) {
	                _this2.option.show = false;
	            });
	        }
	    },
	    userLogin: function userLogin() {
	        var _this3 = this;
	
	        var that = this;
	        if (this.isAccountLogin()) {
	            this.option.show = true;
	            _personData2.default.userLogin({ account: this.account, pwd: this.pwd }).then(function (res1) {
	                Promise.all([_authentication2.default.setToken(res1.Token), _authentication2.default.setUserData(res1.data)]).then(function (res2) {
	                    _personData2.default.bookInit({ pageIndex: 1, pageSize: 100 }).then(function (res3) {
	                        _this3.option.show = false;
	                        var lists = res3.data.items;
	                        var arr = [];
	                        for (var i in lists) {
	                            arr.push({
	                                bid: lists[i].id,
	                                isBookCase: true
	                            });
	                        }
	                        _bookcaseService2.default.initBookCase(arr).then(function (res4) {
	                            _system4.default.showToast({
	                                message: "登录成功！",
	                                duration: 0
	                            });
	                            _readingConfig2.default.getRoute().then(function (res) {
	                                if (res == '' || res == undefined) {
	                                    _system2.default.replace({
	                                        uri: 'Index',
	                                        params: {
	                                            currentIndex: 2
	                                        }
	                                    });
	                                } else {
	                                    _system2.default.replace({
	                                        uri: JSON.parse(res).uri,
	                                        params: JSON.parse(res).params || {}
	                                    });
	                                }
	                            });
	                        });
	                    }).catch(function (res) {
	                        _this3.option.show = false;
	                    });
	                });
	            }).catch(function (res) {
	                _this3.option.show = false;
	            });
	        }
	    },
	    setLoginState: function setLoginState(token, data) {
	        var that = this;
	        return new Promise(function (resolve, reject) {
	            Promise.all([that.setToken(token), that.setUserData(data)]).then(function (res) {
	                resolve("ok");
	            });
	        });
	    },
	    setToken: function setToken(token) {
	        return new Promise(function (resolve, reject) {
	            _authentication2.default.setToken(Token).then(function (res) {
	                resolve("成功");
	            }, function (error) {
	                reject("token保存失败");
	            });
	        });
	    },
	    setUserData: function setUserData(data) {
	        return new Promise(function (resolve, reject) {
	            _authentication2.default.setUserData(data).then(function (res) {
	                resolve("成功");
	            }, function (error) {
	                reject("用户数据保存失败");
	            });
	        });
	    }
	};
	
	
	var moduleOwn = exports.default || module.exports;
	var accessors = ['public', 'protected', 'private'];
	
	if (moduleOwn.data && accessors.some(function (acc) {
	    return moduleOwn[acc];
	})) {
	    throw new Error('页面VM对象中的属性data不可与"' + accessors.join(',') + '"同时存在，请使用private替换data名称');
	} else if (!moduleOwn.data) {
	    moduleOwn.data = {};
	    moduleOwn._descriptor = {};
	    accessors.forEach(function (acc) {
	        var accType = _typeof(moduleOwn[acc]);
	        if (accType === 'object') {
	            moduleOwn.data = Object.assign(moduleOwn.data, moduleOwn[acc]);
	            for (var name in moduleOwn[acc]) {
	                moduleOwn._descriptor[name] = { access: acc };
	            }
	        } else if (accType === 'function') {
	            console.warn('页面VM对象中的属性' + acc + '的值不能是函数，请使用对象');
	        }
	    });
	}}

/***/ })

/******/ });
  };
  if (typeof window === "undefined") {
    return createPageHandler();
  }
  else {
    window.createPageHandler = createPageHandler
  }
})();
//# sourceMappingURL=index.js.map