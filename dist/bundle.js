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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


/* harmony default export */ __webpack_exports__["a"] = (function (containerID) {
	this.wat = 'hello'
	this.container = document.getElementById(containerID)
	this.start = `<button type="button" id="start">Start</button>`
	this.stop = `<button type="button" id="stop">Stop</button>`
	this.mediaOptions = {
        video: {
          tag: 'video',
          type: 'video/webm',
          ext: '.mp4',
          gUM: {video: true, audio: true}
        },
        audio: {
          tag: 'audio',
          type: 'audio/mp3',
          ext: '.mp3',
          gUM: {audio: true}
        }
      }
	this.mediaType = this.mediaOptions.audio
	this.stream = null
	this.recorder = null
	this.chunks = null

	this.container.insertAdjacentHTML('beforeend', this.start)
	this.container.insertAdjacentHTML('beforeend', this.stop)

	this.initialiseMedia = function () {
		navigator.mediaDevices.getUserMedia(this.mediaType.gUM).then(_stream => {
	    this.stream = _stream;
	    // id('gUMArea').style.display = 'none';
	    // id('btns').style.display = 'inherit';
	    this.start.removeAttribute('disabled');
	    this.recorder = new MediaRecorder(stream);
	    this.recorder.ondataavailable = e => {
	      this.chunks.push(e.data);
	      // if(this.recorder.state == 'inactive')  makeLink();
	    };
	    log('got media successfully');
	  }).catch(log);
	}
	
	/**
	 * Changes default media type
	 */
	this.setMediaType = function (type) {
		if (type == 'video') {
			this.mediaType = this.mediaOptions.video
		} else {
			this.mediaType = this.mediaOptions.audio
		}
	}

	/**
	 * Returns current Media type
	 */
	 this.getMediaType = function() {
	 	return this.mediaType.tag
	 }
});

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__recorder__ = __webpack_require__(0);


var rec = new __WEBPACK_IMPORTED_MODULE_0__recorder__["a" /* default */]('gUMArea')
rec.setMediaType('video')
// alert(rec.getMediaType())
rec.initialiseMedia()

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map