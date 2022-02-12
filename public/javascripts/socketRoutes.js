const speaker = document.getElementById("botAudio")
socket.on("msgFromServer",(msg)=>{
    botResponse(msg)
})

socket.on("userSpeech",(msg)=>{
    userResponse(msg)
})

socket.on("botSpeech",(audio)=>{
    const blob = new Blob([audio], { type: "audio/mpeg" });
    const url = window.URL.createObjectURL(blob);
    speaker.src = url;
    speaker.play()
})