![300artboard 1300](https://user-images.githubusercontent.com/40878798/42462661-c05c9c68-83c5-11e8-9675-45b22bec6ada.png)


# Recorder.js
> A media recording library that allows recording using video and audio

## Usage

### Install and Setup

```shell
npm install @kylar101/recorder.js
```

```Javascript
import Recorder from '@kylar101/recorder.js'
```

To create the recorder instance:

#### JavaScript

```Javascript
var rec = new Recorder({ containerID: 'recorderContainer' })
```

The recorder constructor takes one arguments, the id for the HTML container.

The constructor will add a start and stop button into the container that is specified.

#### HTML

```HTML
<div id='recorderContainer'>
    <!-- Whatever you want - the recorder controls will be inserted after -->
</div>
```

### Configuration

#### Media Type

The recorder default media type is audio. To set the instance to a particular type, use the following function

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

To inialize the recorder for use, use the following function

```JavaScript
rec.initialiseMedia()
```

**NOTE:** If you change the media type after initialization, you will need to reinialize the recorder

```JavaScript
rec.initialiseMedia()
rec.toggleMediaType()
rec.initialiseMedia()
```
