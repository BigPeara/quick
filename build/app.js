(function(){
      
  var createAppHandler = function() {
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

	var $app_script$ = __webpack_require__(136)
	
	$app_define$('@app-application/app', [], function($app_require$, $app_exports$, $app_module$){
	     $app_script$($app_module$, $app_exports$, $app_require$)
	     if ($app_exports$.__esModule && $app_exports$.default) {
	            $app_module$.exports = $app_exports$.default
	        }
	})
	
	$app_bootstrap$('@app-application/app',{ packagerVersion: '0.0.5'})


/***/ }),

/***/ 136:
/***/ (function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, $app_require$){'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _util = __webpack_require__(137);
	
	var _util2 = _interopRequireDefault(_util);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  showMenu: _util2.default.showMenu,
	  createShortcut: _util2.default.createShortcut
	};
	(exports.default || module.exports).manifest = {"package":"com.youkongt.reader","name":"悠空网-先行版","versionName":"1.0.0","versionCode":"1","minPlatformVersion":"1000","icon":"/Common/imgs/logo.png","features":[{"name":"system.prompt"},{"name":"system.router"},{"name":"system.shortcut"},{"name":"system.fetch"},{"name":"system.storage"},{"name":"system.webview"},{"name":"service.alipay"},{"name":"service.wxpay","params":{"package":"com.yokong.reader","sign":"539978f8711a3665095293c211d12eec","url":"http://client.h5sdk.yokong.com/pay/sdk/default_35795.aspx"}}],"permissions":[{"origin":"*"}],"config":{"logLevel":"log","designWidth":750},"router":{"entry":"Index","pages":{"Index":{"component":"index"},"Mine":{"component":"index"},"Bookstorage":{"component":"index"},"Bookcase":{"component":"index"},"Detail":{"component":"index"},"Views/Comments":{"component":"index"},"Views/Read":{"component":"index"},"Views/Catalog":{"component":"index"},"Views/Login":{"component":"index"},"Views/UserInfo":{"component":"index"},"Views/SubRecords":{"component":"index"},"Views/Recharge":{"component":"index"},"Views/ReadCord":{"component":"index"},"Views/Service":{"component":"index"},"Views/Bound":{"component":"index"},"Views/Search":{"component":"index"},"Views/Classify":{"component":"index"},"Views/BookList":{"component":"index"},"Views/SpecialBookList":{"component":"index"},"Views/Pay":{"component":"index"}}},"display":{"backgroundColor":"#ECECEC","titleBarBackgroundColor":"#f76c5b","titleBarTextColor":"#ffffff","menu":false,"pages":{"Index":{"titleBarText":"悠空网","menu":false},"Mine":{"titleBarText":"悠空网","menu":false},"Bookcase":{"titleBarText":"悠空网","menu":false},"Bookstorage":{"titleBarText":"悠空网","menu":false},"Detail":{"titleBarText":"悠空网","menu":false},"Views/Comments":{"titleBarText":"评论","menu":false},"Views/Catalog":{"titleBarText":"悠空网","menu":false},"Views/Read":{"titleBarText":"悠空网","menu":false},"Views/Login":{"titleBarText":"登录","menu":false},"Views/UserInfo":{"titleBarText":"个人资料","menu":false},"Views/SubRecords":{"titleBarText":"消费记录","menu":false},"Views/Recharge":{"titleBarText":"充值记录","menu":false},"Views/ReadCord":{"titleBarText":"阅读记录","menu":false},"Views/Service":{"titleBarText":"客服咨询","menu":false},"Views/Bound":{"titleBarText":"绑定手机号","menu":false},"Views/Search":{"titleBarText":"搜索","menu":false},"Views/Classify":{"titleBarText":"分类","menu":false},"Views/SpecialBookList":{"titleBarText":"热销短篇","menu":false},"Views/Pay":{"titleBarText":"充值页面","menu":false}}}};
	}

/***/ }),

