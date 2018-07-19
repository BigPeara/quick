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
	__webpack_require__(144)
	var $app_template$ = __webpack_require__(108)
	var $app_style$ = __webpack_require__(109)
	var $app_script$ = __webpack_require__(110)
	
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

/***/ 37:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _apiUtils = __webpack_require__(9);
	
	var _apiUtils2 = _interopRequireDefault(_apiUtils);
	
	var _system = $app_require$('@app-module/system.prompt');
	
	var _system2 = _interopRequireDefault(_system);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    /**
	     * 图书列表
	     * @param 请求参数 params
	     */
	    BookStorage: function BookStorage(params) {
	        var that = this;
	        return new Promise(function (resolve, reject) {
	            _apiUtils2.default.post('BookStorage/Filter', params).then(function (res) {
	                resolve(res);
	            }, function (error) {
	                reject(error);
	            });
	        });
	    },
	
	    /**
	     * 热销短篇
	     * @param 请求参数 params
	     */
	    specialBook: function specialBook(params) {
	        var that = this;
	        return new Promise(function (resolve, reject) {
	            _apiUtils2.default.post('BookStorage/SpecialOfferBookList', params).then(function (res) {
	                resolve(res);
	            }, function (error) {
	                reject(error);
	            });
	        });
	    },
	
	    /**
	     * 图书详情
	     * @param 请求参数 params
	     */
	    bookInfo: function bookInfo(params) {
	        var that = this;
	        return new Promise(function (resolve, reject) {
	            _apiUtils2.default.post('ReadingCenter/BookInfo', params).then(function (res) {
	                resolve(res);
	            }, function (error) {
	                reject(error);
	            });
	        });
	    },
	
	    /**
	     * 图书评论
	     * @param 请求参数 params
	     */
	    bookComments: function bookComments(params) {
	        var that = this;
	        return new Promise(function (resolve, reject) {
	            _apiUtils2.default.post('OperationCenter/GetComments', params).then(function (res) {
	                resolve(res);
	            }, function (error) {
	                reject(error);
	            });
	        });
	    },
	
	    /**
	     * 阅读页
	     * @param 请求参数 params
	     */
	    bookRead: function bookRead(params) {
	        var that = this;
	        return new Promise(function (resolve, reject) {
	            _apiUtils2.default.post('v2/ReadingCenter/ChapterContent', params).then(function (res) {
	                resolve(res);
	            }, function (error) {
	                reject(error);
	            });
	        });
	    },
	
	    /**
	     * 目录页
	     * @param 请求参数 params
	     */
	    bookChapter: function bookChapter(params) {
	        var that = this;
	        return new Promise(function (resolve, reject) {
	            _apiUtils2.default.post('ReadingCenter/ChapterList', params).then(function (res) {
	                resolve(res);
	            }, function (error) {
	                reject(error);
	            });
	        });
	    },
	
	    /**
	     * @param 增加阅读记录 params
	     */
	    addReadRecords: function addReadRecords(params) {
	        var that = this;
	        return new Promise(function (resolve, reject) {
	            _apiUtils2.default.post('BookCase/AddReadRecords', params).then(function (res) {
	                resolve(res);
	            }, function (error) {
	                reject(error);
	            });
	        });
	    },
	
	    /**
	     * @param 添加书架 params
	     */
	    addBookCase: function addBookCase(params) {
	        var that = this;
	        return new Promise(function (resolve, reject) {
	            _apiUtils2.default.post('BookCase/Add', params).then(function (res) {
	                resolve(res);
	            }, function (error) {
	                reject(error);
	            });
	        });
	    },
	
	    /**
	     * @param 移出书架 params
	     */
	    deleteBookCase: function deleteBookCase(params) {
	        var that = this;
	        return new Promise(function (resolve, reject) {
	            _apiUtils2.default.post('BookCase/Delete', params).then(function (res) {
	                resolve(res);
	            }, function (error) {
	                reject(error);
	            });
	        });
	    },
	
	    /**
	     * @param 订阅章节 params
	     */
	    subscribeChapter: function subscribeChapter(params) {
	        var that = this;
	        return new Promise(function (resolve, reject) {
	            _apiUtils2.default.post('OperationCenter/SubscribeChapter', params).then(function (res) {
	                resolve(res);
	            }, function (error) {
	                reject(error);
	            });
	        });
	    },
	
	    /**
	     * @param 全本订阅 params
	     */
	    subscribeSpecial: function subscribeSpecial(params) {
	        var that = this;
	        return new Promise(function (resolve, reject) {
	            _apiUtils2.default.post('OperationCenter/BuySpecialOfferBook', params).then(function (res) {
	                resolve(res);
	            }, function (error) {
	                _system2.default.showDialog({
	                    message: error
	                });
	                reject(error);
	            });
	        });
	    },
	
	    /**
	      * 书城轮播
	      * @param 请求参数 params
	      */
	    bookIndex: function bookIndex(params) {
	        var that = this;
	        return new Promise(function (resolve, reject) {
	            _apiUtils2.default.post('BookStorage/Index', params).then(function (res) {
	                resolve(res);
	            }, function (error) {
	                reject(error);
	            });
	        });
	    },
	
	    /**
	     * 书城分类接口
	     * @param 请求参数 params
	     */
	    BookClassInit: function BookClassInit(params) {
	        var that = this;
	        return new Promise(function (resolve, reject) {
	            _apiUtils2.default.post('v2/BookStorage/BookClassInit', params).then(function (res) {
	                resolve(res);
	            }, function (error) {
	                reject(error);
	            });
	        });
	    },
	
	    /**
	     * 书城分类搜索接口
	     * @param 请求参数 params
	     */
	    bookFilter: function bookFilter(params) {
	        var that = this;
	        return new Promise(function (resolve, reject) {
	            _apiUtils2.default.post('BookStorage/Filter', params).then(function (res) {
	                resolve(res);
	                // debugger
	            }, function (error) {
	                reject(error);
	            });
	        });
	    },
	
	    /**
	    * 搜索热搜
	    * @param 请求参数 params
	    */
	    searchHot: function searchHot(params) {
	        var that = this;
	        return new Promise(function (resolve, reject) {
	            _apiUtils2.default.post('BookStorage/SearchHot', params).then(function (res) {
	                resolve(res);
	            }, function (error) {
	                reject(error);
	            });
	        });
	    },
	
	    // BookStorage/Search
	    search: function search(params) {
	        var that = this;
	        return new Promise(function (resolve, reject) {
	            _apiUtils2.default.post('BookStorage/Search', params).then(function (res) {
	                resolve(res);
	            }, function (error) {
	                reject(error);
	            });
	        });
	    }
	};

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

