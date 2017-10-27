# Media-Recorder
> A media recording library that allows recording using video and audio

## Usage

### Install and Setup

```shell
npm install media-recorder
```

```Javascript
import MediaRecorder from 'media-recorder'
```

To create the Media-Recorder instance:

#### JavaScript

```Javascript
var rec = new MediaRecorder('recorderContainer',false)
```

The Media-Recorder constructor takes two arguments, the id for the HTML container, and a boolean for if you want a countdown timer

#### HTML

```HTML
<div id='recorderContainer'>
    <!-- Whatever you want, the recorder controls will be inserted after -->
</div>
```

### Configuration

#### Media Type

The Media-Recorder default media type is audio. To set the instance to a particular type, use the following function

```JavaScript
rec.setMediaType('video')
// or
rec.setMediaType('audio')
```

To toggle the media type, use the following function

```JavaScript
rec.toggleMediaType()
```

#### Inialization

To inialize the MediaRecorder for use, use the following function

```JavaScript
rec.initialiseMedia()
```

**NOTE:** If you change the media type after initialization, you will need to reinialize the MediaRecorder

```JavaScript
rec.initialiseMedia()
rec.toggleMediaType()
rec.initialiseMedia()
```

#### Countdown Timer

By adding ```true``` to the constructor initializes the countdown timer function. The timer defaults to 1 minute. To change the default timer, use the following function

```JavaScript
/**
 * Parameters: Minutes, Seconds 
 */
rec.setTimer(0, 10)
```