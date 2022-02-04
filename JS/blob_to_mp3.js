var ffmpeg = require('ffmpeg')
try{ 
    var process = new ffmpeg('Sounds/user_sound_blob')
    process.then((audio)=>{
    audio.fnExtractSoundToMP3("Sounds/userSound.mp3", (error,file)=>{
      if(!error)
        console.log('Audio File: '+ file)
    })
    },(err) =>{
        console.log('Error' +err)
    })
}catch(e){
    console.log(e)
}
