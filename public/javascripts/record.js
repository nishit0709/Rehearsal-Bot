if (navigator.mediaDevices.getUserMedia) {
  console.log('getUserMedia supported.');
  const constraints = { audio: true };
  let chunks = [];

  let onSuccess = function(stream) {
    const mediaRecorder = new MediaRecorder(stream);
    mic.onclick = function() {
      mediaRecorder.start();
      console.log(mediaRecorder.state);
      console.log("recorder started");
      //change mic background
      setTimeout(function() {
          mediaRecorder.stop();
          console.log(mediaRecorder.state);
          console.log("recorder stopped");
          //change mic background
      },5000)
    }

    mediaRecorder.onstop = async function(e) {
      console.log("data available after MediaRecorder.stop() called.");
      const blob = new Blob(chunks, { 'type': 'audio/mp3' });
      chunks = []
      var fd = new FormData()
      fd.append('blob', blob)
      fetch("/audio",{
        method: 'POST',
        body: fd,
      })
      .then(response => response.json())
      .then(json => {
        console.log(json)
        document.getElementById("chatMessages")
        .innerHTML += `
                      <div class="chatbox__messages">
                        <div class="chatbox__messages__user-message">
                        <div class="chatbox__messages__user-message--ind-message" style="float:right">
                          <p class="name">You</p>
                          <br/>
                          <p class="message">`+ json.data +`</p>
                        </div>
                        </div>          
                      </div>
                      `
      })
      //Export the audio file here and convert to wav in python
      console.log("recorder stopped");  
    }

    mediaRecorder.ondataavailable = function(e) {
      console.log("data available")
      chunks.push(e.data);
    }
  }

  let onError = function(err) {
    console.log('The following error occured: ' + err);
  }

  navigator.mediaDevices.getUserMedia(constraints).then(onSuccess, onError);

} else {
    console.log('getUserMedia not supported on your browser!');
}