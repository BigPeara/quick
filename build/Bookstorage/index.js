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
	__webpack_require__(21)
	__webpack_require__(26)
	__webpack_require__(30)
	var $app_template$ = __webpack_require__(34)
	var $app_style$ = __webpack_require__(35)
	var $app_script$ = __webpack_require__(36)
	
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
/* 12 */,
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
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

	var $app_template$ = __webpack_require__(27)
	var $app_style$ = __webpack_require__(28)
	var $app_script$ = __webpack_require__(29)
	
	$app_define$('@app-component/book-con', [], function($app_require$, $app_exports$, $app_module$){
	     $app_script$($app_module$, $app_exports$, $app_require$)
	     if ($app_exports$.__esModule && $app_exports$.default) {
	            $app_module$.exports = $app_exports$.default
	        }
	     $app_module$.exports.template = $app_template$
	     $app_module$.exports.style = $app_style$
	})


/***/ }),
/* 27 */
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
	            "exp": function () {return this.bookCon},
	            "value": "iten"
	          },
	          "classList": [
	            "book-item"
	          ],
	          "events": {
	            "click": function (evt) {this.route(this.iten,evt)}
	          },
	          "children": [
	            {
	              "type": "image",
	              "attr": {
	                "src": function () {return this.config.COVER_BASE_URL+this.iten.cover}
	              },
	              "classList": [
	                "book-cover"
	              ]
	            },
	            {
	              "type": "div",
	              "attr": {},
	              "classList": [
	                "book-info"
	              ],
	              "children": [
	                {
	                  "type": "text",
	                  "attr": {
	                    "value": function () {return this.iten.booktitle}
	                  },
	                  "classList": [
	                    "book-name"
	                  ]
	                },
	                {
	                  "type": "text",
	                  "attr": {
	                    "value": function () {return this.iten.Introduction}
	                  },
	                  "classList": [
	                    "book-introd"
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
/* 28 */
/***/ (function(module, exports) {

	module.exports = {
	  ".book-container": {
	    "marginBottom": "40px"
	  },
	  ".book-container .book-Con": {
	    "width": "100%",
	    "display": "flex",
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
	    "width": "190px",
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
	  ".book-container .book-Con .book-info": {
	    "flex": 1,
	    "height": "258px",
	    "display": "flex",
	    "flexDirection": "column",
	    "marginLeft": "20px",
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
	          "v": "book-info"
	        }
	      ]
	    }
	  },
	  ".book-container .book-Con .book-name": {
	    "fontSize": "32px",
	    "lineHeight": "32px",
	    "color": "#000000",
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
	          "v": "book-name"
	        }
	      ]
	    }
	  },
	  ".book-container .book-Con .book-introd": {
	    "lineHeight": "48px",
	    "fontSize": "26px",
	    "marginTop": "25px",
	    "lines": 3,
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
	          "v": "book-introd"
	        }
	      ]
	    }
	  }
	}

/***/ }),
/* 29 */
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
	    props: ["bookCon"],
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
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

	var $app_template$ = __webpack_require__(31)
	var $app_style$ = __webpack_require__(32)
	var $app_script$ = __webpack_require__(33)
	
	$app_define$('@app-component/normalbook', [], function($app_require$, $app_exports$, $app_module$){
	     $app_script$($app_module$, $app_exports$, $app_require$)
	     if ($app_exports$.__esModule && $app_exports$.default) {
	            $app_module$.exports = $app_exports$.default
	        }
	     $app_module$.exports.template = $app_template$
	     $app_module$.exports.style = $app_style$
	})


/***/ }),
/* 31 */
/***/ (function(module, exports) {

	module.exports = {
	  "type": "div",
	  "attr": {},
	  "classList": [
	    "normal-book"
	  ],
	  "events": {
	    "click": "route"
	  },
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
	            "src": function () {return this.config.COVER_BASE_URL+this.bookinfo.cover}
	          }
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "attr": {},
	      "classList": [
	        "book-info"
	      ],
	      "children": [
	        {
	          "type": "text",
	          "attr": {
	            "value": function () {return this.bookinfo.booktitle}
	          },
	          "classList": [
	            "title"
	          ]
	        },
	        {
	          "type": "text",
	          "attr": {
	            "value": function () {return this.converStr(this.bookinfo.Introduction)}
	          },
	          "classList": [
	            "book-intro"
	          ]
	        },
	        {
	          "type": "div",
	          "attr": {},
	          "classList": [
	            "other"
	          ],
	          "children": [
	            {
	              "type": "text",
	              "attr": {
	                "value": function () {return this.bookinfo.author}
	              },
	              "classList": [
	                "author"
	              ]
	            },
	            {
	              "type": "text",
	              "attr": {
	                "value": function () {return this.bookinfo.state==9?'完结':'连载'}
	              },
	              "classList": [
	                "tag"
	              ],
	              "style": {
	                "backgroundColor": function () {return this.bookinfo.state==9?'#d8d8d8':'#F7BDB6'}
	              }
	            }
	          ]
	        }
	      ]
	    }
	  ]
	}

