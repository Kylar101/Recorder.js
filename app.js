import Recorder from './recorder'

var rec = new Recorder('gUMArea')
// rec.setMediaType('video')
// alert(rec.getMediaType())
rec.initialiseMedia()

document.getElementById('start').addEventListener('click', ()=> {
	rec.startRecording()
})

document.getElementById('stop').addEventListener('click', ()=> {
	rec.stopRecording()
})