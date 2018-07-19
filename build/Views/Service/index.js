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

	var $app_template$ = __webpack_require__(120)
	var $app_style$ = __webpack_require__(121)
	var $app_script$ = __webpack_require__(122)
	
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

/***/ 120:
/***/ (function(module, exports) {

	module.exports = {
	  "type": "div",
	  "attr": {},
	  "classList": [
	    "service"
	  ],
	  "children": [
	    {
	      "type": "text",
	      "attr": {
	        "value": "时间：9:00-22:00（含节假日）"
	      },
	      "classList": [
	        "time"
	      ]
	    },
	    {
	      "type": "div",
	      "attr": {},
	      "classList": [
	        "box"
	      ],
	      "children": [
	        {
	          "type": "text",
	          "attr": {
	            "value": "客服公众号:"
	          },
	          "classList": [
	            "describe"
	          ]
	        },
	        {
	          "type": "text",
	          "attr": {
	            "value": "悠空读物"
	          },
	          "classList": [
	            "content"
	          ]
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "attr": {},
	      "classList": [
	        "box"
	      ],
	      "children": [
	        {
	          "type": "text",
	          "attr": {
	            "value": "客服QQ:"
	          },
	          "classList": [
	            "describe"
	          ]
	        },
	        {
	          "type": "text",
	          "attr": {
	            "value": "228768606"
	          },
	          "classList": [
	            "content"
	          ]
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "attr": {},
	      "classList": [
	        "box"
	      ],
	      "children": [
	        {
	          "type": "text",
	          "attr": {
	            "value": "客服电话:"
	          },
	          "classList": [
	            "describe"
	          ]
	        },
	        {
	          "type": "a",
	          "attr": {
	            "href": "tel:025-57955567",
	            "value": "025-57955567"
	          },
	          "classList": [
	            "content"
	          ]
	        }
	      ]
	    }
	  ]
	}

/***/ }),

/***/ 121:
/***/ (function(module, exports) {

	module.exports = {
	  ".service": {
	    "paddingTop": "30px",
	    "paddingRight": "30px",
	    "paddingBottom": "30px",
	    "paddingLeft": "30px",
	    "flexDirection": "column",
	    "backgroundColor": "#ffffff"
	  },
	  ".box": {
	    "height": "60px",
	    "alignItems": "center",
	    "marginBottom": "5px"
	  },
	  ".time": {
	    "fontSize": "30px",
	    "color": "#333333",
	    "marginBottom": "5px",
	    "height": "60px"
	  },
	  ".describe": {
	    "fontSize": "30px",
	    "color": "#333333"
	  },
	  ".content": {
	    "color": "#f76c5b",
	    "fontSize": "30px",
	    "marginLeft": "10px"
	  }
	}

/***/ }),

/***/ 122:
/***/ (function(module, exports) {

	module.exports = function(module, exports, $app_require$){'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	exports.default = {
	  data: function data() {
	    return {};
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