/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _Main = __webpack_require__(1);

	var _Main2 = _interopRequireDefault(_Main);

	var _User = __webpack_require__(3);

	var _User2 = _interopRequireDefault(_User);

	var _list = __webpack_require__(4);

	var _list2 = _interopRequireDefault(_list);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var angularModule = angular.module("myApp", []);
	angularModule.service("UserService", _User2.default);

	angularModule.directive("listDirective", function () {
	  return new _list2.default();
	});
	angularModule.controller("MainCtrl", _Main2.default);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Customer = __webpack_require__(2);

	var _Customer2 = _interopRequireDefault(_Customer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var MainCtrl = function () {
	    function MainCtrl($scope, UserService) {
	        var _this = this;

	        _classCallCheck(this, MainCtrl);

	        this.title = "New Angular";
	        this.users = UserService;

	        this.userlist = [{
	            name: "Lucky",
	            age: 5
	        }, {
	            name: "Kutty",
	            age: 1
	        }];

	        this.newUser = new _Customer2.default();

	        $scope.$watch(function () {
	            return _this.title;
	        }, function (newvalue, oldValue) {
	            console.log("SCOPE WATCH CALLED");
	        });

	        this.users.getCustomers().then(function (res) {
	            _this.customers = res.data;
	        });
	        this.IsEditable = false;
	    }

	    _createClass(MainCtrl, [{
	        key: "getCustomers",
	        value: function getCustomers() {
	            var _this2 = this;

	            return this.users.getCustomers().then(function (res) {
	                _this2.customers = res.data;
	            });
	        }
	    }, {
	        key: "addUser",
	        value: function addUser(user) {
	            return this.users.addCustomer(user).then(function (res) {
	                console.log("Successfully created");
	            });
	        }
	    }, {
	        key: "getCustomerById",
	        value: function getCustomerById(customer) {
	            var _this3 = this;

	            return this.users.getCustomerById(customer.id).then(function (res) {
	                _this3.IsEditable = true;
	                _this3.newUser = res.data;
	            });
	        }
	    }, {
	        key: "reset",
	        value: function reset() {
	            this.IsEditable = false;
	            this.newUser = new _Customer2.default();
	        }
	    }, {
	        key: "removeUser",
	        value: function removeUser(customer) {
	            return this.users.removeUser(customer.id).then(function () {
	                console.log("SUCCESS");
	            });
	        }
	    }, {
	        key: "updateUser",
	        value: function updateUser(customer) {
	            console.log(customer);
	            return this.users.updateUser(customer, customer.id).then(function () {
	                console.log("SUCCESS");
	            });
	        }
	    }]);

	    return MainCtrl;
	}();

	exports.default = MainCtrl;

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var NewCustomer = function NewCustomer() {
	    _classCallCheck(this, NewCustomer);

	    this.firstname = "";
	    this.lastName = "";
	    this.mobileNo = "";
	    this.email = "";
	    this.password = "";
	};

	exports.default = NewCustomer;

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var UserService = function () {
	    function UserService($http) {
	        _classCallCheck(this, UserService);

	        this.$http = $http;
	    }

	    _createClass(UserService, [{
	        key: 'addCustomer',
	        value: function addCustomer(user) {
	            return this.$http({ method: "POST", url: 'http://localhost:2000/api/Customers', data: user });
	        }
	    }, {
	        key: 'getCustomers',
	        value: function getCustomers() {
	            // Example service function
	            return this.$http({ method: 'GET', url: 'http://localhost:2000/api/Customers' });
	        }
	    }, {
	        key: 'getCustomerById',
	        value: function getCustomerById(id) {
	            return this.$http({ method: 'GET', url: 'http://localhost:2000/api/Customers/' + id });
	        }
	    }, {
	        key: 'removeUser',
	        value: function removeUser(id) {
	            return this.$http({ method: "DELETE", url: 'http://localhost:2000/api/Customers/' + id });
	        }
	    }, {
	        key: 'updateUser',
	        value: function updateUser(user, id) {
	            return this.$http({ method: "PUT", url: 'http://localhost:2000/api/Customers/' + id, data: user });
	        }
	    }]);

	    return UserService;
	}();

	exports.default = UserService;

	UserService.$inject = ['$http'];

/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var listDirective = function () {
	    function listDirective() {
	        _classCallCheck(this, listDirective);

	        this.restrict = "EA";
	        this.scope = {
	            data: "=",
	            isEditable: "=",
	            addUser: "&",
	            updateUser: "&"
	        };
	        this.templateUrl = "./public/html/AddUser.html";

	        //this.controller = ListDirectiveController;
	        //this.controllerAs = 'ctrl';
	        //this.bindToController = true;
	    }

	    _createClass(listDirective, [{
	        key: "compile",
	        value: function compile() {}
	    }, {
	        key: "link",
	        value: function link() {}
	    }]);

	    return listDirective;
	}();

	exports.default = listDirective;

	var ListDirectiveController = function ListDirectiveController() {
	    _classCallCheck(this, ListDirectiveController);

	    this.name = "Mahipal";
	};

/***/ }
/******/ ]);