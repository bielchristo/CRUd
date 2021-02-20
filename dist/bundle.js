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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/index.js":
/*!*************************!*\
  !*** ./client/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function handleClick() {\n  // value from the input box\n  let message = document.getElementById('message-input').value;\n  let list = document.getElementsByTagName('ul')[0];\n  let note = document.createElement('li');\n  note.innerHTML = message;\n  list.appendChild(note);\n  fetch('/', {\n    method: 'POST',\n    body: JSON.stringify({\n      message\n    }),\n    header: {\n      'Content-type': 'application/json'\n    }\n  }).then(data => data.json()).then(data => console.log('POST: ', data)).catch(err => console.log('error in POST: ', err));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvaW5kZXguanM/MTk0MiJdLCJuYW1lcyI6WyJoYW5kbGVDbGljayIsIm1lc3NhZ2UiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwidmFsdWUiLCJsaXN0IiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJub3RlIiwiY3JlYXRlRWxlbWVudCIsImlubmVySFRNTCIsImFwcGVuZENoaWxkIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImhlYWRlciIsInRoZW4iLCJkYXRhIiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJjYXRjaCIsImVyciJdLCJtYXBwaW5ncyI6IkFBQUEsU0FBU0EsV0FBVCxHQUFzQjtBQUNwQjtBQUNBLE1BQUlDLE9BQU8sR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLGVBQXhCLEVBQXlDQyxLQUF2RDtBQUNBLE1BQUlDLElBQUksR0FBR0gsUUFBUSxDQUFDSSxvQkFBVCxDQUE4QixJQUE5QixFQUFvQyxDQUFwQyxDQUFYO0FBQ0EsTUFBSUMsSUFBSSxHQUFHTCxRQUFRLENBQUNNLGFBQVQsQ0FBdUIsSUFBdkIsQ0FBWDtBQUNBRCxNQUFJLENBQUNFLFNBQUwsR0FBaUJSLE9BQWpCO0FBQ0FJLE1BQUksQ0FBQ0ssV0FBTCxDQUFpQkgsSUFBakI7QUFFQUksT0FBSyxDQUFDLEdBQUQsRUFBTTtBQUNUQyxVQUFNLEVBQUUsTUFEQztBQUVUQyxRQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlO0FBQUVkO0FBQUYsS0FBZixDQUZHO0FBR1RlLFVBQU0sRUFBRTtBQUNOLHNCQUFnQjtBQURWO0FBSEMsR0FBTixDQUFMLENBT0NDLElBUEQsQ0FPT0MsSUFBRCxJQUFVQSxJQUFJLENBQUNDLElBQUwsRUFQaEIsRUFRQ0YsSUFSRCxDQVFPQyxJQUFELElBQVVFLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFFBQVosRUFBc0JILElBQXRCLENBUmhCLEVBU0NJLEtBVEQsQ0FTUUMsR0FBRCxJQUFTSCxPQUFPLENBQUNDLEdBQVIsQ0FBWSxpQkFBWixFQUErQkUsR0FBL0IsQ0FUaEI7QUFXRCIsImZpbGUiOiIuL2NsaWVudC9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGhhbmRsZUNsaWNrKCl7XG4gIC8vIHZhbHVlIGZyb20gdGhlIGlucHV0IGJveFxuICBsZXQgbWVzc2FnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZXNzYWdlLWlucHV0JykudmFsdWVcbiAgbGV0IGxpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgndWwnKVswXVxuICBsZXQgbm90ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcbiAgbm90ZS5pbm5lckhUTUwgPSBtZXNzYWdlXG4gIGxpc3QuYXBwZW5kQ2hpbGQobm90ZSlcblxuICBmZXRjaCgnLycsIHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IG1lc3NhZ2UgfSksXG4gICAgaGVhZGVyOiB7XG4gICAgICAnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIH1cbiAgfSlcbiAgLnRoZW4oKGRhdGEpID0+IGRhdGEuanNvbigpKVxuICAudGhlbigoZGF0YSkgPT4gY29uc29sZS5sb2coJ1BPU1Q6ICcsIGRhdGEpKVxuICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coJ2Vycm9yIGluIFBPU1Q6ICcsIGVycikpXG5cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./client/index.js\n");

/***/ }),

/***/ 0:
/*!*******************************!*\
  !*** multi ./client/index.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./client/index.js */"./client/index.js");


/***/ })

/******/ });