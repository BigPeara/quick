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
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(13)
	__webpack_require__(39)
	__webpack_require__(43)
	__webpack_require__(47)
	__webpack_require__(51)
	__webpack_require__(55)
	__webpack_require__(21)
	__webpack_require__(59)
	var $app_template$ = __webpack_require__(63)
	var $app_style$ = __webpack_require__(64)
	var $app_script$ = __webpack_require__(65)
	
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
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */
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
/* 10 */
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
/* 11 */
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
/* 12 */
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
/* 13 */
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
/* 14 */
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
/* 15 */
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
/* 16 */
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
/* 17 */
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
/* 18 */
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
/* 19 */
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
/* 20 */
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
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

	var $app_template$ = __webpack_require__(22)
	var $app_style$ = __webpack_require__(23)
	var $app_script$ = __webpack_require__(24)
	
	$app_define$('@app-component/book-list', [], function($app_require$, $app_exports$, $app_module$){
	     $app_script$($app_module$, $app_exports$, $app_require$)
	     if ($app_exports$.__esModule && $app_exports$.default) {
	            $app_module$.exports = $app_exports$.default
	        }
	     $app_module$.exports.template = $app_template$
	     $app_module$.exports.style = $app_style$
	})


/***/ }),
/* 22 */
/***/ (function(module, exports) {

	module.exports = {
	  "type": "div",
	  "attr": {},
	  "classList": [
	    "book-container"
	  ],
	  "children": [
	    {
	      "type": "div",
	      "attr": {},
	      "classList": [
	        "book-Con"
	      ],
	      "children": [
	        {
	          "type": "div",
	          "attr": {},
	          "repeat": {
	            "exp": function () {return this.bookList},
	            "value": "item"
	          },
	          "classList": [
	            "book-item"
	          ],
	          "events": {
	            "click": function (evt) {this.route(this.item,evt)}
	          },
	          "children": [
	            {
	              "type": "image",
	              "attr": {
	                "src": function () {return this.config.COVER_BASE_URL+this.item.cover}
	              },
	              "classList": [
	                "book-cover"
	              ]
	            },
	            {
	              "type": "text",
	              "attr": {
	                "value": function () {return this.item.booktitle}
	              },
	              "classList": [
	                "book-name"
	              ]
	            }
	          ]
	        }
	      ]
	    }
	  ]
	}

/***/ }),
/* 23 */
/***/ (function(module, exports) {

	module.exports = {
	  ".book-container .book-Con": {
	    "width": "100%",
	    "display": "flex",
	    "justifyContent": "space-between",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "book-container"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "book-Con"
	        }
	      ]
	    }
	  },
	  ".book-container .book-Con .book-item": {
	    "width": "28%",
	    "display": "flex",
	    "flexDirection": "column",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "book-container"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "book-Con"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "book-item"
	        }
	      ]
	    }
	  },
	  ".book-container .book-Con .book-cover": {
	    "height": "258px",
	    "display": "flex",
	    "width": "100%",
	    "borderRadius": "10px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "book-container"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "book-Con"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "book-cover"
	        }
	      ]
	    }
	  },
	  ".book-container .book-name": {
	    "paddingTop": "15px",
	    "fontSize": "32px",
	    "color": "#171717",
	    "lines": 1,
	    "textOverflow": "ellipsis",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "book-container"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "book-name"
	        }
	      ]
	    }
	  }
	}

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, $app_require$){'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _system = $app_require$('@app-module/system.router');
	
	var _system2 = _interopRequireDefault(_system);
	
	var _urlConfig = __webpack_require__(25);
	
	var _urlConfig2 = _interopRequireDefault(_urlConfig);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    props: ["bookList"],
	    data: {
	        config: {}
	    },
	    onInit: function onInit() {
	        this.config = _urlConfig2.default;
	    },
	    route: function route(item) {
	        _system2.default.push({
	            uri: 'Detail',
	            params: {
	                bid: item.id
	            }
	        });
	    }
	};}

/***/ }),
/* 25 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = {
	    //悠空
	    REQUEST_BASE_URL: 'http://client.h5sdk.yokong.com/',
	    COVER_BASE_URL: 'http://res.yokong.com/',
	    AVATAR_BASE_URL: 'http://www.yokong.com/',
	    SWIPE_BASE_URL: 'http://res.yokong.com/'
	};

/***/ }),
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */
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
/* 38 */
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
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

	var $app_template$ = __webpack_require__(40)
	var $app_style$ = __webpack_require__(41)
	var $app_script$ = __webpack_require__(42)
	
	$app_define$('@app-component/bookdetail', [], function($app_require$, $app_exports$, $app_module$){
	     $app_script$($app_module$, $app_exports$, $app_require$)
	     if ($app_exports$.__esModule && $app_exports$.default) {
	            $app_module$.exports = $app_exports$.default
	        }
	     $app_module$.exports.template = $app_template$
	     $app_module$.exports.style = $app_style$
	})