/***/ 137:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * 显示菜单
	 */
	function showMenu() {
	  var prompt = $app_require$('@app-module/system.prompt');
	  var router = $app_require$('@app-module/system.router');
	  var appInfo = $app_require$('@app-module/system.app').getInfo();
	  prompt.showContextMenu({
	    itemList: ['保存桌面', '关于', '取消'],
	    success: function success(ret) {
	      switch (ret.index) {
	        case 0:
	          // 保存桌面
	          createShortcut();
	          break;
	        case 1:
	          // 关于
	          router.push({
	            uri: '/About',
	            params: {
	              name: appInfo.name,
	              icon: appInfo.icon
	            }
	          });
	          break;
	        case 2:
	          // 取消
	          break;
	        default:
	          prompt.showToast({
	            message: 'error'
	          });
	      }
	    }
	  });
	}
	
	/**
	 * 创建桌面图标
	 * 注意：使用加载器测试`创建桌面快捷方式`功能时，请先在`系统设置`中打开`应用加载器`的`桌面快捷方式`权限
	 */
	function createShortcut() {
	  var prompt = $app_require$('@app-module/system.prompt');
	  var shortcut = $app_require$('@app-module/system.shortcut');
	  shortcut.hasInstalled({
	    success: function success(ret) {
	      if (ret) {
	        prompt.showToast({
	          message: '已创建桌面图标'
	        });
	      } else {
	        shortcut.install({
	          success: function success() {
	            prompt.showToast({
	              message: '成功创建桌面图标'
	            });
	          },
	          fail: function fail(errmsg, errcode) {
	            prompt.showToast({
	              message: errcode + ': ' + errmsg
	            });
	          }
	        });
	      }
	    }
	  });
	}
	
	exports.default = {
	  showMenu: showMenu,
	  createShortcut: createShortcut
	};

/***/ })

/******/ });
  };
  if (typeof window === "undefined") {
    return createAppHandler();
  }
  else {
    window.createAppHandler = createAppHandler
    // H5注入manifest以获取features
    global.manifest = {"package":"com.youkongt.reader","name":"悠空网-先行版","versionName":"1.0.0","versionCode":"1","minPlatformVersion":"1000","icon":"/Common/imgs/logo.png","features":[{"name":"system.prompt"},{"name":"system.router"},{"name":"system.shortcut"},{"name":"system.fetch"},{"name":"system.storage"},{"name":"system.webview"},{"name":"service.alipay"},{"name":"service.wxpay","params":{"package":"com.yokong.reader","sign":"539978f8711a3665095293c211d12eec","url":"http://client.h5sdk.yokong.com/pay/sdk/default_35795.aspx"}}],"permissions":[{"origin":"*"}],"config":{"logLevel":"log","designWidth":750},"router":{"entry":"Index","pages":{"Index":{"component":"index"},"Mine":{"component":"index"},"Bookstorage":{"component":"index"},"Bookcase":{"component":"index"},"Detail":{"component":"index"},"Views/Comments":{"component":"index"},"Views/Read":{"component":"index"},"Views/Catalog":{"component":"index"},"Views/Login":{"component":"index"},"Views/UserInfo":{"component":"index"},"Views/SubRecords":{"component":"index"},"Views/Recharge":{"component":"index"},"Views/ReadCord":{"component":"index"},"Views/Service":{"component":"index"},"Views/Bound":{"component":"index"},"Views/Search":{"component":"index"},"Views/Classify":{"component":"index"},"Views/BookList":{"component":"index"},"Views/SpecialBookList":{"component":"index"},"Views/Pay":{"component":"index"}}},"display":{"backgroundColor":"#ECECEC","titleBarBackgroundColor":"#f76c5b","titleBarTextColor":"#ffffff","menu":false,"pages":{"Index":{"titleBarText":"悠空网","menu":false},"Mine":{"titleBarText":"悠空网","menu":false},"Bookcase":{"titleBarText":"悠空网","menu":false},"Bookstorage":{"titleBarText":"悠空网","menu":false},"Detail":{"titleBarText":"悠空网","menu":false},"Views/Comments":{"titleBarText":"评论","menu":false},"Views/Catalog":{"titleBarText":"悠空网","menu":false},"Views/Read":{"titleBarText":"悠空网","menu":false},"Views/Login":{"titleBarText":"登录","menu":false},"Views/UserInfo":{"titleBarText":"个人资料","menu":false},"Views/SubRecords":{"titleBarText":"消费记录","menu":false},"Views/Recharge":{"titleBarText":"充值记录","menu":false},"Views/ReadCord":{"titleBarText":"阅读记录","menu":false},"Views/Service":{"titleBarText":"客服咨询","menu":false},"Views/Bound":{"titleBarText":"绑定手机号","menu":false},"Views/Search":{"titleBarText":"搜索","menu":false},"Views/Classify":{"titleBarText":"分类","menu":false},"Views/SpecialBookList":{"titleBarText":"热销短篇","menu":false},"Views/Pay":{"titleBarText":"充值页面","menu":false}}}};
  }
})();
//# sourceMappingURL=app.js.map