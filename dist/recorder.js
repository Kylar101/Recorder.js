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