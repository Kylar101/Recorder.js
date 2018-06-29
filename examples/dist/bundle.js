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
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Recorderjs = /** @class */ (function () {
    function Recorderjs(constructor) {
        this.container = document.getElementById("" + constructor.containerID);
        this.mediaOptions = {
            video: {
                tag: 'video',
                type: 'video/webm',
                ext: '.mp4',
                gUM: { video: true, audio: true }
            },
            audio: {
                tag: 'audio',
                type: 'audio/mp3',
                ext: '.mp3',
                gUM: { audio: true }
            }
        };
        this.mediaType = this.mediaOptions.audio;
        this.counter = 0;
        this.container.insertAdjacentHTML('beforeend', '<button type="button" id="start">Start</button>');
        this.container.insertAdjacentHTML('beforeend', '<button type="button" id="stop">Stop</button>');
        // this.container.insertAdjacentHTML('beforeend', '<div id="countdownTimer"></div>')
        this.start = document.getElementById('start');
        this.stop = document.getElementById('stop');
    }
    Recorderjs.prototype.initialiseMedia = function () {
        var _this = this;
        navigator.mediaDevices.getUserMedia(this.mediaType.gUM).then(function (_stream) {
            _this.stream = _stream;
            _this.start.disabled = false;
            _this.recorder = new MediaRecorder(_this.stream);
            _this.recorder.ondataavailable = function (e) {
                _this.chunks.push(e.data);
                if (_this.recorder.state == 'inactive')
                    _this.makeLink();
            };
            console.log('got media successfully');
        }).catch();
        this.start.addEventListener('click', function () {
            _this.startRecording();
        });
        this.stop.addEventListener('click', function () {
            _this.stopRecording();
        });
    };
    /**
     * @function setMediaType
     * @description Changes default media type to specified
     *
     * @param type: string
     */
    Recorderjs.prototype.setMediaType = function (type) {
        if (type == 'video') {
            this.mediaType = this.mediaOptions.video;
        }
        else {
            this.mediaType = this.mediaOptions.audio;
        }
    };
    /**
     * @function toggleMediaType
     * @description toggles current media type
     */
    Recorderjs.prototype.toggleMediaType = function () {
        if (this.mediaType.tag == 'audio') {
            this.mediaType = this.mediaOptions.video;
        }
        else {
            this.mediaType = this.mediaOptions.audio;
        }
    };
    /**
     * @function changeFileType
     * @description changes export file type to specified
     *
     * @param fileType string
     */
    Recorderjs.prototype.changeFileType = function (fileType) {
        this.mediaType.ext = fileType;
    };
    /**
     * @function getMediaType
     * @description returns current media type
     *
     * @returns string
     */
    Recorderjs.prototype.getMediaType = function () {
        return this.mediaType.tag;
    };
    Recorderjs.prototype.startRecording = function () {
        this.start.disabled = true;
        this.stop.disabled = false;
        this.chunks = [];
        this.recorder.start();
    };
    Recorderjs.prototype.stopRecording = function () {
        this.stop.disabled = true;
        this.recorder.stop();
        this.start.disabled = false;
    };
    Recorderjs.prototype.makeLink = function () {
        var blob = new Blob(this.chunks, { type: this.mediaType.type }), url = URL.createObjectURL(blob), li = document.createElement('div'), mt = document.createElement(this.mediaType.tag), bt = document.createElement('button'), hf = document.createElement('a'), dl = document.createElement('a');
        this.counter++;
        mt.controls = true;
        mt.src = url;
        mt.id = 'media-file';
        hf.href = url;
        hf.download = "" + this.guid();
        li.id = "" + hf.download;
        bt.innerHTML = "download " + hf.download + this.mediaType.ext;
        hf.id = 'download-media-file';
        bt.classList.add('btn');
        dl.innerHTML = "delete media";
        dl.id = "delete-" + this.counter;
        dl.classList.add('btn');
        dl.href = '#';
        hf.appendChild(bt);
        li.appendChild(mt);
        li.appendChild(hf);
        li.appendChild(dl);
        this.container.appendChild(li)(document.getElementById("delete-" + this.counter)).addEventListener('click', function () {
            document.getElementById(hf.download).outerHTML = '';
        });
    };
    Recorderjs.prototype.guid = function () {
        return this.s4() + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' +
            this.s4() + '-' + this.s4() + this.s4() + this.s4();
    };
    Recorderjs.prototype.s4 = function () {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    };
    return Recorderjs;
}());
exports.Recorderjs = Recorderjs;
//# sourceMappingURL=recorder.js.map

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dist_recorder__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dist_recorder___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__dist_recorder__);


var rec = new __WEBPACK_IMPORTED_MODULE_0__dist_recorder__["Recorderjs"]({ containerID: 'gUMArea' })
rec.setMediaType('video')
// alert(rec.getMediaType())
// rec.changeFileType('wav')
rec.initialiseMedia()

// document.getElementById('toggle').addEventListener('click', () => {
// 	rec.toggleMediaType()
// 	rec.initialiseMedia()
// })

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map