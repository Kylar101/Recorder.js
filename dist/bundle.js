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
	let log = console.log.bind(console)
	this.container = document.getElementById(containerID)
	this.start = document.getElementById('start')
	this.stop = document.getElementById('stop')
	this.counter = 0
	this.startButton = `<button type="button" id="start">Start</button>`
	this.stopButton = `<button type="button" id="stop">Stop</button>`
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

	this.container.insertAdjacentHTML('beforeend', this.startButton)
	this.container.insertAdjacentHTML('beforeend', this.stopButton)

	this.initialiseMedia = function () {
		navigator.mediaDevices.getUserMedia(this.mediaType.gUM).then(_stream => {
	    this.stream = _stream
	    document.getElementById('start').removeAttribute('disabled')
	    this.recorder = new MediaRecorder(this.stream)
	    this.recorder.ondataavailable = e => {
	      this.chunks.push(e.data)
	      if(this.recorder.state == 'inactive')  this.makeLink()
	    }
	    log('got media successfully')
	  }).catch(log)
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
	 * Toggles Media Type
	 */

	 this.toggleMediaType = function () {
	 	if (this.mediaType.tag == 'audio') {
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

	 /**
	  * Starts recording
	  */
	  this.startRecording = function () {
		  document.getElementById('start').disabled = true
		  document.getElementById('stop').removeAttribute('disabled')
		  this.chunks=[]
		  this.recorder.start()
	  }

	  /**
	   * Stops recording
	   */
	  this.stopRecording = function () {
		  document.getElementById('stop').disabled = true
		  this.recorder.stop()
		  document.getElementById('start').removeAttribute('disabled')
	  }

	  /**
	   * generates the download button
	   */

	  this.makeLink = function () {
		  let blob = new Blob(this.chunks, {type: this.mediaType.type })
		    , url = URL.createObjectURL(blob)
		    , li = document.createElement('div')
		    , mt = document.createElement(this.mediaType.tag)
		    , hf = document.createElement('a')
		    , dl = document.createElement('a')
			this.counter++
		  mt.controls = true
		  mt.src = url
		  mt.id = 'media-file'

		  hf.href = url
		  hf.download = `${this.guid()}`

		  li.id = `${hf.download}`

		  hf.innerHTML = `download ${hf.download}${this.mediaType.ext}`
		  hf.id = 'download-media-file'
		  hf.classList.add('btn')

		  dl.innerHTML = `delete media`
		  dl.id = `delete-${this.counter}`
		  dl.classList.add('btn')
		  dl.href = '#'

		  li.appendChild(mt)
		  li.appendChild(hf)
		  li.appendChild(dl)
		  this.container.appendChild(li)

		  document.getElementById(`delete-${this.counter}`).addEventListener('click', ()=> {
		  	document.getElementById(hf.download).outerHTML = ''
		  })
	  }

	  /**
	   * Generates a unique filename
	   */

	  this.guid = function () {
	  	return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
	    s4() + '-' + s4() + s4() + s4()
	  }

	  function s4() {
		  return Math.floor((1 + Math.random()) * 0x10000)
		    .toString(16)
		    .substring(1)
		}
});

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__recorder__ = __webpack_require__(0);


var rec = new __WEBPACK_IMPORTED_MODULE_0__recorder__["a" /* default */]('gUMArea')
// rec.setMediaType('video')
// alert(rec.getMediaType())
rec.initialiseMedia()

document.getElementById('start').addEventListener('click', ()=> {
	rec.startRecording()
})

document.getElementById('stop').addEventListener('click', ()=> {
	rec.stopRecording()
})

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map