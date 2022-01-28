var ffmpeg = require('ffmpeg')
try{ 
    var process = new ffmpeg('userSound')
    process.then((audio)=>{
    audio.fnExtractSoundToMP3("user.mp3", (error,file)=>{
      if(!error)
        console.log('Audio File: '+ file)
    })
    },(err) =>{
        console.log('Error' +err)
    })
}catch(e){
    console.log(e)
}