/***/ }),
/* 40 */
/***/ (function(module, exports) {

	module.exports = {
	  "type": "div",
	  "attr": {},
	  "classList": [
	    "detail-book"
	  ],
	  "children": [
	    {
	      "type": "div",
	      "attr": {},
	      "classList": [
	        "book-info"
	      ],
	      "children": [
	        {
	          "type": "div",
	          "attr": {},
	          "classList": [
	            "cover"
	          ],
	          "children": [
	            {
	              "type": "image",
	              "attr": {
	                "src": function () {return this.config.COVER_BASE_URL+this.data.cover}
	              }
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "attr": {},
	          "classList": [
	            "book-info-content"
	          ],
	          "children": [
	            {
	              "type": "div",
	              "attr": {},
	              "classList": [
	                "title"
	              ],
	              "children": [
	                {
	                  "type": "text",
	                  "attr": {
	                    "value": function () {return this.data.booktitle}
	                  }
	                }
	              ]
	            },
	            {
	              "type": "div",
	              "attr": {},
	              "classList": [
	                "author"
	              ],
	              "children": [
	                {
	                  "type": "text",
	                  "attr": {
	                    "value": function () {return this.data.author}
	                  }
	                },
	                {
	                  "type": "text",
	                  "attr": {
	                    "value": "著"
	                  }
	                }
	              ]
	            },
	            {
	              "type": "div",
	              "attr": {},
	              "classList": [
	                "base"
	              ],
	              "children": [
	                {
	                  "type": "text",
	                  "attr": {
	                    "value": function () {return this.data.tclass}
	                  }
	                },
	                {
	                  "type": "div",
	                  "attr": {},
	                  "classList": [
	                    "devide"
	                  ]
	                },
	                {
	                  "type": "text",
	                  "attr": {
	                    "value": function () {return (this.conver(this.data.bookLength)) + '万字'}
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
	        "book-data"
	      ],
	      "children": [
	        {
	          "type": "div",
	          "attr": {},
	          "classList": [
	            "readnum"
	          ],
	          "children": [
	            {
	              "type": "image",
	              "attr": {
	                "src": "../Common/imgs/fire.png"
	              }
	            },
	            {
	              "type": "text",
	              "attr": {
	                "value": function () {return this.conver(this.data.data.hits)}
	              },
	              "classList": [
	                "red"
	              ],
	              "shown": function () {return this.data.data}
	            },
	            {
	              "type": "text",
	              "attr": {
	                "value": function () {return this.data.data.hits<10000?'人气':'万人气'}
	              }
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "attr": {},
	          "classList": [
	            "recommend"
	          ],
	          "children": [
	            {
	              "type": "image",
	              "attr": {
	                "src": "../Common/imgs/zan.png"
	              }
	            },
	            {
	              "type": "text",
	              "attr": {
	                "value": function () {return this.data.data.tickets}
	              },
	              "classList": [
	                "red"
	              ],
	              "shown": function () {return this.data.data}
	            },
	            {
	              "type": "text",
	              "attr": {
	                "value": "推荐"
	              }
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "attr": {},
	          "classList": [
	            "collection"
	          ],
	          "children": [
	            {
	              "type": "image",
	              "attr": {
	                "src": "../Common/imgs/star.png"
	              }
	            },
	            {
	              "type": "text",
	              "attr": {
	                "value": function () {return this.data.data.saveNumber}
	              },
	              "classList": [
	                "red"
	              ],
	              "shown": function () {return this.data.data}
	            },
	            {
	              "type": "text",
	              "attr": {
	                "value": "收藏"
	              }
	            }
	          ]
	        }
	      ]
	    }
	  ]
	}

/***/ }),
/* 41 */
/***/ (function(module, exports) {

	module.exports = {
	  ".detail-book": {
	    "flexDirection": "column"
	  },
	  ".detail-book .cover image": {
	    "width": "154px",
	    "height": "214px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "detail-book"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "cover"
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
	  ".detail-book .book-info-content": {
	    "marginLeft": "25px",
	    "flexDirection": "column",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "detail-book"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "book-info-content"
	        }
	      ]
	    }
	  },
	  ".detail-book .title text": {
	    "lineHeight": "36px",
	    "fontSize": "32px",
	    "fontWeight": "bold",
	    "color": "#333333",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "detail-book"
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
	  ".detail-book .author": {
	    "marginTop": "22px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "detail-book"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "author"
	        }
	      ]
	    }
	  },
	  ".detail-book .author text": {
	    "lineHeight": "36px",
	    "fontSize": "26px",
	    "color": "#3d3d45",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "detail-book"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "author"
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
	  ".detail-book .base": {
	    "alignItems": "center",
	    "marginTop": "17px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "detail-book"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "base"
	        }
	      ]
	    }
	  },
	  ".detail-book .devide": {
	    "marginTop": "0px",
	    "marginRight": "20px",
	    "marginBottom": "0px",
	    "marginLeft": "20px",
	    "width": "1px",
	    "height": "28px",
	    "backgroundColor": "#7c7c8c",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "detail-book"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "devide"
	        }
	      ]
	    }
	  },
	  ".detail-book .base text": {
	    "lineHeight": "36px",
	    "color": "#7c7c8c",
	    "fontSize": "26px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "detail-book"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "base"
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
	  ".detail-book .active": {
	    "marginTop": "13px",
	    "lineHeight": "36px",
	    "color": "#1db7ac",
	    "fontSize": "26px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "detail-book"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "active"
	        }
	      ]
	    }
	  },
	  ".book-data": {
	    "marginTop": "29px"
	  },
	  ".book-data image": {
	    "marginTop": "2px",
	    "marginRight": "12px",
	    "width": "32px",
	    "height": "32px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "book-data"
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
	  ".book-data text": {
	    "fontSize": "26px",
	    "lineHeight": "36px",
	    "color": "#7c7c8c",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "book-data"
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
	  ".book-data .readnum": {
	    "flex": 1,
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "book-data"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "readnum"
	        }
	      ]
	    }
	  },
	  ".book-data .recommend": {
	    "flex": 1,
	    "justifyContent": "center",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "book-data"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "recommend"
	        }
	      ]
	    }
	  },
	  ".book-data .collection": {
	    "flex": 1,
	    "justifyContent": "flex-end",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "book-data"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "collection"
	        }
	      ]
	    }
	  },
	  ".book-data .red": {
	    "color": "#f31313",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "book-data"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "red"
	        }
	      ]
	    }
	  }
	}

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, $app_require$){'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _urlConfig = __webpack_require__(25);
	
	var _urlConfig2 = _interopRequireDefault(_urlConfig);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    props: ['data'],
	    data: {
	        config: {}
	    },
	    onInit: function onInit() {
	        this.config = _urlConfig2.default;
	    },
	    conver: function conver(len) {
	        if (len < 10000) {
	            return len;
	        } else {
	            return (len / 10000).toFixed(2);
	        }
	    }
	};}

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

	var $app_template$ = __webpack_require__(44)
	var $app_style$ = __webpack_require__(45)
	var $app_script$ = __webpack_require__(46)
	
	$app_define$('@app-component/btn', [], function($app_require$, $app_exports$, $app_module$){
	     $app_script$($app_module$, $app_exports$, $app_require$)
	     if ($app_exports$.__esModule && $app_exports$.default) {
	            $app_module$.exports = $app_exports$.default
	        }
	     $app_module$.exports.template = $app_template$
	     $app_module$.exports.style = $app_style$
	})


