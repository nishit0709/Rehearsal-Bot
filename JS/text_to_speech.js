function text_to_speech(text){
    const gTTS = require('gtts');      
    var gtts = new gTTS(text, 'en');
    gtts.save('JS/Sounds/botSpeech.mp3', function (err, result){
        if(err) { throw new Error(err); }
    });
}

module.exports = text_to_speech