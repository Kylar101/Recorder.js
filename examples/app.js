import Recorder from '../dist/recorder'

var rec = new Recorder({ containerID: 'gUMArea' })
rec.setMediaType('video')
// alert(rec.getMediaType())
// rec.changeFileType('wav')
rec.initialiseMedia()

// document.getElementById('toggle').addEventListener('click', () => {
// 	rec.toggleMediaType()
// 	rec.initialiseMedia()
// })