/***/ 108:
/***/ (function(module, exports) {

	module.exports = {
	  "type": "div",
	  "attr": {},
	  "classList": function () {return ['read', this.mode]},
	  "children": [
	    {
	      "type": "loading",
	      "attr": {
	        "option": function () {return this.option}
	      }
	    },
	    {
	      "type": "div",
	      "attr": {},
	      "classList": [
	        "views-read"
	      ],
	      "children": [
	        {
	          "type": "div",
	          "attr": {},
	          "classList": [
	            "read-header"
	          ],
	          "shown": function () {return this.readInfo},
	          "children": [
	            {
	              "type": "div",
	              "attr": {},
	              "classList": [
	                "bar"
	              ],
	              "children": [
	                {
	                  "type": "text",
	                  "attr": {
	                    "value": function () {return this.readInfo.Title}
	                  },
	                  "classList": [
	                    "title"
	                  ]
	                }
	              ]
	            },
	            {
	              "type": "div",
	              "attr": {},
	              "classList": [
	                "tools"
	              ],
	              "children": [
	                {
	                  "type": "image",
	                  "attr": {
	                    "src": "../../Common/imgs/index.png"
	                  },
	                  "events": {
	                    "click": "linkHome"
	                  }
	                },
	                {
	                  "type": "text",
	                  "attr": {
	                    "value": "A+"
	                  },
	                  "classList": [
	                    "icon"
	                  ],
	                  "events": {
	                    "click": "fontSizePlus"
	                  }
	                },
	                {
	                  "type": "text",
	                  "attr": {
	                    "value": "A-"
	                  },
	                  "classList": [
	                    "icon"
	                  ],
	                  "events": {
	                    "click": "fontSizeMinus"
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
	            "read-content"
	          ],
	          "shown": function () {return this.readInfo.Contents!=''},
	          "children": [
	            {
	              "type": "div",
	              "attr": {},
	              "repeat": {
	                "exp": function () {return this.toPs(this.readInfo.Contents)},
	                "value": "item"
	              },
	              "classList": [
	                "stage"
	              ],
	              "children": [
	                {
	                  "type": "text",
	                  "attr": {
	                    "value": function () {return this.decodeUnicode(this.item)}
	                  },
	                  "style": {
	                    "fontSize": function () {return (this.fontSize) + 'px'}
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
	            "read-control"
	          ],
	          "shown": function () {return this.readInfo.Contents!=''},
	          "children": [
	            {
	              "type": "div",
	              "attr": {},
	              "classList": [
	                "btn",
	                "btn-prev"
	              ],
	              "events": {
	                "click": "returnPage"
	              },
	              "children": [
	                {
	                  "type": "text",
	                  "attr": {
	                    "value": function () {return this.readInfo.PrevPageString}
	                  }
	                }
	              ]
	            },
	            {
	              "type": "div",
	              "attr": {},
	              "classList": [
	                "menu"
	              ],
	              "events": {
	                "click": "showMenu"
	              },
	              "children": [
	                {
	                  "type": "image",
	                  "attr": {
	                    "src": "../../Common/imgs/list-ul.png"
	                  }
	                }
	              ]
	            },
	            {
	              "type": "div",
	              "attr": {},
	              "classList": [
	                "btn",
	                "btn-next"
	              ],
	              "events": {
	                "click": "nextPage"
	              },
	              "children": [
	                {
	                  "type": "text",
	                  "attr": {
	                    "value": function () {return this.readInfo.NextPageString}
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
	            "read-content"
	          ],
	          "shown": function () {return this.readInfo.Contents==''},
	          "children": [
	            {
	              "type": "div",
	              "attr": {},
	              "repeat": {
	                "exp": function () {return this.toPs(this.readInfo.chapterIntro)},
	                "value": "item"
	              },
	              "classList": [
	                "stage"
	              ],
	              "children": [
	                {
	                  "type": "text",
	                  "attr": {
	                    "value": function () {return this.decodeUnicode(this.item)}
	                  },
	                  "style": {
	                    "fontSize": function () {return (this.fontSize) + 'px'}
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
	            "order"
	          ],
	          "shown": function () {return this.readInfo.Contents==''},
	          "children": [
	            {
	              "type": "div",
	              "attr": {},
	              "classList": [
	                "read-order"
	              ],
	              "shown": function () {return !this.readSpecial.isSpecial},
	              "children": [
	                {
	                  "type": "div",
	                  "attr": {},
	                  "classList": [
	                    "title"
	                  ],
	                  "children": [
	                    {
	                      "type": "div",
	                      "attr": {},
	                      "classList": [
	                        "line"
	                      ]
	                    },
	                    {
	                      "type": "text",
	                      "attr": {
	                        "value": "本章需购买后阅读"
	                      },
	                      "classList": [
	                        "title-text"
	                      ]
	                    },
	                    {
	                      "type": "div",
	                      "attr": {},
	                      "classList": [
	                        "line"
	                      ]
	                    }
	                  ]
	                },
	                {
	                  "type": "div",
	                  "attr": {},
	                  "classList": [
	                    "price-detail"
	                  ],
	                  "children": [
	                    {
	                      "type": "text",
	                      "attr": {
	                        "value": "价格:"
	                      },
	                      "classList": [
	                        "price"
	                      ]
	                    },
	                    {
	                      "type": "text",
	                      "attr": {
	                        "value": function () {return this.readInfo.chapterMoney}
	                      },
	                      "classList": [
	                        "num"
	                      ]
	                    },
	                    {
	                      "type": "text",
	                      "attr": {
	                        "value": "悠空币"
	                      },
	                      "classList": [
	                        "money"
	                      ]
	                    }
	                  ]
	                },
	                {
	                  "type": "div",
	                  "attr": {},
	                  "classList": [
	                    "balance-detail"
	                  ],
	                  "children": [
	                    {
	                      "type": "text",
	                      "attr": {
	                        "value": "余额:"
	                      },
	                      "classList": [
	                        "balance"
	                      ]
	                    },
	                    {
	                      "type": "text",
	                      "attr": {
	                        "value": function () {return this.userData.vipMoney}
	                      },
	                      "classList": [
	                        "num"
	                      ]
	                    },
	                    {
	                      "type": "text",
	                      "attr": {
	                        "value": "悠空币 + "
	                      },
	                      "classList": [
	                        "money"
	                      ]
	                    },
	                    {
	                      "type": "text",
	                      "attr": {
	                        "value": function () {return this.userData.extcredits2}
	                      },
	                      "classList": [
	                        "num"
	                      ]
	                    },
	                    {
	                      "type": "text",
	                      "attr": {
	                        "value": "阅读币"
	                      },
	                      "classList": [
	                        "money"
	                      ]
	                    }
	                  ]
	                },
	                {
	                  "type": "div",
	                  "attr": {},
	                  "classList": [
	                    "btn-order"
	                  ],
	                  "shown": function () {return this.loginState&&(this.userData.vipMoney+this.userData.extcredits2>=this.readInfo.chapterMoney)},
	                  "events": {
	                    "click": "subscribeChapter"
	                  },
	                  "children": [
	                    {
	                      "type": "text",
	                      "attr": {
	                        "value": function () {return this.dingouText}
	                      },
	                      "classList": [
	                        "order-text"
	                      ]
	                    }
	                  ]
	                },
	                {
	                  "type": "div",
	                  "attr": {},
	                  "classList": [
	                    "btn-order"
	                  ],
	                  "shown": function () {return this.loginState&&(this.userData.vipMoney+this.userData.extcredits2<this.readInfo.chapterMoney)},
	                  "events": {
	                    "click": "linkPay"
	                  },
	                  "children": [
	                    {
	                      "type": "text",
	                      "attr": {
	                        "value": "余额不足，前往充值"
	                      },
	                      "classList": [
	                        "order-text"
	                      ]
	                    }
	                  ]
	                },
	                {
	                  "type": "div",
	                  "attr": {},
	                  "classList": [
	                    "btn-order"
	                  ],
	                  "shown": function () {return !this.loginState},
	                  "events": {
	                    "click": "linkLogin"
	                  },
	                  "children": [
	                    {
	                      "type": "text",
	                      "attr": {
	                        "value": "您尚未登录，点此登录"
	                      },
	                      "classList": [
	                        "order-text"
	                      ]
	                    }
	                  ]
	                },
	                {
	                  "type": "div",
	                  "attr": {},
	                  "classList": [
	                    "hint"
	                  ],
	                  "children": [
	                    {
	                      "type": "text",
	                      "attr": {
	                        "value": " 感谢您！支持作者，支持正版阅读!"
	                      },
	                      "classList": [
	                        "hint-text"
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
	                "read-order"
	              ],
	              "shown": function () {return this.readSpecial.isSpecial&&!this.readSpecial.hasBuyChapter},
	              "children": [
	                {
	                  "type": "div",
	                  "attr": {},
	                  "classList": [
	                    "title"
	                  ],
	                  "children": [
	                    {
	                      "type": "div",
	                      "attr": {},
	                      "classList": [
	                        "line"
	                      ]
	                    },
	                    {
	                      "type": "text",
	                      "attr": {
	                        "value": "全本订购超优惠"
	                      },
	                      "classList": [
	                        "title-text"
	                      ]
	                    },
	                    {
	                      "type": "div",
	                      "attr": {},
	                      "classList": [
	                        "line"
	                      ]
	                    }
	                  ]
	                },
	                {
	                  "type": "div",
	                  "attr": {},
	                  "classList": [
	                    "price-detail",
	                    "origin-price"
	                  ],
	                  "children": [
	                    {
	                      "type": "text",
	                      "attr": {
	                        "value": function () {return '全本原价：' + (this.readSpecial.price) + '悠空币'}
	                      }
	                    }
	                  ]
	                },
	                {
	                  "type": "div",
	                  "attr": {},
	                  "classList": [
	                    "price-detail"
	                  ],
	                  "children": [
	                    {
	                      "type": "text",
	                      "attr": {
	                        "value": "全本特价:"
	                      },
	                      "classList": [
	                        "price"
	                      ]
	                    },
	                    {
	                      "type": "text",
	                      "attr": {
	                        "value": function () {return this.readSpecial.specialPrice}
	                      },
	                      "classList": [
	                        "num"
	                      ]
	                    },
	                    {
	                      "type": "text",
	                      "attr": {
	                        "value": "悠空币"
	                      },
	                      "classList": [
	                        "money"
	                      ]
	                    }
	                  ]
	                },
	                {
	                  "type": "div",
	                  "attr": {},
	                  "classList": [
	                    "balance-detail"
	                  ],
	                  "children": [
	                    {
	                      "type": "text",
	                      "attr": {
	                        "value": "余额:"
	                      },
	                      "classList": [
	                        "balance"
	                      ]
	                    },
	                    {
	                      "type": "text",
	                      "attr": {
	                        "value": function () {return this.userData.vipMoney}
	                      },
	                      "classList": [
	                        "num"
	                      ]
	                    },
	                    {
	                      "type": "text",
	                      "attr": {
	                        "value": "悠空币 + "
	                      },
	                      "classList": [
	                        "money"
	                      ]
	                    },
	                    {
	                      "type": "text",
	                      "attr": {
	                        "value": function () {return this.userData.extcredits2}
	                      },
	                      "classList": [
	                        "num"
	                      ]
	                    },
	                    {
	                      "type": "text",
	                      "attr": {
	                        "value": "阅读币"
	                      },
	                      "classList": [
	                        "money"
	                      ]
	                    }
	                  ]
	                },
	                {
	                  "type": "div",
	                  "attr": {},
	                  "classList": [
	                    "btn-order"
	                  ],
	                  "shown": function () {return this.loginState&&(this.userData.vipMoney>=this.readSpecial.specialPrice)},
	                  "events": {
	                    "click": "subscribeSpecial"
	                  },
	                  "children": [
	                    {
	                      "type": "text",
	                      "attr": {
	                        "value": function () {return this.dingouText}
	                      },
	                      "classList": [
	                        "order-text"
	                      ]
	                    }
	                  ]
	                },
	                {
	                  "type": "div",
	                  "attr": {},
	                  "classList": [
	                    "btn-order"
	                  ],
	                  "shown": function () {return this.loginState&&(this.userData.vipMoney<this.readSpecial.specialPrice)},
	                  "events": {
	                    "click": "linkPay"
	                  },
	                  "children": [
	                    {
	                      "type": "text",
	                      "attr": {
	                        "value": "余额不足，前往充值"
	                      },
	                      "classList": [
	                        "order-text"
	                      ]
	                    }
	                  ]
	                },
	                {
	                  "type": "div",
	                  "attr": {},
	                  "classList": [
	                    "btn-order"
	                  ],
	                  "shown": function () {return !this.loginState},
	                  "events": {
	                    "click": "linkLogin"
	                  },
	                  "children": [
	                    {
	                      "type": "text",
	                      "attr": {
	                        "value": "您尚未登录，点此登录"
	                      },
	                      "classList": [
	                        "order-text"
	                      ]
	                    }
	                  ]
	                },
	                {
	                  "type": "div",
	                  "attr": {},
	                  "classList": [
	                    "hint"
	                  ],
	                  "children": [
	                    {
	                      "type": "text",
	                      "attr": {
	                        "value": " 感谢您！支持作者，支持正版阅读!"
	                      },
	                      "classList": [
	                        "hint-text"
	                      ]
	                    }
	                  ]
	                }
	              ]
	            }
	          ]
	        }
	      ]
	    }
	  ]
	}

/***/ }),

/***/ 109:
/***/ (function(module, exports) {

	module.exports = {
	  ".views-load": {
	    "width": "750px",
	    "height": "80px",
	    "lineHeight": "80px",
	    "justifyContent": "center"
	  },
	  "progress": {
	    "color": "#f76c5b"
	  },
	  ".read": {
	    "flexDirection": "column"
	  },
	  ".views-read": {
	    "flexDirection": "column",
	    "paddingTop": "16px",
	    "paddingRight": "32px",
	    "paddingBottom": "16px",
	    "paddingLeft": "32px"
	  },
	  ".sun": {
	    "backgroundImage": "../../Common/imgs/readBg-sun.png",
	    "backgroundSize": "750px 142px"
	  },
	  ".night": {
	    "backgroundImage": "../../Common/imgs/readBg-night.png",
	    "backgroundSize": "750px 142px"
	  },
	  ".night text": {
	    "color": "#ffffff",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "night"
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
	  },
	  ".views-read .read-header": {
	    "flexDirection": "column",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "views-read"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "read-header"
	        }
	      ]
	    }
	  },
	  ".views-read .bar": {
	    "alignItems": "center",
	    "height": "80px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "views-read"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "bar"
	        }
	      ]
	    }
	  },
	  ".views-read .tools": {
	    "justifyContent": "flex-end",
	    "alignItems": "center",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "views-read"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "tools"
	        }
	      ]
	    }
	  },
	  ".views-read .tools image": {
	    "paddingTop": "10px",
	    "paddingRight": "10px",
	    "paddingBottom": "10px",
	    "paddingLeft": "10px",
	    "width": "52px",
	    "height": "52px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "views-read"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "tools"
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
	  ".views-read .tools text": {
	    "paddingTop": "10px",
	    "paddingRight": "10px",
	    "paddingBottom": "10px",
	    "paddingLeft": "10px",
	    "fontSize": "35px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "views-read"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "tools"
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
	  },
	  ".views-read .title": {
	    "lines": 1,
	    "textOverflow": "ellipsis",
	    "fontSize": "38px",
	    "fontWeight": "bold",
	    "color": "#b77373",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "views-read"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "title"
	        }
	      ]
	    }
	  },
	  ".views-read .read-content .stage": {
	    "marginTop": "32px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "views-read"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "read-content"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "stage"
	        }
	      ]
	    }
	  },
	  ".views-read .read-content text": {
	    "lineHeight": "58px",
	    "fontSize": "32px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "views-read"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "read-content"
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
	  },
	  ".views-read .read-control": {
	    "marginTop": "32px",
	    "marginBottom": "32px",
	    "alignItems": "center",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "views-read"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "read-control"
	        }
	      ]
	    }
	  },
	  ".views-read .read-control .btn": {
	    "width": "210px",
	    "height": "64px",
	    "backgroundColor": "#ffffff",
	    "borderRadius": "32px",
	    "borderTopColor": "#dbd9db",
	    "borderRightColor": "#dbd9db",
	    "borderBottomColor": "#dbd9db",
	    "borderLeftColor": "#dbd9db",
	    "borderTopWidth": "1px",
	    "borderRightWidth": "1px",
	    "borderBottomWidth": "1px",
	    "borderLeftWidth": "1px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "views-read"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "read-control"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "btn"
	        }
	      ]
	    }
	  },
	  ".views-read .read-control .menu image": {
	    "width": "64px",
	    "height": "64px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "views-read"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "read-control"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "menu"
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
	  ".views-read .read-control div": {
	    "flex": 1,
	    "justifyContent": "center",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "views-read"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "read-control"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "t",
	          "n": "div"
	        }
	      ]
	    }
	  },
	  ".read-order": {
	    "flexDirection": "column",
	    "justifyContent": "center",
	    "flex": 1,
	    "paddingTop": "30px",
	    "paddingRight": "30px",
	    "paddingBottom": "30px",
	    "paddingLeft": "30px"
	  },
	  ".read-order .title": {
	    "width": "100%",
	    "justifyContent": "space-between",
	    "alignItems": "center",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "read-order"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "title"
	        }
	      ]
	    }
	  },
	  ".read-order .line": {
	    "width": "28%",
	    "borderTopWidth": "2px",
	    "borderTopColor": "#333333",
	    "borderRightColor": "#333333",
	    "borderBottomColor": "#333333",
	    "borderLeftColor": "#333333",
	    "marginTop": "20px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "read-order"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "line"
	        }
	      ]
	    }
	  },
	  ".read-order .title-text": {
	    "fontSize": "30px",
	    "color": "#333333",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "read-order"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "title-text"
	        }
	      ]
	    }
	  },
	  ".read-order .price-detail": {
	    "marginTop": "40px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "read-order"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "price-detail"
	        }
	      ]
	    }
	  },
	  ".read-order .balance-detail": {
	    "marginTop": "40px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "read-order"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "balance-detail"
	        }
	      ]
	    }
	  },
	  ".read-order .price": {
	    "fontSize": "24px",
	    "color": "#333333",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "read-order"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "price"
	        }
	      ]
	    }
	  },
	  ".read-order .balance": {
	    "fontSize": "24px",
	    "color": "#333333",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "read-order"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "balance"
	        }
	      ]
	    }
	  },
	  ".read-order .money": {
	    "fontSize": "24px",
	    "color": "#333333",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "read-order"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "money"
	        }
	      ]
	    }
	  },
	  ".origin-price text": {
	    "color": "#999999",
	    "fontSize": "24px",
	    "textDecoration": "line-through",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "origin-price"
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
	  },
	  ".read-order .num": {
	    "color": "#f76c5b",
	    "fontSize": "24px",
	    "marginTop": "0px",
	    "marginRight": "5px",
	    "marginBottom": "0px",
	    "marginLeft": "5px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "read-order"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "num"
	        }
	      ]
	    }
	  },
	  ".read-order .btn-order": {
	    "width": "100%",
	    "height": "90px",
	    "justifyContent": "center",
	    "alignItems": "center",
	    "backgroundColor": "#f76c5b",
	    "borderRadius": "10px",
	    "marginTop": "40px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "read-order"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "btn-order"
	        }
	      ]
	    }
	  },
	  ".read-order .order-text": {
	    "fontSize": "30px",
	    "color": "#ffffff",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "read-order"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "order-text"
	        }
	      ]
	    }
	  },
	  ".read-order .hint": {
	    "marginTop": "40px",
	    "justifyContent": "center",
	    "alignItems": "center",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "read-order"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "hint"
	        }
	      ]
	    }
	  },
	  ".read-order .hint-text": {
	    "fontSize": "24px",
	    "color": "#999999",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "read-order"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "hint-text"
	        }
	      ]
	    }
	  },
	  ".bottom-control": {
	    "backgroundColor": "rgba(0,0,0,0.9)"
	  },
	  ".bottom-control text": {
	    "color": "#ffffff",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "bottom-control"
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

/***/ 110:
/***/ (function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, $app_require$){'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _bookData = __webpack_require__(37);
	
	var _bookData2 = _interopRequireDefault(_bookData);
	
	var _readingConfig = __webpack_require__(38);
	
	var _readingConfig2 = _interopRequireDefault(_readingConfig);
	
	var _authentication = __webpack_require__(11);
	
	var _authentication2 = _interopRequireDefault(_authentication);
	
	var _bookcaseService = __webpack_require__(12);
	
	var _bookcaseService2 = _interopRequireDefault(_bookcaseService);
	
	var _system = $app_require$('@app-module/system.prompt');
	
	var _system2 = _interopRequireDefault(_system);
	
	var _system3 = $app_require$('@app-module/system.router');
	
	var _system4 = _interopRequireDefault(_system3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    data: {
	        readInfo: {},
	        mode: "sun",
	        fontSize: 32,
	        cid: '529931',
	        bid: '2908',
	        showMenuVisible: false,
	        userData: {
	            vipMoney: 0,
	            Extcredits2: 0
	        },
	        loginState: false,
	        dingouText: '订购',
	        readSpecial: {},
	        option: {
	            show: true,
	            background: 'rgb(255,255,255)',
	            text: '拼命加载中...'
	        },
	        popupData: {
	            show: true,
	            position: 'bottom'
	        }
	    },
	    onInit: function onInit() {
	        var _this = this;
	
	        Promise.all([_authentication2.default.getUserData(), _authentication2.default.getLoginState(), this.get(), this.init()]).then(function (res) {
	            if (res[0]) {
	                _this.userData = JSON.parse(res[0]).data;
	                _this.user = JSON.parse(res[0]);
	            }
	            _this.loginState = res[1];
	            _bookcaseService2.default.addLocalBookpage({ bid: _this.bid, cid: _this.cid });
	            if (res[1]) {
	                _this.addReadRecords();
	            }
	            _this.option.show = false;
	        });
	    },
	    subscribeChapter: function subscribeChapter() {
	        var _this2 = this;
	
	        if (this.dingouText == '订购中...') {
	            return;
	        }
	        this.dingouText = '订购中...';
	        _bookData2.default.subscribeChapter({ cids: this.cid, bid: this.bid }).then(function (res) {
	            var payMoney = _this2.readInfo.chapterMoney;
	            var vipMoney = _this2.userData.vipMoney;
	            var extcredits2 = _this2.userData.extcredits2;
	            if (vipMoney >= payMoney) {
	                vipMoney = vipMoney - payMoney;
	            } else if (extcredits2 >= payMoney) {
	                extcredits2 = extcredits2 - payMoney;
	            }
	            _this2.user.data.vipMoney = vipMoney;
	            _this2.user.data.extcredits2 = extcredits2;
	            _authentication2.default.setUserData(_this2.user).then(function (res) {
	                _this2.get();
	            });
	        });
	    },
	    subscribeSpecial: function subscribeSpecial() {
	        var _this3 = this;
	
	        if (this.dingouText == '订购中...') {
	            return;
	        }
	        this.dingouText = '订购中...';
	        _bookData2.default.subscribeSpecial({ bid: this.bid }).then(function (res) {
	            var payMoney = _this3.readInfo.chapterMoney;
	            var vipMoney = _this3.userData.vipMoney;
	            var extcredits2 = _this3.userData.extcredits2;
	            if (vipMoney >= payMoney) {
	                vipMoney = vipMoney - payMoney;
	            } else if (extcredits2 >= payMoney) {
	                extcredits2 = extcredits2 - payMoney;
	            }
	            _this3.user.data.vipMoney = vipMoney;
	            _this3.user.data.extcredits2 = extcredits2;
	            _authentication2.default.setUserData(_this3.user).then(function (res) {
	                _this3.get();
	            });
	        });
	    },
	    linkPay: function linkPay() {
	        _system2.default.showDialog({
	            title: '提示',
	            message: '该功能正在建设中，您可以到悠空官网享受所有权益！',
	            buttons: [{
	                text: '确定',
	                color: '#f76c5b'
	            }],
	            success: function success(data) {
	                console.log('handling callback');
	            },
	            cancel: function cancel() {
	                console.log('handling cancel');
	            },
	            fail: function fail(data, code) {
	                console.log('handling fail, code = ' + code);
	            }
	        });
	    },
	    addReadRecords: function addReadRecords() {
	        _bookData2.default.addReadRecords({ cid: this.cid, bid: this.bid });
	    },
	    init: function init() {
	        var _this4 = this;
	
	        _readingConfig2.default.get().then(function (res) {
	            var data = JSON.parse(res) || {};
	            _this4.fontSize = data.fontsize || 32;
	            _this4.mode = data.mode || '';
	        });
	    },
	    fontSizePlus: function fontSizePlus() {
	        var _this5 = this;
	
	        _readingConfig2.default.changeFontSize(2).then(function (res) {
	            _this5.fontSize = res || 32;
	        });
	    },
	    fontSizeMinus: function fontSizeMinus() {
	        var _this6 = this;
	
	        _readingConfig2.default.changeFontSize(-2).then(function (res) {
	            _this6.fontSize = res || 32;
	        });
	    },
	    get: function get() {
	        var _this7 = this;
	
	        _bookData2.default.bookRead({ bid: this.bid, cid: this.cid }).then(function (res) {
	            _this7.readInfo = res.data.chapter[0];
	            _this7.readSpecial = res.data.special;
	        });
	    },
	    toPs: function toPs(text) {
	        text = String(text);
	        return text.split("\r\n");
	    },
	    decodeUnicode: function decodeUnicode(str) {
	        str = str.replace(/\\/g, "%");
	        return unescape(str);
	    },
	    setMode: function setMode(str) {
	        this.mode = str;
	    },
	    linkHome: function linkHome() {
	        _system4.default.replace({
	            uri: 'Index'
	        });
	    },
	    linkLogin: function linkLogin() {
	        _readingConfig2.default.setRoute({
	            uri: _system4.default.getState().name,
	            params: {
	                bid: this.bid,
	                cid: this.cid
	            }
	        }).then(function (res) {
	            _system4.default.replace({
	                uri: 'Views/Login'
	            });
	        });
	    },
	    returnPage: function returnPage() {
	        if (this.readInfo.PrevPageString == '首页') {
	            _system4.default.replace({
	                uri: 'Detail',
	                params: {
	                    bid: this.bid
	                }
	            });
	            return;
	        }
	        _system4.default.replace({
	            uri: 'Views/Read',
	            params: {
	                bid: this.bid,
	                cid: this.readInfo.PrevID
	            }
	        });
	    },
	    nextPage: function nextPage() {
	        if (this.readInfo.NextPageString == '末页') {
	            _system4.default.replace({
	                uri: 'Detail',
	                params: {
	                    bid: this.bid
	                }
	            });
	            return;
	        }
	        _system4.default.replace({
	            uri: 'Views/Read',
	            params: {
	                bid: this.bid,
	                cid: this.readInfo.NextID
	            }
	        });
	    },
	    addBookCase: function addBookCase() {
	        var _this8 = this;
	
	        _bookData2.default.addBookCase({ bid: this.bid }).then(function (res) {
	            _this8.isBookCase = true;
	            var obj = {
	                bid: _this8.bid,
	                isBookCase: true
	            };
	            _bookcaseService2.default.addLocalBookCase(obj).then(function (res1) {
	                _system2.default.showToast({
	                    message: "收藏成功"
	                });
	            });
	        });
	    },
	    showMenu: function showMenu() {
	        var that = this;
	        _system2.default.showContextMenu({
	            itemList: ['加入书架', '查看目录', '书籍详情', '阅读历史', '返回首页', '取消'],
	            itemColor: '#333333',
	            success: function success(data) {
	                switch (data.index) {
	                    case 0:
	                        that.addBookCase();
	                        break;
	                    case 1:
	                        _system4.default.push({
	                            uri: 'Views/Catalog',
	                            params: {
	                                bid: that.bid
	                            }
	                        });
	                        break;
	                    case 2:
	                        _system4.default.push({
	                            uri: 'Detail',
	                            params: {
	                                bid: that.bid
	                            }
	                        });
	                        break;
	                    case 3:
	                        if (!that.loginState) {
	                            _readingConfig2.default.setRoute({
	                                uri: _system4.default.getState().name,
	                                params: {
	                                    bid: that.bid,
	                                    cid: that.cid
	                                }
	                            }).then(function (res) {
	                                _system4.default.replace({
	                                    uri: 'Views/Login'
	                                });
	                            });
	                        } else {
	                            _system4.default.push({
	                                uri: 'Views/ReadCord'
	                            });
	                        }
	                        break;
	                    case 4:
	                        _system4.default.push({
	                            uri: 'Index'
	                        });
	                        break;
	                    case 5:
	                        _system2.default.showToast({
	                            message: '取消'
	                        });
	                }
	            },
	            cancel: function cancel(data) {
	                console.log('handling cancel');
	            },
	            fail: function fail(data, code) {
	                console.log('handling fail, code = ' + code);
	            }
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

/***/ }),

/***/ 143:
/***/ (function(module, exports, __webpack_require__) {

	var $app_template$ = __webpack_require__(15)
	var $app_style$ = __webpack_require__(16)
	var $app_script$ = __webpack_require__(17)
	
	$app_define$('@app-component/qui-overlay', [], function($app_require$, $app_exports$, $app_module$){
	     $app_script$($app_module$, $app_exports$, $app_require$)
	     if ($app_exports$.__esModule && $app_exports$.default) {
	            $app_module$.exports = $app_exports$.default
	        }
	     $app_module$.exports.template = $app_template$
	     $app_module$.exports.style = $app_style$
	})


/***/ }),

/***/ 144:
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(143)
	var $app_template$ = __webpack_require__(145)
	var $app_style$ = __webpack_require__(146)
	var $app_script$ = __webpack_require__(147)
	
	$app_define$('@app-component/popup', [], function($app_require$, $app_exports$, $app_module$){
	     $app_script$($app_module$, $app_exports$, $app_require$)
	     if ($app_exports$.__esModule && $app_exports$.default) {
	            $app_module$.exports = $app_exports$.default
	        }
	     $app_module$.exports.template = $app_template$
	     $app_module$.exports.style = $app_style$
	})


/***/ }),

/***/ 145:
/***/ (function(module, exports) {

	module.exports = {
	  "type": "div",
	  "attr": {},
	  "children": [
	    {
	      "type": "qui-overlay",
	      "attr": {
	        "option": function () {return this.overlay}
	      },
	      "events": {
	        "qui-overlay-click": "overlayClick"
	      },
	      "children": [
	        {
	          "type": "div",
	          "attr": {
	            "show": function () {return this.visible}
	          },
	          "classList": function () {return ['qui-popup-box', 'box-' + (this.option.position)]},
	          "children": [
	            {
	              "type": "div",
	              "attr": {},
	              "classList": function () {return ['qui-popup-placeholder', 'placeholder-' + (this.option.position), this.animationClass]},
	              "style": {
	                "animationDuration": function () {return (this.animationDuration) + 'ms'}
	              },
	              "shown": function () {return this.option.position==='right'||this.option.position==='bottom'}
	            },
	            {
	              "type": "div",
	              "attr": {},
	              "classList": [
	                "qui-popup-content"
	              ],
	              "style": function () {return this.contentStyle},
	              "children": [
	                {
	                  "type": "slot",
	                  "attr": {}
	                }
	              ]
	            },
	            {
	              "type": "div",
	              "attr": {},
	              "classList": function () {return ['qui-popup-placeholder', 'placeholder-' + (this.option.position), this.animationClass]},
	              "style": {
	                "animationDuration": function () {return (this.animationDuration) + 'ms'}
	              },
	              "shown": function () {return this.option.position==='left'||this.option.position==='top'}
	            }
	          ]
	        }
	      ]
	    }
	  ]
	}

/***/ }),

/***/ 146:
/***/ (function(module, exports) {

	module.exports = {
	  ".qui-popup-box": {
	    "position": "fixed"
	  },
	  ".box-top": {
	    "top": "0px",
	    "left": "0px",
	    "right": "0px",
	    "flexDirection": "column",
	    "justifyContent": "flex-end"
	  },
	  ".box-bottom": {
	    "bottom": "0px",
	    "left": "0px",
	    "right": "0px",
	    "flexDirection": "column"
	  },
	  ".box-left": {
	    "top": "0px",
	    "bottom": "0px",
	    "left": "0px",
	    "flexDirection": "row",
	    "justifyContent": "flex-end"
	  },
	  ".box-right": {
	    "top": "0px",
	    "bottom": "0px",
	    "right": "0px",
	    "flexDirection": "row"
	  },
	  ".qui-popup-placeholder": {
	    "flexShrink": 0,
	    "opacity": 0,
	    "animationFillMode": "forwards"
	  },
	  ".placeholder-top": {
	    "height": "2400px"
	  },
	  ".placeholder-bottom": {
	    "height": "2400px"
	  },
	  ".placeholder-left": {
	    "width": "1080px"
	  },
	  ".placeholder-right": {
	    "width": "1080px"
	  },
	  ".qui-popup-content": {
	    "flexShrink": 0,
	    "flexDirection": "column"
	  },
	  ".bottompopupenter": {
	    "animationName": "bottompopupenter"
	  },
	  ".bottompopupleave": {
	    "animationName": "bottompopupleave"
	  },
	  "@KEYFRAMES": {
	    "bottompopupenter": [
	      {
	        "height": "2400px",
	        "time": 0
	      },
	      {
	        "height": "0px",
	        "time": 100
	      }
	    ],
	    "bottompopupleave": [
	      {
	        "height": "0px",
	        "time": 0
	      },
	      {
	        "height": "2400px",
	        "time": 100
	      }
	    ],
	    "toppopupenter": [
	      {
	        "height": "2400px",
	        "time": 0
	      },
	      {
	        "height": "0px",
	        "time": 100
	      }
	    ],
	    "toppopupleave": [
	      {
	        "height": "0px",
	        "time": 0
	      },
	      {
	        "height": "2400px",
	        "time": 100
	      }
	    ],
	    "rightpopupenter": [
	      {
	        "width": "1080px",
	        "time": 0
	      },
	      {
	        "width": "0px",
	        "time": 100
	      }
	    ],
	    "rightpopupleave": [
	      {
	        "width": "0px",
	        "time": 0
	      },
	      {
	        "width": "1080px",
	        "time": 100
	      }
	    ],
	    "leftpopupenter": [
	      {
	        "width": "1080px",
	        "time": 0
	      },
	      {
	        "width": "0px",
	        "time": 100
	      }
	    ],
	    "leftpopupleave": [
	      {
	        "width": "0px",
	        "time": 0
	      },
	      {
	        "width": "1080px",
	        "time": 100
	      }
	    ]
	  },
	  ".toppopupenter": {
	    "animationName": "toppopupenter"
	  },
	  ".toppopupleave": {
	    "animationName": "toppopupleave"
	  },
	  ".rightpopupenter": {
	    "animationName": "rightpopupenter"
	  },
	  ".rightpopupleave": {
	    "animationName": "rightpopupleave"
	  },
	  ".leftpopupenter": {
	    "animationName": "leftpopupenter"
	  },
	  ".leftpopupleave": {
	    "animationName": "leftpopupleave"
	  }
	}

/***/ }),

/***/ 147:
/***/ (function(module, exports) {

	module.exports = function(module, exports, $app_require$){'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _system = $app_require$('@app-module/system.device');
	
	var _system2 = _interopRequireDefault(_system);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    props: ['option'],
	    data: function data() {
	        return {
	            visible: this.option.show,
	            screenWidth: 1080,
	            contentStyle: {},
	            animationClass: '',
	            animationDuration: 800,
	            overlay: {
	                show: false,
	                autoClose: false,
	                background: ''
	            },
	            defaultData: {
	                show: false,
	                autoClose: true,
	                position: 'bottom',
	                background: 'rgba(0,0,0,0)'
	            }
	        };
	    },
	    onInit: function onInit() {
	        this.setDefault();
	        this.setOverlayBg();
	        this.setContentStyle();
	        this.toggleShow(this.option.show);
	    },
	    setDefault: function setDefault() {
	        var _this = this;
	
	        Object.keys(this.defaultData).forEach(function (key) {
	            if (!_this.option.hasOwnProperty(key)) {
	                _this.$set('option.' + key, _this.defaultData[key]);
	            }
	            if (key === 'show') {
	                _this.$watch('option.' + key, 'toggleShow');
	            } else if (key === 'background') {
	                _this.$watch('option.' + key, 'setOverlayBg');
	            }
	        });
	    },
	    toggleShow: function toggleShow(show) {
	        var _this2 = this;
	
	        if (this.timeoutId) clearTimeout(this.timeoutId);
	
	        this.option.show = show;
	        this.overlay.show = show;
	        if (show) {
	            this.visible = true;
	            this.animationClass = this.option.position + 'popupenter';
	        } else {
	            this.animationClass = this.option.position + 'popupleave';
	            this.timeoutId = setTimeout(function () {
	                _this2.visible = false;
	            }, this.animationDuration - 200);
	        }
	    },
	    setContentStyle: function setContentStyle() {
	        if (this.option.position === 'bottom' || this.option.position === 'top') {
	            this.contentStyle = {
	                width: this.screenWidth + 'px',
	                height: 'auto'
	            };
	        } else {
	            this.contentStyle = {
	                width: 'auto'
	            };
	        }
	    },
	    setOverlayBg: function setOverlayBg() {
	        this.overlay.background = this.option.background;
	    },
	    overlayClick: function overlayClick() {
	        if (this.option.autoClose) {
	            this.option.show = false;
	        }
	        this.$emit('quiOverlayClick');
	    }
	};}

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