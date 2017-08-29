'use strict'

export default function (containerID) {
	this.wat = 'hello'
	this.container = document.querySelector(`#${containerID}`)
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


	this.container.insertAdjacentHTML('beforeend', this.start)
	this.container.insertAdjacentHTML('beforeend', this.stop)
}