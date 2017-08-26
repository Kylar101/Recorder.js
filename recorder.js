'use strict'

export function Recorder (containerID) {

	var log = console.log.bind(console),
		container = document.getElementById(containerID),
		start = `<button type="button" id="start">Start</button>`,
		stop = `<button type="button" id="stop">Stop</button>`

	container.insertAdjacentHTML('beforeend', start)
	container.insertAdjacentHTML('beforeend', stop)
        
}