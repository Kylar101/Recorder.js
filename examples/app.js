import { Recorderjs } from '../dist/recorder'

var rec = new Recorderjs({ containerID: 'gUMArea' })
rec.setMediaType('video')
// alert(rec.getMediaType())
// rec.changeFileType('wav')
rec.initialiseMedia()

// document.getElementById('toggle').addEventListener('click', () => {
// 	rec.toggleMediaType()
// 	rec.initialiseMedia()
// })