/***/ }),
/* 44 */
/***/ (function(module, exports) {

	module.exports = {
	  "type": "div",
	  "attr": {},
	  "classList": function () {return ['btn', 'btn-' + (this.type)]},
	  "style": {
	    "width": function () {return this.width}
	  },
	  "children": [
	    {
	      "type": "text",
	      "attr": {
	        "value": function () {return this.text}
	      }
	    }
	  ]
	}

/***/ }),
/* 45 */
/***/ (function(module, exports) {

	module.exports = {
	  ".btn": {
	    "height": "74px",
	    "justifyContent": "center",
	    "alignItems": "center",
	    "borderRadius": "37px"
	  },
	  ".btn-default": {
	    "borderTopWidth": "1px",
	    "borderRightWidth": "1px",
	    "borderBottomWidth": "1px",
	    "borderLeftWidth": "1px",
	    "borderStyle": "solid",
	    "borderTopColor": "#f76c5b",
	    "borderRightColor": "#f76c5b",
	    "borderBottomColor": "#f76c5b",
	    "borderLeftColor": "#f76c5b"
	  },
	  ".btn-default text": {
	    "color": "#f76c5b",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "btn-default"
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
	  ".btn-primary": {
	    "color": "#ffffff",
	    "backgroundColor": "#f76c5b"
	  },
	  ".btn-primary text": {
	    "color": "#ffffff",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "btn-primary"
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
	  ".btn-disabled": {
	    "borderTopWidth": "1px",
	    "borderRightWidth": "1px",
	    "borderBottomWidth": "1px",
	    "borderLeftWidth": "1px",
	    "borderTopColor": "#c9c9c9",
	    "borderRightColor": "#c9c9c9",
	    "borderBottomColor": "#c9c9c9",
	    "borderLeftColor": "#c9c9c9",
	    "backgroundColor": "#ffffff"
	  },
	  ".btn-disabled text": {
	    "color": "#c9c9c9",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "btn-disabled"
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
/* 46 */
/***/ (function(module, exports) {

	module.exports = function(module, exports, $app_require$){'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	        value: true
	});
	exports.default = {
	        props: ['type', 'text', 'width']
	};}

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

	var $app_template$ = __webpack_require__(48)
	var $app_style$ = __webpack_require__(49)
	var $app_script$ = __webpack_require__(50)
	
	$app_define$('@app-component/catalog', [], function($app_require$, $app_exports$, $app_module$){
	     $app_script$($app_module$, $app_exports$, $app_require$)
	     if ($app_exports$.__esModule && $app_exports$.default) {
	            $app_module$.exports = $app_exports$.default
	        }
	     $app_module$.exports.template = $app_template$
	     $app_module$.exports.style = $app_style$
	})


/***/ }),
/* 48 */
/***/ (function(module, exports) {

	module.exports = {
	  "type": "div",
	  "attr": {},
	  "classList": [
	    "book-catalog"
	  ],
	  "events": {
	    "click": "linkRead"
	  },
	  "children": [
	    {
	      "type": "div",
	      "attr": {},
	      "classList": function () {return ['content', '', this.type]},
	      "children": [
	        {
	          "type": "div",
	          "attr": {},
	          "classList": [
	            "title"
	          ],
	          "children": [
	            {
	              "type": "text",
	              "attr": {
	                "value": function () {return this.data.Title}
	              }
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "attr": {},
	          "classList": [
	            "date"
	          ],
	          "children": [
	            {
	              "type": "image",
	              "attr": {
	                "src": "../../Common/imgs/lock.png",
	                "show": function () {return this.lock}
	              }
	            },
	            {
	              "type": "text",
	              "attr": {
	                "value": function () {return this.data.lastUpdate}
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
	        "line"
	      ],
	      "shown": function () {return this.type}
	    }
	  ]
	}

/***/ }),
/* 49 */
/***/ (function(module, exports) {

	module.exports = {
	  ".book-catalog": {
	    "flexDirection": "column"
	  },
	  ".book-catalog .content": {
	    "height": "52px",
	    "alignItems": "center",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "book-catalog"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "content"
	        }
	      ]
	    }
	  },
	  ".book-catalog .special": {
	    "height": "100px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "book-catalog"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "special"
	        }
	      ]
	    }
	  },
	  ".book-catalog .title text": {
	    "lines": 1,
	    "fontSize": "30px",
	    "color": "#333333",
	    "textOverflow": "ellipsis",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "book-catalog"
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
	  ".book-catalog .title": {
	    "flex": 1,
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "book-catalog"
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
	  ".book-catalog .date": {
	    "justifyContent": "flex-end",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "book-catalog"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "date"
	        }
	      ]
	    }
	  },
	  ".book-catalog .date image": {
	    "marginRight": "20px",
	    "width": "28px",
	    "height": "30px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "book-catalog"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "date"
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
	  ".book-catalog .date text": {
	    "fontSize": "26px",
	    "color": "#999999",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "book-catalog"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "date"
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
	  ".book-catalog .line": {
	    "width": "690px",
	    "height": "1px",
	    "backgroundColor": "#d8d8d8",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "book-catalog"
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
	  }
	}

/***/ }),
/* 50 */
/***/ (function(module, exports) {

	module.exports = function(module, exports, $app_require$){'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _system = $app_require$('@app-module/system.router');
	
	var _system2 = _interopRequireDefault(_system);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    props: ['data', 'type', 'bid', 'lock'],
	    linkRead: function linkRead() {
	        _system2.default.push({
	            uri: 'Views/Read',
	            params: {
	                bid: this.bid,
	                cid: this.data.id
	            }
	        });
	    }
	};}

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

	var $app_template$ = __webpack_require__(52)
	var $app_style$ = __webpack_require__(53)
	var $app_script$ = __webpack_require__(54)
	
	$app_define$('@app-component/topic', [], function($app_require$, $app_exports$, $app_module$){
	     $app_script$($app_module$, $app_exports$, $app_require$)
	     if ($app_exports$.__esModule && $app_exports$.default) {
	            $app_module$.exports = $app_exports$.default
	        }
	     $app_module$.exports.template = $app_template$
	     $app_module$.exports.style = $app_style$
	})


/***/ }),
/* 52 */
/***/ (function(module, exports) {

	module.exports = {
	  "type": "div",
	  "attr": {},
	  "classList": [
	    "topic"
	  ],
	  "children": [
	    {
	      "type": "div",
	      "attr": {},
	      "classList": [
	        "avatar"
	      ],
	      "children": [
	        {
	          "type": "image",
	          "attr": {
	            "src": function () {return this.data.Avatar}
	          }
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "attr": {},
	      "classList": [
	        "info"
	      ],
	      "children": [
	        {
	          "type": "div",
	          "attr": {},
	          "classList": [
	            "user"
	          ],
	          "children": [
	            {
	              "type": "div",
	              "attr": {},
	              "classList": [
	                "user-info"
	              ],
	              "children": [
	                {
	                  "type": "div",
	                  "attr": {},
	                  "classList": [
	                    "name"
	                  ],
	                  "children": [
	                    {
	                      "type": "text",
	                      "attr": {
	                        "value": function () {return this.data.username}
	                      }
	                    },
	                    {
	                      "type": "text",
	                      "attr": {
	                        "value": "普"
	                      },
	                      "classList": [
	                        "mark"
	                      ]
	                    }
	                  ]
	                },
	                {
	                  "type": "div",
	                  "attr": {},
	                  "classList": [
	                    "date"
	                  ],
	                  "children": [
	                    {
	                      "type": "text",
	                      "attr": {
	                        "value": function () {return this.data.postTime}
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
	                "btn-apply"
	              ],
	              "events": {
	                "click": "apply"
	              },
	              "children": [
	                {
	                  "type": "image",
	                  "attr": {
	                    "src": "../Common/imgs/comment.png"
	                  }
	                },
	                {
	                  "type": "text",
	                  "attr": {
	                    "value": "回复"
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
	            "content"
	          ],
	          "children": [
	            {
	              "type": "text",
	              "attr": {
	                "value": function () {return this.data.contents}
	              }
	            }
	          ]
	        }
	      ]
	    }
	  ]
	}

/***/ }),
/* 53 */
/***/ (function(module, exports) {

	module.exports = {
	  ".topic": {
	    "flex": 1,
	    "paddingTop": "30px",
	    "paddingRight": "30px",
	    "paddingBottom": "20px",
	    "paddingLeft": "30px",
	    "borderTopColor": "#e4e4e4",
	    "borderRightColor": "#e4e4e4",
	    "borderBottomColor": "#e4e4e4",
	    "borderLeftColor": "#e4e4e4",
	    "borderBottomWidth": "1px"
	  },
	  ".topic .avatar": {
	    "marginRight": "24px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "topic"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "avatar"
	        }
	      ]
	    }
	  },
	  ".topic .avatar image": {
	    "width": "84px",
	    "height": "84px",
	    "borderRadius": "42px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "topic"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "avatar"
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
	  ".topic .info": {
	    "flex": 1,
	    "flexDirection": "column",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "topic"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "info"
	        }
	      ]
	    }
	  },
	  ".topic .user": {
	    "flex": 1,
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "topic"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "user"
	        }
	      ]
	    }
	  },
	  ".topic .user-info": {
	    "flex": 1,
	    "flexDirection": "column",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "topic"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "user-info"
	        }
	      ]
	    }
	  },
	  ".topic .user-info .name": {
	    "alignItems": "center",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "topic"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "user-info"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "name"
	        }
	      ]
	    }
	  },
	  ".topic .user-info .name text": {
	    "lineHeight": "44px",
	    "color": "#6d92a5",
	    "fontSize": "28px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "topic"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "user-info"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "name"
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
	  ".topic .user-info .name .mark": {
	    "marginLeft": "16px",
	    "width": "38px",
	    "height": "38px",
	    "lineHeight": "38px",
	    "color": "#ffffff",
	    "backgroundColor": "#f76c5b",
	    "fontSize": "32px",
	    "borderRadius": "6px",
	    "textAlign": "center",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "topic"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "user-info"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "name"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "mark"
	        }
	      ]
	    }
	  },
	  ".topic .user-info .date text": {
	    "lineHeight": "44px",
	    "fontSize": "24px",
	    "color": "#999999",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "topic"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "user-info"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "date"
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
	  ".topic .btn-apply": {
	    "height": "88px",
	    "alignItems": "center",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "topic"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "btn-apply"
	        }
	      ]
	    }
	  },
	  ".topic .btn-apply text": {
	    "fontSize": "24px",
	    "color": "#999999",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "topic"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "btn-apply"
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
	  ".topic .btn-apply image": {
	    "marginRight": "10px",
	    "width": "26px",
	    "height": "26px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "topic"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "btn-apply"
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
	  ".topic .content": {
	    "marginTop": "10px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "topic"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "content"
	        }
	      ]
	    }
	  },
	  ".topic .content text": {
	    "lineHeight": "44px",
	    "fontSize": "28px",
	    "color": "#3d3d45",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "topic"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "content"
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
	  ".topic .reply-list": {
	    "marginTop": "20px",
	    "paddingTop": "20px",
	    "flexDirection": "column",
	    "borderTopColor": "#e4e4e4",
	    "borderRightColor": "#e4e4e4",
	    "borderBottomColor": "#e4e4e4",
	    "borderLeftColor": "#e4e4e4",
	    "borderTopWidth": "1px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "topic"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "reply-list"
	        }
	      ]
	    }
	  },
	  ".topic .reply-list .li": {
	    "flexWrap": "wrap",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "topic"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "reply-list"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "li"
	        }
	      ]
	    }
	  },
	  ".topic .replayName": {
	    "lineHeight": "44px",
	    "color": "#6D92A5",
	    "fontSize": "28px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "topic"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "replayName"
	        }
	      ]
	    }
	  },
	  ".topic .replayContent": {
	    "lineHeight": "44px",
	    "color": "#3D3D45",
	    "fontSize": "28px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "topic"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "replayContent"
	        }
	      ]
	    }
	  },
	  ".topic .replayDate": {
	    "lineHeight": "44px",
	    "fontSize": "24px",
	    "color": "#999999",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "topic"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "replayDate"
	        }
	      ]
	    }
	  }
	}

