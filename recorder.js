'use strict'

export default function (containerID) {
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
}