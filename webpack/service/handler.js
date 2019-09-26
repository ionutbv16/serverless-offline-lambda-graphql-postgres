module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./handler.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./config/db.js":
/*!**********************!*\
  !*** ./config/db.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  database: 'db_name',
  host: 'localhost',
  port: '3306',
  user: 'root',
  password: ''
};

/***/ }),

/***/ "./db_connect.js":
/*!***********************!*\
  !*** ./db_connect.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const dbConfig = __webpack_require__(/*! ./config/db */ "./config/db.js");

const db = __webpack_require__(/*! serverless-mysql */ "serverless-mysql")({
  config: dbConfig
});

module.exports = db;

/***/ }),

/***/ "./handler.js":
/*!********************!*\
  !*** ./handler.js ***!
  \********************/
/*! exports provided: handler, getAllTodos, getTodo, createTodo, updateTodo, deleteTodo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handler", function() { return handler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllTodos", function() { return getAllTodos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTodo", function() { return getTodo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTodo", function() { return createTodo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateTodo", function() { return updateTodo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteTodo", function() { return deleteTodo; });
/* harmony import */ var serverless_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! serverless-http */ "serverless-http");
/* harmony import */ var serverless_http__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(serverless_http__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var graphql_playground_middleware_express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql-playground-middleware-express */ "graphql-playground-middleware-express");
/* harmony import */ var graphql_playground_middleware_express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_playground_middleware_express__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var apollo_server_express__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apollo-server-express */ "apollo-server-express");
/* harmony import */ var apollo_server_express__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(apollo_server_express__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_3__);


const db = __webpack_require__(/*! ./db_connect */ "./db_connect.js");





const typeDefs = apollo_server_express__WEBPACK_IMPORTED_MODULE_2__["gql"]`
  type Query {
    hello: String
  }
`;
const resolvers = {
  Query: {
    hello: () => "world"
  }
};
const app = express__WEBPACK_IMPORTED_MODULE_3___default()();
const server = new apollo_server_express__WEBPACK_IMPORTED_MODULE_2__["ApolloServer"]({
  typeDefs,
  resolvers,
  path: "/graphql"
});
server.applyMiddleware({
  app
});
app.get("/playground", graphql_playground_middleware_express__WEBPACK_IMPORTED_MODULE_1___default()({
  endpoint: "/graphql"
}));
const handler = serverless_http__WEBPACK_IMPORTED_MODULE_0___default()(app);

const getAllTodos = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false; // Run your query

  let results;

  try {
    results = await db.query('SELECT * FROM users'); // Return the results

    return {
      statusCode: 200,
      body: JSON.stringify(results)
    };
  } catch (err) {} // Run clean up function


  await db.end();
  /*
    db.query('SELECT * FROM users')
      .then(res => {
        callback(null, {
          statusCode: 200,
          body: JSON.stringify(res)
        })
      })
      .catch(e => {
        console.log(e);
        callback(null, {
          statusCode: e.statusCode || 500,
          body: 'Error: Could not find Todos: ' + e
        })
      })
  */
};

const getTodo = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  db.getById('todo', event.pathParameters.id).then(res => {
    callback(null, {
      statusCode: 200,
      body: JSON.stringify(res)
    });
  }).catch(e => {
    callback(null, {
      statusCode: e.statusCode || 500,
      body: "Could not find Todo: " + e
    });
  });
};

const createTodo = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  const data = JSON.parse(event.body);
  db.insert('todo', data).then(res => {
    callback(null, {
      statusCode: 200,
      body: "Todo Created!" + res
    });
  }).catch(e => {
    callback(null, {
      statusCode: e.statusCode || 500,
      body: "Could not create Todo " + e
    });
  });
};

const updateTodo = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  const data = JSON.parse(event.body);
  db.updateById('todo', event.pathParameters.id, data).then(res => {
    callback(null, {
      statusCode: 200,
      body: "Todo Updated!" + res
    });
  }).catch(e => {
    callback(null, {
      statusCode: e.statusCode || 500,
      body: "Could not update Todo" + e
    });
  });
};

const deleteTodo = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  db.deleteById('todo', event.pathParameters.id).then(res => {
    callback(null, {
      statusCode: 200,
      body: "Todo Deleted!"
    });
  }).catch(e => {
    callback(null, {
      statusCode: e.statusCode || 500,
      body: "Could not delete Todo" + e
    });
  });
};



/***/ }),

/***/ "apollo-server-express":
/*!****************************************!*\
  !*** external "apollo-server-express" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-server-express");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "graphql-playground-middleware-express":
/*!********************************************************!*\
  !*** external "graphql-playground-middleware-express" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql-playground-middleware-express");

/***/ }),

/***/ "serverless-http":
/*!**********************************!*\
  !*** external "serverless-http" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("serverless-http");

/***/ }),

/***/ "serverless-mysql":
/*!***********************************!*\
  !*** external "serverless-mysql" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("serverless-mysql");

/***/ })

/******/ });
//# sourceMappingURL=handler.js.map