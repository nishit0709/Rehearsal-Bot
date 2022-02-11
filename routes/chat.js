const express = require('express');
const multer = require('multer')
const router = express.Router();
const recog = require("../JS/speech_to_text")
const play = require("../JS/getScript")

const storage = multer.diskStorage({
  destination: (req,file,cb) =>{
    cb(null, 'JS/Sounds')
  },
  filename: (req, file, cb) => {
    cb(null, 'user_sound_blob')
  }
})

const upload = multer({storage: storage})

router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/script',(req,res)=>{
  const script = play.getScript(req.body.data)
  res.send()
})

router.post('/message',(req,res)=>{  
  res.send({data:"success"})
})

router.post('/audio', upload.single('blob'), (req,res)=>{
  recog.speechToText().then((text) => {
    res.send({user:text, bot:"response recieved"})
  })
})

module.exports = router;