/***/ }),
/* 32 */
/***/ (function(module, exports) {

	module.exports = {
	  ".normal-book": {
	    "paddingTop": "30px",
	    "paddingRight": "0px",
	    "paddingBottom": "30px",
	    "paddingLeft": "0px",
	    "borderTopColor": "#f1f1f1",
	    "borderRightColor": "#f1f1f1",
	    "borderBottomColor": "#f1f1f1",
	    "borderLeftColor": "#f1f1f1",
	    "borderBottomWidth": "1px"
	  },
	  ".normal-book .cover": {
	    "width": "194px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "normal-book"
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
	        }
	      ]
	    }
	  },
	  ".normal-book .cover image": {
	    "width": "194px",
	    "height": "260px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "normal-book"
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
	  ".normal-book .book-info": {
	    "marginLeft": "25px",
	    "flex": 1,
	    "flexDirection": "column",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "normal-book"
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
	  ".normal-book .book-info .title": {
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
	          "v": "normal-book"
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
	          "v": "title"
	        }
	      ]
	    }
	  },
	  ".normal-book .book-info .book-intro": {
	    "marginTop": "40px",
	    "color": "#666666",
	    "fontSize": "28px",
	    "lineHeight": "50px",
	    "lines": 2,
	    "textOverflow": "ellipsis",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "normal-book"
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
	          "v": "book-intro"
	        }
	      ]
	    }
	  },
	  ".normal-book .book-info .other": {
	    "marginTop": "45px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "normal-book"
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
	          "v": "other"
	        }
	      ]
	    }
	  },
	  ".normal-book .book-info .author": {
	    "flex": 1,
	    "lineHeight": "36px",
	    "color": "#7c7c8c",
	    "fontSize": "24px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "normal-book"
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
	          "v": "author"
	        }
	      ]
	    }
	  },
	  ".normal-book .book-info .tag": {
	    "paddingTop": "0px",
	    "paddingRight": "12px",
	    "paddingBottom": "0px",
	    "paddingLeft": "12px",
	    "fontSize": "22px",
	    "height": "36px",
	    "lineHeight": "36px",
	    "borderRadius": "18px",
	    "color": "#ffffff",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "normal-book"
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
	          "v": "tag"
	        }
	      ]
	    }
	  }
	}

/***/ }),
/* 33 */
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
	    props: ['bookinfo'],
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
	                bid: this.bookinfo.id
	            }
	        });
	    },
	    converStr: function converStr(str) {
	        var reg = new RegExp("&nbsp;", "g");
	        return str.replace(reg, " ");
	    }
	};}