/***/ }),
/* 54 */
/***/ (function(module, exports) {

	module.exports = function(module, exports, $app_require$){'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _system = $app_require$('@app-module/system.prompt');
	
	var _system2 = _interopRequireDefault(_system);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    props: ['data'],
	    apply: function apply() {
	        _system2.default.showToast({
	            message: "暂未开通"
	        });
	    }
	};}

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

	var $app_template$ = __webpack_require__(56)
	var $app_style$ = __webpack_require__(57)
	var $app_script$ = __webpack_require__(58)
	
	$app_define$('@app-component/recommendbook', [], function($app_require$, $app_exports$, $app_module$){
	     $app_script$($app_module$, $app_exports$, $app_require$)
	     if ($app_exports$.__esModule && $app_exports$.default) {
	            $app_module$.exports = $app_exports$.default
	        }
	     $app_module$.exports.template = $app_template$
	     $app_module$.exports.style = $app_style$
	})


/***/ }),
/* 56 */
/***/ (function(module, exports) {

	module.exports = {
	  "type": "div",
	  "attr": {},
	  "classList": [
	    "book-container"
	  ],
	  "children": [
	    {
	      "type": "div",
	      "attr": {},
	      "classList": [
	        "book-Con"
	      ],
	      "children": [
	        {
	          "type": "div",
	          "attr": {},
	          "repeat": {
	            "exp": function () {return this.data},
	            "value": "item"
	          },
	          "classList": [
	            "book-item"
	          ],
	          "events": {
	            "click": function (evt) {this.route(this.item,evt)}
	          },
	          "children": [
	            {
	              "type": "image",
	              "attr": {
	                "src": function () {return this.config.COVER_BASE_URL+this.item.cover}
	              },
	              "classList": [
	                "book-cover"
	              ]
	            },
	            {
	              "type": "text",
	              "attr": {
	                "value": function () {return this.item.booktitle}
	              },
	              "classList": [
	                "book-name"
	              ]
	            }
	          ]
	        }
	      ]
	    }
	  ]
	}

/***/ }),
/* 57 */
/***/ (function(module, exports) {

	module.exports = {
	  ".book-container .book-Con": {
	    "width": "100%",
	    "display": "flex",
	    "justifyContent": "space-between",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "book-container"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "book-Con"
	        }
	      ]
	    }
	  },
	  ".book-container .book-Con .book-item": {
	    "width": "28%",
	    "display": "flex",
	    "flexDirection": "column",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "book-container"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "book-Con"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "book-item"
	        }
	      ]
	    }
	  },
	  ".book-container .book-Con .book-cover": {
	    "height": "258px",
	    "display": "flex",
	    "width": "100%",
	    "borderRadius": "10px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "book-container"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "book-Con"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "book-cover"
	        }
	      ]
	    }
	  },
	  ".book-container .book-name": {
	    "paddingTop": "15px",
	    "fontSize": "32px",
	    "color": "#171717",
	    "lines": 1,
	    "textOverflow": "ellipsis",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "book-container"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "book-name"
	        }
	      ]
	    }
	  }
	}

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, $app_require$){'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _system = $app_require$('@app-module/system.router');
	
	var _system2 = _interopRequireDefault(_system);
	
	var _urlConfig = __webpack_require__(25);
	
	var _urlConfig2 = _interopRequireDefault(_urlConfig);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    props: ["data"],
	    data: {
	        config: {}
	    },
	    onInit: function onInit() {
	        this.config = _urlConfig2.default;
	    },
	    route: function route(item) {
	        _system2.default.push({
	            uri: 'Detail',
	            params: {
	                bid: item.id
	            }
	        });
	    }
	};}

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(47)
	var $app_template$ = __webpack_require__(60)
	var $app_style$ = __webpack_require__(61)
	var $app_script$ = __webpack_require__(62)
	
	$app_define$('@app-component/bookintro', [], function($app_require$, $app_exports$, $app_module$){
	     $app_script$($app_module$, $app_exports$, $app_require$)
	     if ($app_exports$.__esModule && $app_exports$.default) {
	            $app_module$.exports = $app_exports$.default
	        }
	     $app_module$.exports.template = $app_template$
	     $app_module$.exports.style = $app_style$
	})


