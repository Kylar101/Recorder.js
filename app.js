import Recorder from './recorder'

var rec = new Recorder('gUMArea', true)
rec.setTimer(0, 10)
// rec.setMediaType('video')
// alert(rec.getMediaType())
rec.initialiseMedia()
rec.changeFileType('wav')

document.getElementById('toggle').addEventListener('click', () => {
	rec.toggleMediaType()
	rec.initialiseMedia()
})