/***/ }),
/* 34 */
/***/ (function(module, exports) {

	module.exports = {
	  "type": "div",
	  "attr": {},
	  "children": [
	    {
	      "type": "loading",
	      "attr": {
	        "option": function () {return this.option}
	      }
	    },
	    {
	      "type": "list",
	      "attr": {},
	      "classList": [
	        "home-page"
	      ],
	      "events": {
	        "scrollbottom": "loadMoreData"
	      },
	      "children": [
	        {
	          "type": "list-item",
	          "attr": {
	            "type": "banner"
	          },
	          "children": [
	            {
	              "type": "swiper",
	              "attr": {
	                "autoplay": "true",
	                "interval": "4000"
	              },
	              "classList": [
	                "banner"
	              ],
	              "children": [
	                {
	                  "type": "stack",
	                  "attr": {},
	                  "classList": [
	                    "banner"
	                  ],
	                  "repeat": {
	                    "exp": function () {return this.swiper},
	                    "value": "item"
	                  },
	                  "children": [
	                    {
	                      "type": "image",
	                      "attr": {
	                        "src": function () {return this.config.COVER_BASE_URL+this.item.cover}
	                      },
	                      "classList": [
	                        "banner-image"
	                      ],
	                      "events": {
	                        "click": function (evt) {this.linkDetail(this.item.id,evt)}
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
	                "search"
	              ]
	            }
	          ]
	        },
	        {
	          "type": "block",
	          "attr": {},
	          "children": [
	            {
	              "type": "list-item",
	              "attr": {
	                "type": "search"
	              },
	              "children": [
	                {
	                  "type": "div",
	                  "attr": {},
	                  "classList": [
	                    "btn-search"
	                  ],
	                  "events": {
	                    "click": "linkSeach"
	                  },
	                  "children": [
	                    {
	                      "type": "image",
	                      "attr": {
	                        "src": "../Common/imgs/search.png"
	                      },
	                      "classList": [
	                        "icon-search"
	                      ]
	                    },
	                    {
	                      "type": "text",
	                      "attr": {
	                        "value": "搜作品~搜作者~"
	                      }
	                    }
	                  ]
	                }
	              ]
	            }
	          ]
	        },
	        {
	          "type": "block",
	          "attr": {},
	          "children": [
	            {
	              "type": "list-item",
	              "attr": {
	                "type": "nav"
	              },
	              "children": [
	                {
	                  "type": "div",
	                  "attr": {},
	                  "classList": [
	                    "flexible-tabbar"
	                  ],
	                  "children": [
	                    {
	                      "type": "div",
	                      "attr": {},
	                      "classList": [
	                        "tab-item"
	                      ],
	                      "events": {
	                        "click": "route"
	                      },
	                      "children": [
	                        {
	                          "type": "image",
	                          "attr": {
	                            "src": "../Common/imgs/class.png"
	                          },
	                          "classList": [
	                            "icon-nav",
	                            "icon-nav-free"
	                          ]
	                        },
	                        {
	                          "type": "text",
	                          "attr": {
	                            "value": "分类"
	                          },
	                          "classList": [
	                            "tab-text"
	                          ]
	                        }
	                      ]
	                    },
	                    {
	                      "type": "div",
	                      "attr": {},
	                      "classList": [
	                        "tab-item"
	                      ],
	                      "events": {
	                        "click": function (evt) {this.linkList(0,evt)}
	                      },
	                      "children": [
	                        {
	                          "type": "image",
	                          "attr": {
	                            "src": "../Common/imgs/rank.png"
	                          },
	                          "classList": [
	                            "icon-nav",
	                            "icon-nav-rank"
	                          ]
	                        },
	                        {
	                          "type": "text",
	                          "attr": {
	                            "value": "排行"
	                          },
	                          "classList": [
	                            "tab-text"
	                          ]
	                        }
	                      ]
	                    },
	                    {
	                      "type": "div",
	                      "attr": {},
	                      "classList": [
	                        "tab-item"
	                      ],
	                      "events": {
	                        "click": "pay"
	                      },
	                      "children": [
	                        {
	                          "type": "image",
	                          "attr": {
	                            "src": "../Common/imgs/pay.png"
	                          },
	                          "classList": [
	                            "icon-nav",
	                            "icon-nav-monthly"
	                          ]
	                        },
	                        {
	                          "type": "text",
	                          "attr": {
	                            "value": "充值"
	                          },
	                          "classList": [
	                            "tab-text"
	                          ]
	                        }
	                      ]
	                    },
	                    {
	                      "type": "div",
	                      "attr": {},
	                      "classList": [
	                        "tab-item"
	                      ],
	                      "events": {
	                        "click": function (evt) {this.linkList(2,evt)}
	                      },
	                      "children": [
	                        {
	                          "type": "image",
	                          "attr": {
	                            "src": "../Common/imgs/wanben.png"
	                          },
	                          "classList": [
	                            "icon-nav",
	                            "icon-nav-manito"
	                          ]
	                        },
	                        {
	                          "type": "text",
	                          "attr": {
	                            "value": "完本"
	                          },
	                          "classList": [
	                            "tab-text"
	                          ]
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
	          "type": "list-item",
	          "attr": {
	            "type": "book"
	          },
	          "children": [
	            {
	              "type": "div",
	              "attr": {},
	              "classList": [
	                "container"
	              ],
	              "children": [
	                {
	                  "type": "div",
	                  "attr": {},
	                  "classList": [
	                    "book-title"
	                  ],
	                  "children": [
	                    {
	                      "type": "div",
	                      "attr": {},
	                      "classList": [
	                        "flex-t"
	                      ],
	                      "children": [
	                        {
	                          "type": "image",
	                          "attr": {
	                            "src": "../Common/imgs/hot.png"
	                          },
	                          "classList": [
	                            "icon-title"
	                          ]
	                        },
	                        {
	                          "type": "text",
	                          "attr": {
	                            "value": "热销短篇"
	                          },
	                          "classList": [
	                            "book-sub-t"
	                          ]
	                        }
	                      ]
	                    },
	                    {
	                      "type": "image",
	                      "attr": {
	                        "src": "../Common/imgs/icon-more.png"
	                      },
	                      "classList": [
	                        "icon-more"
	                      ],
	                      "events": {
	                        "click": "linkSpecialBook"
	                      }
	                    }
	                  ]
	                },
	                {
	                  "type": "book-list",
	                  "attr": {
	                    "bookList": function () {return this.ai}
	                  }
	                }
	              ]
	            }
	          ]
	        },
	        {
	          "type": "list-item",
	          "attr": {
	            "type": "g-hot"
	          },
	          "children": [
	            {
	              "type": "div",
	              "attr": {},
	              "classList": [
	                "container"
	              ],
	              "children": [
	                {
	                  "type": "div",
	                  "attr": {},
	                  "classList": [
	                    "book-title"
	                  ],
	                  "children": [
	                    {
	                      "type": "div",
	                      "attr": {},
	                      "classList": [
	                        "flex-t"
	                      ],
	                      "children": [
	                        {
	                          "type": "image",
	                          "attr": {
	                            "src": "../Common/imgs/sexw.png"
	                          },
	                          "classList": [
	                            "icon-title"
	                          ]
	                        },
	                        {
	                          "type": "text",
	                          "attr": {
	                            "value": "女生热门"
	                          },
	                          "classList": [
	                            "book-sub-t"
	                          ]
	                        }
	                      ]
	                    }
	                  ]
	                },
	                {
	                  "type": "book-con",
	                  "attr": {
	                    "bookCon": function () {return this.list}
	                  }
	                },
	                {
	                  "type": "book-list",
	                  "attr": {
	                    "bookList": function () {return this.bookNa}
	                  }
	                },
	                {
	                  "type": "text",
	                  "attr": {
	                    "value": "更多更新..."
	                  },
	                  "classList": [
	                    "btn-more"
	                  ],
	                  "events": {
	                    "click": function (evt) {this.linkClassify(2,evt)}
	                  }
	                }
	              ]
	            }
	          ]
	        },
	        {
	          "type": "list-item",
	          "attr": {
	            "type": "boy-hot"
	          },
	          "children": [
	            {
	              "type": "div",
	              "attr": {},
	              "classList": [
	                "container"
	              ],
	              "children": [
	                {
	                  "type": "div",
	                  "attr": {},
	                  "classList": [
	                    "book-title"
	                  ],
	                  "children": [
	                    {
	                      "type": "div",
	                      "attr": {},
	                      "classList": [
	                        "flex-t"
	                      ],
	                      "children": [
	                        {
	                          "type": "image",
	                          "attr": {
	                            "src": "../Common/imgs/sexm.png"
	                          },
	                          "classList": [
	                            "icon-title"
	                          ]
	                        },
	                        {
	                          "type": "text",
	                          "attr": {
	                            "value": "男生热门"
	                          },
	                          "classList": [
	                            "book-sub-t"
	                          ]
	                        }
	                      ]
	                    }
	                  ]
	                },
	                {
	                  "type": "book-con",
	                  "attr": {
	                    "bookCon": function () {return this.boyList}
	                  }
	                },
	                {
	                  "type": "book-list",
	                  "attr": {
	                    "bookList": function () {return this.boyNa}
	                  }
	                },
	                {
	                  "type": "text",
	                  "attr": {
	                    "value": "更多更新..."
	                  },
	                  "classList": [
	                    "btn-more"
	                  ],
	                  "events": {
	                    "click": function (evt) {this.linkClassify(1,evt)}
	                  }
	                }
	              ]
	            }
	          ]
	        },
	        {
	          "type": "list-item",
	          "attr": {
	            "type": "sign"
	          },
	          "children": [
	            {
	              "type": "div",
	              "attr": {},
	              "classList": [
	                "container"
	              ],
	              "children": [
	                {
	                  "type": "div",
	                  "attr": {},
	                  "classList": [
	                    "book-title"
	                  ],
	                  "children": [
	                    {
	                      "type": "div",
	                      "attr": {},
	                      "classList": [
	                        "flex-t"
	                      ],
	                      "children": [
	                        {
	                          "type": "image",
	                          "attr": {
	                            "src": "../Common/imgs/jingpin.png"
	                          },
	                          "classList": [
	                            "icon-title"
	                          ]
	                        },
	                        {
	                          "type": "text",
	                          "attr": {
	                            "value": "精品推荐"
	                          },
	                          "classList": [
	                            "book-sub-t"
	                          ]
	                        }
	                      ]
	                    }
	                  ]
	                },
	                {
	                  "type": "normalbook",
	                  "attr": {
	                    "bookinfo": function () {return this.item}
	                  },
	                  "repeat": {
	                    "exp": function () {return this.recom},
	                    "value": "item"
	                  }
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
/* 35 */
/***/ (function(module, exports) {

	module.exports = {
	  ".banner": {
	    "height": "420px"
	  },
	  ".banner .banner-image": {
	    "height": "420px",
	    "width": "100%",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "banner"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "banner-image"
	        }
	      ]
	    }
	  },
	  ".book-container": {
	    "height": "150px",
	    "width": "100%",
	    "display": "flex",
	    "flex": 1
	  },
	  ".flexible-tabbar": {
	    "backgroundColor": "#ffffff",
	    "paddingTop": "30px",
	    "paddingRight": "0px",
	    "paddingBottom": "30px",
	    "paddingLeft": "0px",
	    "display": "flex",
	    "width": "100%"
	  },
	  ".flexible-tabbar .tab-item": {
	    "flex": 1,
	    "justifyContent": "center",
	    "display": "flex",
	    "flexDirection": "column",
	    "alignItems": "center",
	    "paddingTop": "25px",
	    "paddingRight": "0px",
	    "paddingBottom": "15px",
	    "paddingLeft": "0px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "flexible-tabbar"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "tab-item"
	        }
	      ]
	    }
	  },
	  ".flexible-tabbar .tab-item .icon-nav": {
	    "width": "70.4px",
	    "height": "70.4px",
	    "marginBottom": "10px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "flexible-tabbar"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "tab-item"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "icon-nav"
	        }
	      ]
	    }
	  },
	  ".flexible-tabbar .tab-text": {
	    "fontSize": "32px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "flexible-tabbar"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "tab-text"
	        }
	      ]
	    }
	  },
	  ".flexible-tabbar .active": {
	    "fontSize": "32px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "flexible-tabbar"
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
	  ".container": {
	    "paddingTop": "0px",
	    "paddingRight": "30px",
	    "paddingBottom": "24px",
	    "paddingLeft": "30px",
	    "width": "100%",
	    "marginTop": "30px",
	    "backgroundColor": "#ffffff",
	    "display": "flex",
	    "flexDirection": "column"
	  },
	  ".container .book-title": {
	    "width": "100%",
	    "display": "flex",
	    "justifyContent": "space-between",
	    "alignItems": "center",
	    "paddingTop": "25.6px",
	    "paddingRight": "0px",
	    "paddingBottom": "25.6px",
	    "paddingLeft": "0px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "container"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "book-title"
	        }
	      ]
	    }
	  },
	  ".container .book-title .flex-t": {
	    "display": "flex",
	    "alignItems": "center",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "container"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "book-title"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "flex-t"
	        }
	      ]
	    }
	  },
	  ".container .book-title .book-sub-t": {
	    "fontSize": "40px",
	    "color": "#333333",
	    "lineHeight": "40px",
	    "marginLeft": "15px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "container"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "book-title"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "book-sub-t"
	        }
	      ]
	    }
	  },
	  ".container .book-title .icon-title": {
	    "width": "40px",
	    "height": "40px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "container"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "book-title"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "icon-title"
	        }
	      ]
	    }
	  },
	  ".container .book-title .icon-more": {
	    "width": "90px",
	    "height": "35px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "container"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "book-title"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "icon-more"
	        }
	      ]
	    }
	  },
	  ".container .btn-more": {
	    "width": "100%",
	    "height": "74px",
	    "borderTopWidth": "1px",
	    "borderRightWidth": "1px",
	    "borderBottomWidth": "1px",
	    "borderLeftWidth": "1px",
	    "borderStyle": "solid",
	    "borderTopColor": "#f76c5b",
	    "borderRightColor": "#f76c5b",
	    "borderBottomColor": "#f76c5b",
	    "borderLeftColor": "#f76c5b",
	    "borderRadius": "64px",
	    "textAlign": "center",
	    "color": "#f76c5b",
	    "fontSize": "30px",
	    "marginTop": "25px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "container"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "btn-more"
	        }
	      ]
	    }
	  },
	  ".btn-search": {
	    "marginTop": "20px",
	    "marginRight": "35px",
	    "marginBottom": "20px",
	    "marginLeft": "35px",
	    "width": "680px",
	    "height": "60px",
	    "color": "#ffffff",
	    "backgroundColor": "#ffffff",
	    "justifyContent": "center",
	    "alignItems": "center",
	    "borderRadius": "30px"
	  },
	  ".btn-search image": {
	    "marginRight": "10px",
	    "width": "32px",
	    "height": "32px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "btn-search"
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
	  "swiper": {
	    "indicatorSelectedColor": "#f76c5b"
	  }
	}

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, $app_require$){'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _system = $app_require$('@app-module/system.router');
	
	var _system2 = _interopRequireDefault(_system);
	
	var _bookData = __webpack_require__(37);
	
	var _bookData2 = _interopRequireDefault(_bookData);
	
	var _urlConfig = __webpack_require__(25);
	
	var _urlConfig2 = _interopRequireDefault(_urlConfig);
	
	var _system3 = $app_require$('@app-module/system.prompt');
	
	var _system4 = _interopRequireDefault(_system3);
	
	var _readingConfig = __webpack_require__(38);
	
	var _readingConfig2 = _interopRequireDefault(_readingConfig);
	
	var _authentication = __webpack_require__(11);
	
	var _authentication2 = _interopRequireDefault(_authentication);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    data: function data() {
	        return {
	            swiper: [],
	            ai: [],
	            bookNa: [],
	            list: [],
	            boyNa: [],
	            boyList: [],
	            recom: [],
	            config: {},
	            loginState: false,
	            option: {
	                show: true,
	                background: 'rgb(255,255,255)',
	                text: '拼命加载中...'
	            }
	        };
	    },
	    onInit: function onInit() {
	        var _this = this;
	
	        this.config = _urlConfig2.default;
	        _authentication2.default.getLoginState().then(function (res) {
	            _this.loginState = res;
	        });
	        _bookData2.default.bookIndex({ token: this.token }).then(function (res) {
	            for (var j = 0; j < res.data.rexiaodp.length; j++) {
	                _this.ai.push(res.data.rexiaodp[j]);
	            }
	            for (var k = 0; k < res.data.nvshengrm.length - 1; k++) {
	                _this.bookNa.push(res.data.nvshengrm[k]);
	            }
	            for (var m = 0; m < res.data.nanshengrm.length - 1; m++) {
	                _this.boyNa.push(res.data.nanshengrm[m]);
	            }
	            _this.swiper = res.data.gundong;
	            _this.recom = [].concat(res.data.jingpintj.slice(0, 4));
	            _this.boyList.push(res.data.nanshengrm[res.data.nanshengrm.length - 1]);
	            _this.list.push(res.data.nvshengrm[res.data.nvshengrm.length - 1]);
	            _this.option.show = false;
	        });
	    },
	    route: function route() {
	        _system2.default.push({
	            uri: 'Views/Classify'
	        });
	    },
	    linkList: function linkList(state) {
	        _system2.default.push({
	            uri: 'Views/BookList',
	            params: {
	                state: state
	            }
	        });
	    },
	    linkSeach: function linkSeach() {
	        _system2.default.push({
	            uri: 'Views/Search'
	        });
	    },
	    linkClassify: function linkClassify(index) {
	        _system2.default.push({
	            uri: 'Views/Classify',
	            params: {
	                channelid: index
	            }
	        });
	    },
	    linkDetail: function linkDetail(id) {
	        _system2.default.push({
	            uri: 'Detail',
	            params: {
	                bid: id
	            }
	        });
	    },
	    linkSpecialBook: function linkSpecialBook() {
	        _system2.default.push({
	            uri: 'Views/SpecialBookList'
	        });
	    },
	    pay: function pay() {
	        if (!this.loginState) {
	            _readingConfig2.default.setRoute({
	                uri: _system2.default.getState().name
	            }).then(function (res) {
	                _system2.default.replace({
	                    uri: 'Views/Login'
	                });
	            });
	        } else {
	            _system2.default.push({
	                uri: 'Views/Pay'
	            });
	        }
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