/***/ }),
/* 60 */
/***/ (function(module, exports) {

	module.exports = {
	  "type": "div",
	  "attr": {},
	  "classList": [
	    "book-intro"
	  ],
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
	            "title-text"
	          ],
	          "children": [
	            {
	              "type": "text",
	              "attr": {
	                "value": "作品简介"
	              }
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "attr": {},
	          "classList": [
	            "title-show"
	          ],
	          "events": {
	            "click": "handleShowData"
	          },
	          "children": [
	            {
	              "type": "image",
	              "attr": {
	                "src": "../Common/imgs/down.png",
	                "show": function () {return !this.isComplete}
	              }
	            },
	            {
	              "type": "image",
	              "attr": {
	                "src": "../Common/imgs/up.png",
	                "show": function () {return this.isComplete}
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
	        "intro"
	      ],
	      "events": {
	        "click": "handleShowData"
	      },
	      "children": [
	        {
	          "type": "text",
	          "attr": {
	            "value": function () {return this.showData}
	          }
	        }
	      ]
	    },
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
	            "title-text"
	          ],
	          "children": [
	            {
	              "type": "text",
	              "attr": {
	                "value": "作品目录"
	              }
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "attr": {},
	          "classList": [
	            "title-sort"
	          ],
	          "events": {
	            "click": "sortShowCatalogs"
	          },
	          "children": [
	            {
	              "type": "image",
	              "attr": {
	                "src": "../Common/imgs/sortUp.png",
	                "show": function () {return this.isUP}
	              }
	            },
	            {
	              "type": "image",
	              "attr": {
	                "src": "../Common/imgs/sortDown.png",
	                "show": function () {return !this.isUP}
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
	        "catalog"
	      ],
	      "children": [
	        {
	          "type": "catalog",
	          "attr": {
	            "bid": function () {return this.bid},
	            "data": function () {return this.item}
	          },
	          "repeat": {
	            "exp": function () {return this.converCatalogs(this.catalogs)},
	            "value": "item"
	          }
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "attr": {},
	      "classList": [
	        "book-more"
	      ],
	      "children": [
	        {
	          "type": "a",
	          "attr": {
	            "href": function () {return '/Views/Catalog?bid=' + (this.bid)},
	            "value": "查看更多章节>>"
	          }
	        }
	      ]
	    }
	  ]
	}

/***/ }),
/* 61 */
/***/ (function(module, exports) {

	module.exports = {
	  ".book-intro": {
	    "flexDirection": "column",
	    "flex": 1,
	    "paddingTop": "15px",
	    "paddingRight": "30px",
	    "paddingBottom": "30px",
	    "paddingLeft": "30px",
	    "marginTop": "20px",
	    "backgroundColor": "#ffffff"
	  },
	  ".book-intro .title": {
	    "marginTop": "15px",
	    "alignItems": "center",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "book-intro"
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
	  ".book-intro .title div": {
	    "flex": 1,
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "book-intro"
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
	  ".book-intro .title .title-show": {
	    "justifyContent": "flex-end",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "book-intro"
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
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "title-show"
	        }
	      ]
	    }
	  },
	  ".book-intro .title .title-show image": {
	    "width": "28px",
	    "height": "16px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "book-intro"
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
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "title-show"
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
	  ".book-intro .title .title-sort": {
	    "justifyContent": "flex-end",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "book-intro"
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
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "title-sort"
	        }
	      ]
	    }
	  },
	  ".book-intro .title .title-sort image": {
	    "width": "32px",
	    "height": "32px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "book-intro"
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
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "title-sort"
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
	  ".book-intro .title text": {
	    "lineHeight": "44px",
	    "color": "#0e0e0e",
	    "fontSize": "32px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "book-intro"
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
	  ".book-intro .intro": {
	    "marginTop": "17px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "book-intro"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "intro"
	        }
	      ]
	    }
	  },
	  ".book-detail .book-intro .intro text": {
	    "lineHeight": "44px",
	    "fontSize": "28px",
	    "color": "#3d3d45",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "book-detail"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "book-intro"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "intro"
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
	  ".book-intro .catalog": {
	    "marginTop": "10px",
	    "marginRight": "0px",
	    "marginBottom": "10px",
	    "marginLeft": "0px",
	    "flexDirection": "column",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "book-intro"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "catalog"
	        }
	      ]
	    }
	  },
	  ".book-detail .book-more": {
	    "justifyContent": "center",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "book-detail"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "book-more"
	        }
	      ]
	    }
	  },
	  ".book-detail .book-more a": {
	    "lineHeight": "44px",
	    "color": "#f76c5b",
	    "fontSize": "30px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "book-detail"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "book-more"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "t",
	          "n": "a"
	        }
	      ]
	    }
	  }
	}

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, $app_require$){'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _bookData = __webpack_require__(37);
	
	var _bookData2 = _interopRequireDefault(_bookData);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    props: ['intro', 'bid', 'catalogs'],
	    data: {
	        showData: '',
	        isComplete: false,
	        isUP: true,
	        showCatalogs: []
	    },
	    onInit: function onInit() {
	        this.showData = this.initIntro(this.intro);
	    },
	    converCatalogs: function converCatalogs(arr) {
	        var catalogsCopy = [].concat(arr);
	        return catalogsCopy.splice(0, 3);
	    },
	    initIntro: function initIntro(str) {
	        if (str.length > 36) {
	            return str.substring(0, 52) + '...';
	        }
	        return str;
	    },
	    handleShowData: function handleShowData() {
	        if (this.isComplete) {
	            this.showData = this.initIntro(this.intro);
	        } else {
	            this.showData = this.intro;
	        }
	        this.isComplete = !this.isComplete;
	    },
	    sortShowCatalogs: function sortShowCatalogs() {
	        this.catalogs.reverse();
	        this.isUP = !this.isUP;
	    }
	};}

