'use strict'

export default function (containerID) {
	let log = console.log.bind(console)
	this.container = document.getElementById(containerID)
	this.start = document.getElementById('start')
	this.stop = document.getElementById('stop')
	this.counter = 1
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
	    // this.start.disabled = false
	    this.recorder = new MediaRecorder(this.stream);
	    this.recorder.ondataavailable = e => {
	      this.chunks.push(e.data)
	      if(this.recorder.state == 'inactive')  this.makeLink()
	    };
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

	  this.makeLink = function () {
		  let blob = new Blob(this.chunks, {type: this.mediaType.type })
		    , url = URL.createObjectURL(blob)
		    , li = document.createElement('div')
		    , mt = document.createElement(this.mediaType.tag)
		    , hf = document.createElement('button')
		  ;
		  mt.controls = true;
		  mt.src = url;
		  hf.href = url;
		  hf.download = `${this.guid()}${this.mediaType.ext}`;
		  hf.innerHTML = `download ${hf.download}`;
		  li.appendChild(mt);
		  li.appendChild(hf);
		  this.container.appendChild(li);
	  }

	  this.guid = function () {
	  	return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
	    s4() + '-' + s4() + s4() + s4();
	  }

	  function s4() {
		  return Math.floor((1 + Math.random()) * 0x10000)
		    .toString(16)
		    .substring(1);
		}
}