const express = require("express")
const path = require("path")
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
 
var chatRouter = require('./routes/chat');
const recognize = require("./JS/speech_to_text")
const synthesize = require("./JS/text_to_speech")
const fs = require('fs')

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', chatRouter);

io.on("connection",(socket)=>{
  socket.on('audio', (blob)=>{
    fs.writeFileSync('JS/Sounds/user_sound_blob',blob)
    recognize().then((speech)=>{
      socket.emit("userSpeech",speech)  
    })
  })

  socket.on('msgFromClient',(text)=>{
    synthesize("Success")
    var data = fs.readFileSync("JS/Sounds/botSpeech.mp3")
    socket.emit("botSpeech",data)
    socket.emit("msgFromServer","Success")
  })
  
})


server.listen(3000, () => {
  console.log('listening on port: 3000');
})