/***/ }),
/* 63 */
/***/ (function(module, exports) {

	module.exports = {
	  "type": "div",
	  "attr": {},
	  "classList": [
	    "book-detail"
	  ],
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
	        "book-info"
	      ],
	      "children": [
	        {
	          "type": "bookdetail",
	          "attr": {
	            "data": function () {return this.bookInfo.book}
	          },
	          "shown": function () {return this.bookInfo}
	        },
	        {
	          "type": "div",
	          "attr": {},
	          "classList": [
	            "edit"
	          ],
	          "children": [
	            {
	              "type": "btn",
	              "attr": {
	                "type": "default",
	                "text": "收藏本书",
	                "width": "330px"
	              },
	              "events": {
	                "click": "addBookCase"
	              },
	              "shown": function () {return !this.isBookCase}
	            },
	            {
	              "type": "btn",
	              "attr": {
	                "type": "disabled",
	                "text": "移除本书",
	                "width": "330px"
	              },
	              "events": {
	                "click": "removeBookCase"
	              },
	              "shown": function () {return this.isBookCase}
	            },
	            {
	              "type": "btn",
	              "attr": {
	                "type": "primary",
	                "text": function () {return this.startTitle},
	                "width": "330px"
	              },
	              "events": {
	                "click": "startBook"
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
	        "book-colligate"
	      ],
	      "shown": function () {return this.bookInfo&&this.bookInfo.book},
	      "children": [
	        {
	          "type": "bookintro",
	          "attr": {
	            "intro": function () {return this.bookInfo.book.Introduction},
	            "catalogs": function () {return this.catalogs},
	            "bid": function () {return this.bid}
	          }
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "attr": {},
	      "classList": [
	        "book-topic"
	      ],
	      "shown": function () {return this.bookInfo&&this.bookInfo.topic.length>0},
	      "children": [
	        {
	          "type": "topic",
	          "attr": {
	            "data": function () {return this.item}
	          },
	          "repeat": {
	            "exp": function () {return this.bookInfo.topic},
	            "value": "item"
	          }
	        },
	        {
	          "type": "div",
	          "attr": {},
	          "classList": [
	            "book-topic-more"
	          ],
	          "children": [
	            {
	              "type": "btn",
	              "attr": {
	                "type": "default",
	                "text": "更多评论",
	                "width": "690px"
	              },
	              "events": {
	                "click": "linkComments"
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
	        "book-recommend"
	      ],
	      "children": [
	        {
	          "type": "div",
	          "attr": {},
	          "classList": [
	            "titlebar"
	          ],
	          "children": [
	            {
	              "type": "text",
	              "attr": {
	                "value": "相关推荐"
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
	          "shown": function () {return this.bookInfo},
	          "classList": [
	            "recommendBook"
	          ],
	          "children": [
	            {
	              "type": "book-list",
	              "attr": {
	                "bookList": function () {return this.stochastic(this.bookInfo.samebook)}
	              }
	            }
	          ]
	        }
	      ]
	    }
	  ]
	}

/***/ }),
/* 64 */
/***/ (function(module, exports) {

	module.exports = {
	  ".book-detail": {
	    "flexDirection": "column"
	  },
	  ".book-detail .book-info": {
	    "paddingTop": "30px",
	    "paddingRight": "30px",
	    "paddingBottom": "40px",
	    "paddingLeft": "30px",
	    "width": "750px",
	    "backgroundColor": "#ffffff",
	    "flexDirection": "column",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "book-detail"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "book-info"
	        }
	      ]
	    }
	  },
	  ".book-detail .book-info .edit": {
	    "marginTop": "40px",
	    "justifyContent": "space-between",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "book-detail"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "book-info"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "edit"
	        }
	      ]
	    }
	  },
	  ".book-detail .book-topic": {
	    "marginTop": "20px",
	    "flexDirection": "column",
	    "backgroundColor": "#ffffff",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "book-detail"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "book-topic"
	        }
	      ]
	    }
	  },
	  ".book-detail .book-topic-more": {
	    "justifyContent": "center",
	    "marginTop": "30px",
	    "marginBottom": "30px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "book-detail"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "book-topic-more"
	        }
	      ]
	    }
	  },
	  ".book-detail .book-recommend": {
	    "paddingTop": "0px",
	    "paddingRight": "30px",
	    "paddingBottom": "25px",
	    "paddingLeft": "30px",
	    "marginTop": "20px",
	    "flexDirection": "column",
	    "backgroundColor": "#ffffff",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "book-detail"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "book-recommend"
	        }
	      ]
	    }
	  },
	  ".book-detail .book-recommend .titlebar": {
	    "marginBottom": "24px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "book-detail"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "book-recommend"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "titlebar"
	        }
	      ]
	    }
	  },
	  ".book-detail .book-recommend .recommendBook": {
	    "flex": 1,
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "book-detail"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "book-recommend"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "recommendBook"
	        }
	      ]
	    }
	  },
	  ".book-detail .book-recommend .titlebar .title": {
	    "marginTop": "10px",
	    "lineHeight": "44px",
	    "fontSize": "32px",
	    "color": "#0e0e0e",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "book-detail"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "book-recommend"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "titlebar"
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
	  }
	}

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, $app_require$){'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _system = $app_require$('@app-module/system.prompt');
	
	var _system2 = _interopRequireDefault(_system);
	
	var _system3 = $app_require$('@app-module/system.router');
	
	var _system4 = _interopRequireDefault(_system3);
	
	var _bookData = __webpack_require__(37);
	
	var _bookData2 = _interopRequireDefault(_bookData);
	
	var _bookcaseService = __webpack_require__(12);
	
	var _bookcaseService2 = _interopRequireDefault(_bookcaseService);
	
	var _authentication = __webpack_require__(11);
	
	var _authentication2 = _interopRequireDefault(_authentication);
	
	var _readingConfig = __webpack_require__(38);
	
	var _readingConfig2 = _interopRequireDefault(_readingConfig);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    data: {
	        bid: '',
	        isBookCase: false,
	        cid: '',
	        title: '',
	        catalogs: [],
	        bookInfo: null,
	        option: {
	            show: true,
	            background: 'rgb(255,255,255)',
	            text: '拼命加载中...'
	        },
	        isStrike: true,
	        startTitle: '开始阅读',
	        loginState: false
	    },
	    onInit: function onInit() {
	        var _this = this;
	
	        this.isStrike = false;
	        Promise.all([_authentication2.default.getLoginState(), this.getBookInfo(), this.getBookIntro(), this.getBookState()]).then(function (res) {
	            _this.loginState = res[0];
	            _this.isStrike = true;
	            _this.option.show = false;
	            _this.getBookPage();
	        });
	    },
	    onShow: function onShow() {
	        if (this.isStrike) {
	            this.getBookPage();
	        }
	    },
	    getBookPage: function getBookPage() {
	        var _this2 = this;
	
	        _bookcaseService2.default.getLocalBookpage().then(function (res1) {
	            for (var i in res1) {
	                if (res1[i].bid == _this2.bid) {
	                    _this2.cid = res1[i].cid;
	                    _this2.startTitle = "继续阅读";
	                }
	            }
	        });
	    },
	    addBookCase: function addBookCase() {
	        var _this3 = this;
	
	        if (!this.loginState) {
	            _readingConfig2.default.setRoute({
	                uri: _system4.default.getState().name,
	                params: {
	                    bid: this.bid
	                }
	            }).then(function (res) {
	                _system4.default.replace({
	                    uri: 'Views/Login'
	                });
	            });
	        } else {
	            _bookData2.default.addBookCase({ bid: this.bid }).then(function (res) {
	                _this3.isBookCase = true;
	                var obj = {
	                    bid: _this3.bid,
	                    isBookCase: true
	                };
	                _bookcaseService2.default.addLocalBookCase(obj).then(function (res1) {
	                    _system2.default.showToast({
	                        message: "收藏成功"
	                    });
	                });
	            });
	        }
	    },
	    removeBookCase: function removeBookCase() {
	        var _this4 = this;
	
	        _bookData2.default.deleteBookCase({ bids: this.bid }).then(function (res) {
	            _this4.isBookCase = false;
	            _bookcaseService2.default.removeLocalBookCase(_this4.bid).then(function (res1) {
	                _system2.default.showToast({
	                    message: "移除成功"
	                });
	            });
	        });
	    },
	    getBookInfo: function getBookInfo() {
	        var _this5 = this;
	
	        var that = this;
	        return new Promise(function (resolve) {
	            _bookData2.default.bookInfo({ bid: _this5.bid }).then(function (res) {
	                that.bookInfo = res.data;
	                that.cid = res.data.book.firstChapterId;
	                that.$page.setTitleBar({ text: res.data.book.booktitle });
	                resolve('ok');
	            });
	        });
	    },
	    getBookIntro: function getBookIntro() {
	        var _this6 = this;
	
	        return new Promise(function (resolve, reject) {
	            _bookData2.default.bookChapter({ bid: _this6.bid }).then(function (res) {
	                var data = res.data;
	                var source = [];
	                for (var i = 0, len = data.length; i < len; i++) {
	                    for (var j = 0, slen = data[i].chapters.length; j < slen; j++) {
	                        source.push(data[i].chapters[j]);
	                    }
	                };
	                _this6.catalogs = source;
	                resolve("ok");
	            });
	        });
	    },
	    getBookState: function getBookState() {
	        var _this7 = this;
	
	        _bookcaseService2.default.isExistInBookCase(this.bid).then(function (res) {
	            _this7.isBookCase = res;
	        });
	    },
	    linkComments: function linkComments() {
	        _system4.default.push({
	            uri: 'Views/Comments',
	            params: {
	                bid: this.bid
	            }
	        });
	    },
	    stochastic: function stochastic(arr) {
	        var randowArr = this.randomThree();
	        var showArr = [];
	        for (var i in randowArr) {
	            var index = randowArr[i];
	            showArr.push(arr[index]);
	        }
	        return showArr;
	    },
	    randomThree: function randomThree() {
	        var nums = [0, 1, 2, 3, 4, 5, 6, 7, 8];
	        var arr = [];
	        while (arr.length < 3) {
	            var num = Math.floor(Math.random() * (9 - arr.length));
	            arr.push(nums[num]);
	            nums.splice(num, 1);
	        }
	        return arr;
	    },
	    startBook: function startBook() {
	        _system4.default.push({
	            uri: 'Views/Read',
	            params: {
	                bid: this.bid,
	                cid: this.cid
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

/***/ })
/******/ ]);
  };
  if (typeof window === "undefined") {
    return createPageHandler();
  }
  else {
    window.createPageHandler = createPageHandler
  }
})();
//# sourceMappingURL=index.js.map