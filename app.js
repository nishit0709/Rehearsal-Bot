const express = require("express")
const path = require("path")
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
 
var chatRouter = require('./routes/chat');
const recog = require("./JS/speech_to_text")
const fs = require('fs')

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', chatRouter);

io.on("connection",(socket)=>{
  socket.on('audio', (blob)=>{
    console.log("Recieved Content from user")
    fs.writeFileSync('JS/Sounds/user_sound_blob',blob)
    recog.speechToText().then(console.log)
  })
  
})


server.listen(3000, () => {
  console.log('listening on port: 3000');
})
