var socket = io()
const mic = document.getElementById("mic")
const micButton = document.getElementById("micButton")

function invertMic(color){
  if(color == 0){
    mic.setAttribute('style', '-webkit-filter: invert(1);filter: invert(0);')
    micButton.disabled = false
  }else{
    mic.setAttribute('style', '-webkit-filter: invert(1);filter: invert(1);')
    micButton.disabled = true
  }
}

if (navigator.mediaDevices.getUserMedia) {
  const constraints = { audio: true };
  let chunks = [];

  let onSuccess = function(stream) {
    const mediaRecorder = new MediaRecorder(stream);
    micButton.onclick = function() {
      mediaRecorder.start();
      invertMic(1)
      setTimeout(function() {
          mediaRecorder.stop();
          invertMic(0)
      },5000)
    }

    mediaRecorder.ondataavailable = function(e) {
      console.log("data available")
      chunks.push(e.data);
    }

    mediaRecorder.onstop = async function(e) {
      const blob = new Blob(chunks, { 'type': 'audio/mp3' });
      chunks = []
      socket.emit("audio",blob)
    }
    
  }

  let onError = function(err) {
    console.log('The following error occured: ' + err);
  }

  navigator.mediaDevices.getUserMedia(constraints).then(onSuccess, onError);

} else {
    console.log('getUserMedia not supported on your browser!');
}