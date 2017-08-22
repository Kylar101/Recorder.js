class Recorder {
    constructor(start){
        let log = console.log.bind(console)
        let id = val => document.getElementById(val)
        this.start = id(start)
        this.stop = id(stop)
        
    }
}