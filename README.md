# Recorder.js
> A media recording library that allows recording using video and audio

## Usage

### Install and Setup

```shell
npm install recorderjs
```

```Javascript
import Recorder from 'recorderjs'
```

To create the recorderjs instance:

#### JavaScript

```Javascript
var rec = new Recorder('recorderContainer')
```

The recorderjs constructor takes one arguments, the id for the HTML container.

The constructor will add a start and stop button into the container that is specified.

#### HTML

```HTML
<div id='recorderContainer'>
    <!-- Whatever you want - the recorder controls will be inserted after -->
</div>
```

### Configuration

#### Media Type

The recorderjs default media type is audio. To set the instance to a particular type, use the following function

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

To inialize the recorderjs for use, use the following function

```JavaScript
rec.initialiseMedia()
```

**NOTE:** If you change the media type after initialization, you will need to reinialize the recorderjs

```JavaScript
rec.initialiseMedia()
rec.toggleMediaType()
rec.initialiseMedia()
```