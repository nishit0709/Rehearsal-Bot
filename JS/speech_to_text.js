async function speechToText(){

    var vosk = require('vosk')
    const fs = require("fs");
    const { spawn } = require("child_process")
    const { once } = require('events')

    MODEL_PATH = "model"
    FILE_NAME = "JS/Sounds/user_sound_blob"
    SAMPLE_RATE = 16000
    BUFFER_SIZE = 4000

    if (!fs.existsSync(MODEL_PATH)) {
        console.log("Please download the model from https://alphacephei.com/vosk/models and unpack as " + MODEL_PATH + " in the current folder.")
        process.exit()
    }

    vosk.setLogLevel(-1);
    const model = new vosk.Model(MODEL_PATH);
    const rec = new vosk.Recognizer({model: model, sampleRate: SAMPLE_RATE});

    const ffmpeg_run = spawn('ffmpeg', ['-loglevel', 'quiet', '-i', FILE_NAME,
                            '-ar', String(SAMPLE_RATE) , '-ac', '1',
                            '-f', 's16le', '-bufsize', String(BUFFER_SIZE) , '-']);

    var output = ''
    ffmpeg_run.stdout.on('data', (stdout) => {
        rec.acceptWaveform(stdout)
        output += (rec.finalResult()).text + ' '
    });

    await once(ffmpeg_run, 'close')
    return output
}

module.exports = speechToText