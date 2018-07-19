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

	__webpack_require__(66)
	__webpack_require__(68)
	__webpack_require__(70)
	__webpack_require__(82)
	var $app_template$ = __webpack_require__(86)
	var $app_style$ = __webpack_require__(87)
	var $app_script$ = __webpack_require__(88)
	
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
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	var $app_template$ = __webpack_require__(2)
	var $app_style$ = __webpack_require__(3)
	var $app_script$ = __webpack_require__(4)
	
	$app_define$('@app-component/cordbook', [], function($app_require$, $app_exports$, $app_module$){
	     $app_script$($app_module$, $app_exports$, $app_require$)
	     if ($app_exports$.__esModule && $app_exports$.default) {
	            $app_module$.exports = $app_exports$.default
	        }
	     $app_module$.exports.template = $app_template$
	     $app_module$.exports.style = $app_style$
	})


/***/ }),
/* 2 */
/***/ (function(module, exports) {

	module.exports = {
	  "type": "div",
	  "attr": {},
	  "classList": [
	    "cord-book"
	  ],
	  "events": {
	    "click": "linkDetail"
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
	            "src": function () {return 'http://res.yokong.com' + (this.data.cover)}
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
	            "readStatus"
	          ],
	          "children": [
	            {
	              "type": "text",
	              "attr": {
	                "value": function () {return '读至：' + (this.converTitle(this.data.chapterTitle))}
	              },
	              "classList": [
	                "readStatus-text"
	              ]
	            },
	            {
	              "type": "text",
	              "attr": {
	                "value": function () {return this.data.markTime.substring(5,16)}
	              },
	              "classList": [
	                "readStatus-date"
	              ]
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "attr": {},
	          "classList": [
	            "readStatus"
	          ],
	          "children": [
	            {
	              "type": "text",
	              "attr": {
	                "value": function () {return '更新：' + (this.converTitle(this.data.lastUpdateTitle))}
	              },
	              "classList": [
	                "readStatus-text"
	              ]
	            },
	            {
	              "type": "text",
	              "attr": {
	                "value": function () {return this.data.lastUpdate.substring(5,16)}
	              },
	              "classList": [
	                "readStatus-date"
	              ]
	            }
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
	                "value": function () {return this.data.author}
	              },
	              "classList": [
	                "author"
	              ]
	            },
	            {
	              "type": "text",
	              "attr": {
	                "value": function () {return this.data.chapterTitle=='尚未阅读'?'立即阅读':'继续阅读'}
	              },
	              "classList": [
	                "tag"
	              ],
	              "events": {
	                "click": "linkRead"
	              }
	            }
	          ]
	        }
	      ]
	    }
	  ]
	}

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	module.exports = {
	  ".cord-book": {
	    "flex": 1,
	    "paddingTop": "29px",
	    "paddingRight": "30px",
	    "paddingBottom": "29px",
	    "paddingLeft": "30px",
	    "borderBottomWidth": "1px",
	    "borderTopColor": "#e9e9e9",
	    "borderRightColor": "#e9e9e9",
	    "borderBottomColor": "#e9e9e9",
	    "borderLeftColor": "#e9e9e9"
	  },
	  ".cord-book .cover": {
	    "width": "154px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "cord-book"
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
	  ".cord-book .cover image": {
	    "width": "154px",
	    "height": "214px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "cord-book"
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
	  ".cord-book .book-info": {
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
	          "v": "cord-book"
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
	  ".cord-book .book-info .title text": {
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
	          "v": "cord-book"
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
	  ".cord-book .book-info .book-intro": {
	    "marginTop": "20px",
	    "color": "#666666",
	    "fontSize": "28px",
	    "lineHeight": "44px",
	    "height": "88px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "cord-book"
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
	  ".cord-book .book-info .other": {
	    "marginTop": "30px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "cord-book"
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
	  ".cord-book .book-info .author": {
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
	          "v": "cord-book"
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
	  ".cord-book .book-info .tag": {
	    "paddingTop": "0px",
	    "paddingRight": "12px",
	    "paddingBottom": "0px",
	    "paddingLeft": "12px",
	    "color": "#ffffff",
	    "backgroundColor": "#f76c5b",
	    "fontSize": "22px",
	    "height": "36px",
	    "lineHeight": "36px",
	    "borderRadius": "18px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "cord-book"
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
	  },
	  ".cord-book .readStatus": {
	    "marginTop": "16px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "cord-book"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "readStatus"
	        }
	      ]
	    }
	  },
	  ".cord-book .readStatus-text": {
	    "flex": 1,
	    "fontSize": "28px",
	    "color": "#7c7c8c",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "cord-book"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "readStatus-text"
	        }
	      ]
	    }
	  },
	  ".cord-book .readStatus-date": {
	    "fontSize": "24px",
	    "color": "#c4c4ca",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "cord-book"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "readStatus-date"
	        }
	      ]
	    }
	  }
	}

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	module.exports = function(module, exports, $app_require$){'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _system = $app_require$('@app-module/system.router');
	
	var _system2 = _interopRequireDefault(_system);
	
	var _system3 = $app_require$('@app-module/system.prompt');
	
	var _system4 = _interopRequireDefault(_system3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    props: ['data'],
	    converTitle: function converTitle(str) {
	        if (str.length > 8) {
	            return str.substring(0, 8) + '...';
	        }
	        return str;
	    },
	    linkDetail: function linkDetail() {
	        _system2.default.push({
	            uri: 'Detail',
	            params: {
	                bid: this.data.id
	            }
	        });
	    },
	    linkRead: function linkRead(evt) {
	        _system2.default.push({
	            uri: 'Views/Read',
	            params: {
	                bid: this.data.id,
	                cid: this.data.cid
	            }
	        });
	    }
	};}

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	module.exports = {
	  "type": "div",
	  "attr": {},
	  "classList": [
	    "read-record"
	  ],
	  "children": [
	    {
	      "type": "div",
	      "attr": {},
	      "classList": [
	        "order-info",
	        "div-tabbar"
	      ],
	      "children": [
	        {
	          "type": "div",
	          "attr": {},
	          "classList": [
	            "chapter-order"
	          ],
	          "events": {
	            "click": function (evt) {this.showContent(1,evt)}
	          },
	          "children": [
	            {
	              "type": "text",
	              "attr": {
	                "value": "我的书架"
	              },
	              "classList": function () {return ['first', this.type==1?'active':'']}
	            },
	            {
	              "type": "div",
	              "attr": {},
	              "classList": [
	                "select-line"
	              ],
	              "style": {
	                "backgroundColor": function () {return this.type==1?'#f76c5b':'#ffffff'}
	              }
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "attr": {},
	          "classList": [
	            "all-order"
	          ],
	          "events": {
	            "click": function (evt) {this.showContent(2,evt)}
	          },
	          "children": [
	            {
	              "type": "text",
	              "attr": {
	                "value": "阅读记录"
	              },
	              "classList": function () {return [this.type==2?'active':'']}
	            },
	            {
	              "type": "div",
	              "attr": {},
	              "classList": [
	                "select-line"
	              ],
	              "style": {
	                "backgroundColor": function () {return this.type==2?'#f76c5b':'#ffffff'}
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
	        "div-tabcontent"
	      ],
	      "children": [
	        {
	          "type": "div",
	          "attr": {},
	          "classList": [
	            "recharge"
	          ],
	          "children": [
	            {
	              "type": "refresh",
	              "attr": {
	                "refreshing": function () {return this.isRefreshing}
	              },
	              "events": {
	                "refresh": "refresh"
	              },
	              "children": [
	                {
	                  "type": "list",
	                  "attr": {},
	                  "events": {
	                    "scrollbottom": "loadMoreData"
	                  },
	                  "classList": [
	                    "cordBook-list"
	                  ],
	                  "children": [
	                    {
	                      "type": "block",
	                      "attr": {},
	                      "repeat": {
	                        "exp": function () {return this.readCord},
	                        "value": "item"
	                      },
	                      "children": [
	                        {
	                          "type": "list-item",
	                          "attr": {
	                            "type": "product"
	                          },
	                          "classList": [
	                            "cordBook-li"
	                          ],
	                          "children": [
	                            {
	                              "type": "cordbook",
	                              "attr": {
	                                "data": function () {return this.item}
	                              }
	                            }
	                          ]
	                        }
	                      ]
	                    },
	                    {
	                      "type": "list-item",
	                      "attr": {
	                        "type": "loadMore"
	                      },
	                      "classList": [
	                        "load-more"
	                      ],
	                      "children": [
	                        {
	                          "type": "progress",
	                          "attr": {
	                            "type": "circular",
	                            "show": function () {return this.hasMoreData}
	                          }
	                        },
	                        {
	                          "type": "text",
	                          "attr": {
	                            "show": function () {return this.hasMoreData},
	                            "value": "加载更多"
	                          }
	                        },
	                        {
	                          "type": "text",
	                          "attr": {
	                            "show": function () {return !this.hasMoreData&&!this.isRefreshing},
	                            "value": "我是有底线的"
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
	      ]
	    }
	  ]
	}

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	module.exports = {
	  ".read-record": {
	    "width": "100%",
	    "height": "100%",
	    "flexDirection": "column",
	    "backgroundColor": "#ececec"
	  },
	  ".order-info": {
	    "height": "90px",
	    "backgroundColor": "#ffffff",
	    "borderBottomWidth": "1px",
	    "borderTopColor": "#e5e5e5",
	    "borderRightColor": "#e5e5e5",
	    "borderBottomColor": "#e5e5e5",
	    "borderLeftColor": "#e5e5e5"
	  },
	  ".order-info text": {
	    "width": "100%",
	    "textAlign": "center",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "order-info"
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
	  ".all-order": {
	    "flexDirection": "column",
	    "fontSize": "30px",
	    "color": "#999999",
	    "width": "49.5%",
	    "height": "90px",
	    "alignItems": "center",
	    "justifyContent": "center"
	  },
	  ".chapter-order": {
	    "flexDirection": "column",
	    "fontSize": "30px",
	    "color": "#999999",
	    "width": "49.5%",
	    "height": "90px",
	    "alignItems": "center",
	    "justifyContent": "center"
	  },
	  ".chapter-order .first": {
	    "borderRightWidth": "2px",
	    "borderTopColor": "#e6e6e6",
	    "borderRightColor": "#e6e6e6",
	    "borderBottomColor": "#e6e6e6",
	    "borderLeftColor": "#e6e6e6",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "chapter-order"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "first"
	        }
	      ]
	    }
	  },
	  ".order-info .active": {
	    "color": "#f76c5b",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "order-info"
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
	  ".select-line": {
	    "width": "32px",
	    "height": "2px",
	    "marginTop": "4px"
	  },
	  "progress": {
	    "color": "#f76c5b"
	  },
	  "refresh": {
	    "progressColor": "#f76c5b"
	  },
	  ".cordBook-list": {
	    "flex": 1,
	    "backgroundColor": "#ffffff"
	  },
	  ".cordBook-li": {
	    "flex": 1
	  },
	  ".load-more": {
	    "height": "80px",
	    "lineHeight": "80px",
	    "justifyContent": "center"
	  },
	  ".load-more text": {
	    "fontSize": "24px",
	    "color": "#c5c5c5",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "load-more"
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
/* 7 */,
/* 8 */
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
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(13)
	__webpack_require__(21)
	__webpack_require__(26)
	__webpack_require__(30)
	var $app_template$ = __webpack_require__(34)
	var $app_style$ = __webpack_require__(35)
	var $app_script$ = __webpack_require__(67)
	
	$app_define$('@app-component/bookstorage', [], function($app_require$, $app_exports$, $app_module$){
	     $app_script$($app_module$, $app_exports$, $app_require$)
	     if ($app_exports$.__esModule && $app_exports$.default) {
	            $app_module$.exports = $app_exports$.default
	        }
	     $app_module$.exports.template = $app_template$
	     $app_module$.exports.style = $app_style$
	})


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, $app_require$){'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
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
	};}

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(1)
	var $app_template$ = __webpack_require__(5)
	var $app_style$ = __webpack_require__(6)
	var $app_script$ = __webpack_require__(69)
	
	$app_define$('@app-component/bookcase', [], function($app_require$, $app_exports$, $app_module$){
	     $app_script$($app_module$, $app_exports$, $app_require$)
	     if ($app_exports$.__esModule && $app_exports$.default) {
	            $app_module$.exports = $app_exports$.default
	        }
	     $app_module$.exports.template = $app_template$
	     $app_module$.exports.style = $app_style$
	})


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, $app_require$){'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _personData = __webpack_require__(8);
	
	var _personData2 = _interopRequireDefault(_personData);
	
	var _bookcaseService = __webpack_require__(12);
	
	var _bookcaseService2 = _interopRequireDefault(_bookcaseService);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    data: {
	        readCord: [],
	        hasMoreData: false,
	        isRefreshing: true,
	        page: 1,
	        type: 1,
	        gType: 0,
	        isShow: false
	    },
	    onInit: function onInit() {
	        this.refresh();
	        if (this.type == 1) {
	            this.$page.setTitleBar({ text: "我的书架" });
	        } else {
	            this.$page.setTitleBar({ text: "阅读记录" });
	        }
	    },
	    showContent: function showContent(num) {
	        if (this.type == num) {
	            return;
	        }
	        this.type = num;
	        this.readCord = [];
	        if (num == 2) {
	            this.gType = 1001;
	            this.refresh();
	            this.$page.setTitleBar({ text: "阅读记录" });
	        } else {
	            this.gType = 0;
	            this.refresh();
	            this.$page.setTitleBar({ text: "我的书架" });
	        }
	    },
	    refresh: function refresh() {
	        var _this = this;
	
	        this.isShow = true;
	        this.isRefreshing = true;
	        this.hasMoreData = false;
	        this.page = 1;
	        var params = {
	            pageIndex: this.page,
	            pageSize: 10
	        };
	        if (this.gType == 1001) {
	            params.gType = 1001;
	        }
	        _personData2.default.bookInit(params).then(function (res) {
	            _this.readCord = [];
	            var lists = res.data.items;
	            if (lists.length < 10) {
	                _this.hasMoreData = false;
	            } else {
	                _this.hasMoreData = true;
	            }
	            for (var i in lists) {
	                _this.readCord.push(lists[i]);
	            }
	            _this.isRefreshing = false;
	        });
	    },
	    get: function get() {
	        var _this2 = this;
	
	        this.hasMoreData = true;
	        _personData2.default.bookInit({ pageIndex: this.page, pageSize: 10 }).then(function (res) {
	            var lists = res.data.items;
	            if (lists.length < 10) {
	                _this2.hasMoreData = false;
	            }
	            for (var i in lists) {
	                _this2.readCord.push(lists[i]);
	            }
	        });
	    },
	    loadMoreData: function loadMoreData() {
	        if (this.hasMoreData) {
	            this.page++;
	            this.get();
	        }
	    }
	};}

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(13)
	__webpack_require__(71)
	__webpack_require__(75)
	var $app_template$ = __webpack_require__(79)
	var $app_style$ = __webpack_require__(80)
	var $app_script$ = __webpack_require__(81)
	
	$app_define$('@app-component/mine', [], function($app_require$, $app_exports$, $app_module$){
	     $app_script$($app_module$, $app_exports$, $app_require$)
	     if ($app_exports$.__esModule && $app_exports$.default) {
	            $app_module$.exports = $app_exports$.default
	        }
	     $app_module$.exports.template = $app_template$
	     $app_module$.exports.style = $app_style$
	})


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

	var $app_template$ = __webpack_require__(72)
	var $app_style$ = __webpack_require__(73)
	var $app_script$ = __webpack_require__(74)
	
	$app_define$('@app-component/pannel', [], function($app_require$, $app_exports$, $app_module$){
	     $app_script$($app_module$, $app_exports$, $app_require$)
	     if ($app_exports$.__esModule && $app_exports$.default) {
	            $app_module$.exports = $app_exports$.default
	        }
	     $app_module$.exports.template = $app_template$
	     $app_module$.exports.style = $app_style$
	})


/***/ }),
/* 72 */
/***/ (function(module, exports) {

	module.exports = {
	  "type": "div",
	  "attr": {},
	  "classList": [
	    "pannel"
	  ],
	  "events": {
	    "click": "route"
	  },
	  "children": [
	    {
	      "type": "div",
	      "attr": {},
	      "classList": [
	        "pannel-icon"
	      ],
	      "children": [
	        {
	          "type": "image",
	          "attr": {
	            "src": function () {return this.icon}
	          }
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "attr": {},
	      "classList": [
	        "pannel-title"
	      ],
	      "children": [
	        {
	          "type": "text",
	          "attr": {
	            "value": function () {return this.title}
	          }
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "attr": {},
	      "classList": [
	        "pannel-label"
	      ],
	      "children": [
	        {
	          "type": "text",
	          "attr": {
	            "value": function () {return this.mark}
	          },
	          "classList": [
	            "label-text"
	          ]
	        },
	        {
	          "type": "image",
	          "attr": {
	            "src": "../Common/imgs/next.png"
	          }
	        }
	      ]
	    }
	  ]
	}

/***/ }),
/* 73 */
/***/ (function(module, exports) {

	module.exports = {
	  ".pannel": {
	    "paddingTop": "0px",
	    "paddingRight": "30px",
	    "paddingBottom": "0px",
	    "paddingLeft": "30px",
	    "width": "750px",
	    "height": "110px",
	    "backgroundColor": "#ffffff",
	    "fontSize": "32px",
	    "borderTopWidth": "0.5px",
	    "borderRightWidth": "0.5px",
	    "borderBottomWidth": "0.5px",
	    "borderLeftWidth": "0.5px",
	    "borderTopColor": "#e4e4e4",
	    "borderRightColor": "#e4e4e4",
	    "borderBottomColor": "#e4e4e4",
	    "borderLeftColor": "#e4e4e4"
	  },
	  ".pannel .pannel-icon image": {
	    "marginTop": "38px",
	    "width": "40px",
	    "height": "40px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "pannel"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "pannel-icon"
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
	  ".pannel .pannel-title": {
	    "flex": 1,
	    "marginLeft": "28px",
	    "color": "#333333",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "pannel"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "pannel-title"
	        }
	      ]
	    }
	  },
	  ".pannel .pannel-label": {
	    "fontSize": "28px",
	    "color": "#99a9c3",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "pannel"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "pannel-label"
	        }
	      ]
	    }
	  },
	  ".pannel .pannel-label image": {
	    "marginTop": "38px",
	    "width": "36px",
	    "height": "36px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "pannel"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "pannel-label"
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
	  }
	}

/***/ }),
/* 74 */
/***/ (function(module, exports) {

	module.exports = function(module, exports, $app_require$){'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _system = $app_require$('@app-module/system.router');
	
	var _system2 = _interopRequireDefault(_system);
	
	var _system3 = $app_require$('@app-module/system.prompt');
	
	var _system4 = _interopRequireDefault(_system3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    props: ['icon', 'title', 'mark', 'url', 'type'],
	    route: function route() {
	        var params = {};
	        if (this.type == 2) {
	            params.type = 2;
	            params.gType = 1001;
	        }
	        if (this.url) {
	            _system2.default.push({
	                uri: this.url,
	                params: params
	            });
	        } else {
	            _system4.default.showDialog({
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
	        }
	    }
	};}

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

	var $app_template$ = __webpack_require__(76)
	var $app_style$ = __webpack_require__(77)
	var $app_script$ = __webpack_require__(78)
	
	$app_define$('@app-component/userinfo', [], function($app_require$, $app_exports$, $app_module$){
	     $app_script$($app_module$, $app_exports$, $app_require$)
	     if ($app_exports$.__esModule && $app_exports$.default) {
	            $app_module$.exports = $app_exports$.default
	        }
	     $app_module$.exports.template = $app_template$
	     $app_module$.exports.style = $app_style$
	})


/***/ }),
/* 76 */
/***/ (function(module, exports) {

	module.exports = {
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
	        "avatar"
	      ],
	      "events": {
	        "click": "linkLogin"
	      },
	      "children": [
	        {
	          "type": "image",
	          "attr": {
	            "src": function () {return this.data.avatar==undefined?'http://client.h5.luochu.com/img/default_avatar.png':this.data.avatar}
	          }
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "attr": {
	        "show": function () {return this.data.id!=undefined}
	      },
	      "classList": [
	        "user-content"
	      ],
	      "children": [
	        {
	          "type": "div",
	          "attr": {},
	          "classList": [
	            "info"
	          ],
	          "children": [
	            {
	              "type": "text",
	              "attr": {
	                "value": function () {return this.data.nickName}
	              },
	              "classList": [
	                "name"
	              ]
	            },
	            {
	              "type": "image",
	              "attr": {
	                "src": function () {return this.data.gender?'../Common/imgs/nanren.png':'../Common/imgs/nvren.png'}
	              }
	            }
	          ]
	        },
	        {
	          "type": "text",
	          "attr": {
	            "value": function () {return '余额：' + (this.data.data.vipMoney) + '悠空币+' + (this.data.data.extcredits2) + '阅读币'}
	          },
	          "classList": [
	            "balance"
	          ],
	          "shown": function () {return this.data.data}
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "attr": {
	        "show": function () {return this.data.id==undefined}
	      },
	      "classList": [
	        "user-content"
	      ],
	      "events": {
	        "click": "linkLogin"
	      },
	      "children": [
	        {
	          "type": "text",
	          "attr": {
	            "value": "请登录"
	          },
	          "classList": [
	            "nologin"
	          ]
	        }
	      ]
	    }
	  ]
	}

/***/ }),
/* 77 */
/***/ (function(module, exports) {

	module.exports = {
	  ".user-info": {
	    "flex": 1
	  },
	  ".user-info .avatar": {
	    "marginLeft": "20px",
	    "_meta": {
	      "ruleDef": [
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
	          "v": "avatar"
	        }
	      ]
	    }
	  },
	  ".user-info .avatar image": {
	    "marginTop": "38px",
	    "width": "105px",
	    "height": "105px",
	    "borderRadius": "105px",
	    "borderTopWidth": "4px",
	    "borderRightWidth": "4px",
	    "borderBottomWidth": "4px",
	    "borderLeftWidth": "4px",
	    "borderTopColor": "#ffffff",
	    "borderRightColor": "#ffffff",
	    "borderBottomColor": "#ffffff",
	    "borderLeftColor": "#ffffff",
	    "_meta": {
	      "ruleDef": [
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
	  ".user-info .user-content": {
	    "marginLeft": "20px",
	    "width": "500px",
	    "flexDirection": "column",
	    "_meta": {
	      "ruleDef": [
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
	          "v": "user-content"
	        }
	      ]
	    }
	  },
	  ".user-info .name": {
	    "fontSize": "32px",
	    "lineHeight": "50px",
	    "color": "#ffffff",
	    "_meta": {
	      "ruleDef": [
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
	  ".user-info .info": {
	    "marginTop": "36px",
	    "alignItems": "center",
	    "_meta": {
	      "ruleDef": [
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
	          "v": "info"
	        }
	      ]
	    }
	  },
	  ".user-info .info image": {
	    "marginLeft": "10px",
	    "width": "32px",
	    "height": "32px",
	    "_meta": {
	      "ruleDef": [
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
	          "v": "info"
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
	  ".user-info .balance": {
	    "marginTop": "16px",
	    "fontSize": "28px",
	    "color": "#ffffff",
	    "_meta": {
	      "ruleDef": [
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
	          "v": "balance"
	        }
	      ]
	    }
	  },
	  ".user-info .nologin": {
	    "marginTop": "70px",
	    "fontSize": "32px",
	    "color": "#ffffff",
	    "_meta": {
	      "ruleDef": [
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
	          "v": "nologin"
	        }
	      ]
	    }
	  }
	}

/***/ }),
/* 78 */
/***/ (function(module, exports) {

	module.exports = function(module, exports, $app_require$){'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _system = $app_require$('@app-module/system.router');
	
	var _system2 = _interopRequireDefault(_system);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    props: ['data'],
	    linkLogin: function linkLogin() {
	        _system2.default.push({
	            uri: 'Views/Login'
	        });
	    }
	};}

/***/ }),
/* 79 */
/***/ (function(module, exports) {

	module.exports = {
	  "type": "div",
	  "attr": {},
	  "classList": [
	    "mine"
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
	        "header"
	      ],
	      "children": [
	        {
	          "type": "userinfo",
	          "attr": {
	            "data": function () {return this.data}
	          }
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "attr": {},
	      "classList": [
	        "section"
	      ],
	      "children": [
	        {
	          "type": "div",
	          "attr": {},
	          "classList": [
	            "special-list"
	          ],
	          "children": [
	            {
	              "type": "pannel",
	              "attr": {
	                "icon": "../Common/imgs/money.png",
	                "url": function () {return this.loginState?'Views/Pay':'Views/Login'},
	                "title": "充值",
	                "mark": "充值有礼"
	              }
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "attr": {},
	          "classList": [
	            "power-list"
	          ],
	          "children": [
	            {
	              "type": "pannel",
	              "attr": {
	                "icon": "../Common/imgs/record.png",
	                "title": "阅读记录",
	                "url": function () {return this.loginState?'Bookcase':'Views/Login'},
	                "type": "2"
	              }
	            },
	            {
	              "type": "pannel",
	              "attr": {
	                "icon": "../Common/imgs/pay-record.png",
	                "title": "充值记录",
	                "url": function () {return this.loginState?'Views/Recharge':'Views/Login'}
	              }
	            },
	            {
	              "type": "pannel",
	              "attr": {
	                "icon": "../Common/imgs/paper.png",
	                "title": "消费记录",
	                "url": function () {return this.loginState?'Views/SubRecords':'Views/Login'}
	              }
	            },
	            {
	              "type": "pannel",
	              "attr": {
	                "icon": "../Common/imgs/personage.png",
	                "title": "个人资料",
	                "url": function () {return this.loginState?'Views/UserInfo':'Views/Login'}
	              }
	            },
	            {
	              "type": "pannel",
	              "attr": {
	                "icon": "../Common/imgs/phone.png",
	                "title": "绑定手机号",
	                "url": function () {return this.loginState?'Views/Bound':'Views/Login'},
	                "mark": "赠100币"
	              },
	              "shown": function () {return this.data.mob==''}
	            },
	            {
	              "type": "pannel",
	              "attr": {
	                "icon": "../Common/imgs/service.png",
	                "title": "联系客服",
	                "url": function () {return this.loginState?'Views/Service':'Views/Login'},
	                "mark": "每天领书币"
	              }
	            },
	            {
	              "type": "div",
	              "attr": {},
	              "classList": [
	                "control"
	              ],
	              "events": {
	                "click": "linkLogin"
	              },
	              "children": [
	                {
	                  "type": "text",
	                  "attr": {
	                    "value": "切换账号"
	                  },
	                  "shown": function () {return this.data.id}
	                },
	                {
	                  "type": "text",
	                  "attr": {
	                    "value": "登录"
	                  },
	                  "shown": function () {return !this.data.id}
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
/* 80 */
/***/ (function(module, exports) {

	module.exports = {
	  ".mine": {
	    "flexDirection": "column",
	    "backgroundColor": "#ECECEC"
	  },
	  ".mine .header": {
	    "width": "100%",
	    "height": "174px",
	    "backgroundColor": "#f76c5b",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "mine"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "header"
	        }
	      ]
	    }
	  },
	  ".mine .section": {
	    "flexDirection": "column",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "mine"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "section"
	        }
	      ]
	    }
	  },
	  ".mine .power-list": {
	    "flexDirection": "column",
	    "marginTop": "20px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "mine"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "power-list"
	        }
	      ]
	    }
	  },
	  ".mine .control": {
	    "marginTop": "20px",
	    "marginRight": "0px",
	    "marginBottom": "20px",
	    "marginLeft": "0px",
	    "height": "110px",
	    "justifyContent": "center",
	    "backgroundColor": "#ffffff",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "mine"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "control"
	        }
	      ]
	    }
	  },
	  ".mine .control text": {
	    "fontSize": "32px",
	    "color": "#f76c5b",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "mine"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "control"
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
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, $app_require$){'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _authentication = __webpack_require__(11);
	
	var _authentication2 = _interopRequireDefault(_authentication);
	
	var _system = $app_require$('@app-module/system.router');
	
	var _system2 = _interopRequireDefault(_system);
	
	var _system3 = $app_require$('@app-module/system.prompt');
	
	var _system4 = _interopRequireDefault(_system3);
	
	var _readingConfig = __webpack_require__(38);
	
	var _readingConfig2 = _interopRequireDefault(_readingConfig);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    props: ['data'],
	    data: {
	        loginState: false,
	        option: {
	            show: true,
	            background: 'rgb(255,255,255)',
	            text: '拼命加载中...'
	        }
	    },
	    onInit: function onInit() {
	        this.get();
	    },
	    get: function get() {
	        var _this = this;
	
	        _authentication2.default.getLoginState().then(function (res) {
	            _this.option.show = false;
	            _this.loginState = res;
	        });
	    },
	    linkLogin: function linkLogin() {
	        _system2.default.push({
	            uri: 'Views/Login'
	        });
	    }
	};}

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(13)
	var $app_template$ = __webpack_require__(83)
	var $app_style$ = __webpack_require__(84)
	var $app_script$ = __webpack_require__(85)
	
	$app_define$('@app-component/login', [], function($app_require$, $app_exports$, $app_module$){
	     $app_script$($app_module$, $app_exports$, $app_require$)
	     if ($app_exports$.__esModule && $app_exports$.default) {
	            $app_module$.exports = $app_exports$.default
	        }
	     $app_module$.exports.template = $app_template$
	     $app_module$.exports.style = $app_style$
	})


/***/ }),
/* 83 */
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
/* 84 */
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
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, $app_require$){'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
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
	};}

/***/ }),
/* 86 */
/***/ (function(module, exports) {

	module.exports = {
	  "type": "div",
	  "attr": {},
	  "classList": [
	    "luochu-page"
	  ],
	  "children": [
	    {
	      "type": "div",
	      "attr": {},
	      "classList": [
	        "flexible-tabs"
	      ],
	      "children": [
	        {
	          "type": "tabs",
	          "attr": {
	            "index": function () {return this.currentIndex}
	          },
	          "events": {
	            "change": "changeTabactive"
	          },
	          "children": [
	            {
	              "type": "tab-content",
	              "attr": {},
	              "classList": [
	                "flexible-tab-content"
	              ],
	              "children": [
	                {
	                  "type": "div",
	                  "attr": {},
	                  "classList": [
	                    "tab-content-section"
	                  ],
	                  "children": [
	                    {
	                      "type": "bookstorage",
	                      "attr": {},
	                      "shown": function () {return this.tabItems[0].show}
	                    }
	                  ]
	                },
	                {
	                  "type": "div",
	                  "attr": {},
	                  "classList": [
	                    "tab-content-section"
	                  ],
	                  "children": [
	                    {
	                      "type": "bookcase",
	                      "attr": {},
	                      "shown": function () {return this.tabItems[1].show&&this.loginState}
	                    },
	                    {
	                      "type": "login",
	                      "attr": {},
	                      "shown": function () {return this.tabItems[1].show&&!this.loginState}
	                    }
	                  ]
	                },
	                {
	                  "type": "div",
	                  "attr": {},
	                  "classList": [
	                    "tab-content-section"
	                  ],
	                  "children": [
	                    {
	                      "type": "mine",
	                      "attr": {
	                        "data": function () {return this.userData}
	                      },
	                      "shown": function () {return this.tabItems[2].show}
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
	            "flexible-tabbar"
	          ],
	          "children": [
	            {
	              "type": "div",
	              "attr": {},
	              "repeat": {
	                "exp": function () {return this.tabItems},
	                "key": "index",
	                "value": "item"
	              },
	              "classList": [
	                "tab-item"
	              ],
	              "events": {
	                "click": function (evt) {this.clickTabBar(this.index,evt)}
	              },
	              "children": [
	                {
	                  "type": "image",
	                  "attr": {
	                    "src": function () {return this.item.icon[this.currentIndex===this.index?1:0]}
	                  },
	                  "classList": [
	                    "tab-icon"
	                  ]
	                },
	                {
	                  "type": "text",
	                  "attr": {
	                    "value": function () {return this.item.text}
	                  },
	                  "classList": function () {return [this.currentIndex===this.index?'active':'tab-text']}
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
/* 87 */
/***/ (function(module, exports) {

	module.exports = {
	  ".luochu-page": {
	    "backgroundColor": "#ececec"
	  },
	  ".luochu-page .flexible-tabs": {
	    "display": "flex",
	    "flexDirection": "column",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "luochu-page"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "flexible-tabs"
	        }
	      ]
	    }
	  },
	  ".flexible-tabs .flexible-tabbar": {
	    "display": "flex",
	    "borderTopWidth": "2px",
	    "borderTopColor": "#cecece",
	    "height": "100px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "flexible-tabs"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "flexible-tabbar"
	        }
	      ]
	    }
	  },
	  ".flexible-tabbar .tab-item": {
	    "flex": 1,
	    "display": "flex",
	    "alignItems": "center",
	    "flexDirection": "column",
	    "justifyContent": "center",
	    "fontSize": "22px",
	    "backgroundColor": "#ffffff",
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
	  ".tab-item .tab-icon": {
	    "width": "40px",
	    "height": "40px",
	    "_meta": {
	      "ruleDef": [
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
	          "v": "tab-icon"
	        }
	      ]
	    }
	  },
	  ".tab-item .tab-text": {
	    "fontSize": "22px",
	    "color": "#919292",
	    "_meta": {
	      "ruleDef": [
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
	          "v": "tab-text"
	        }
	      ]
	    }
	  },
	  ".tab-item .active": {
	    "fontSize": "22px",
	    "color": "#f76c5b",
	    "_meta": {
	      "ruleDef": [
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
	          "v": "active"
	        }
	      ]
	    }
	  }
	}

/***/ }),
/* 88 */
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
	
	var _system = $app_require$('@app-module/system.router');
	
	var _system2 = _interopRequireDefault(_system);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    data: function data() {
	        return {
	            currentIndex: 0,
	            loginState: false,
	            userData: {},
	            isStrike: true,
	            tabItems: [{
	                text: '书城',
	                icon: ['../Common/imgs/bookstorage.png', '../Common/imgs/bookstorage-active.png'],
	                show: true
	            }, {
	                text: '书架',
	                icon: ['../Common/imgs/bookbase.png', '../Common/imgs/bookbase-active.png'],
	                show: false
	            }, {
	                text: '我的',
	                icon: ['../Common/imgs/user.png', '../Common/imgs/user-active.png'],
	                show: false
	            }]
	        };
	    },
	    onShow: function onShow() {
	        if (this.isStrike) {
	            this.getMine();
	        }
	    },
	    onInit: function onInit() {
	        var _this = this;
	
	        _authentication2.default.getLoginState().then(function (res) {
	            _this.loginState = res;
	            _this.getMine();
	        });
	    },
	    getMine: function getMine() {
	        var _this2 = this;
	
	        this.isStrike = false;
	        _personData2.default.personInfo().then(function (res) {
	            _this2.userData = res.data;
	            _authentication2.default.setUserData(res.data);
	            _this2.isStrike = true;
	        });
	    },
	    changeTabactive: function changeTabactive(evt) {
	        this.changeCurrent(evt.index);
	    },
	    clickTabBar: function clickTabBar(index) {
	        this.changeCurrent(index);
	    },
	    changeCurrent: function changeCurrent(index) {
	        if (index == 1 && !this.loginState) {
	            _readingConfig2.default.setRoute({
	                uri: _system2.default.getState().name,
	                params: {
	                    currentIndex: 1
	                }
	            });
	            this.$page.setTitleBar({ text: '登录' });
	            this.tabItems[index].show = true;
	            this.currentIndex = index;
	        } else {
	            this.$page.setTitleBar({ text: this.tabItems[index].text });
	            this.tabItems[index].show = true;
	            this.currentIndex = index;
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