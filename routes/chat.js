const express = require('express');
const router = express.Router();
const recog = require("../JS/speech_to_text")
const play = require("../JS/getScript")
const path = require('path')

router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname+'/../views/index.html'));
});

router.post("/message",(req,res)=>{
  res.send({data:"Success"})
})




// router.post('/script',(req,res)=>{
//   var resMsg = "Please select the role you would like to play: <br>"
//   const script = play.getScript(req.body.data)
//   console.log(script.characters[0])
//   script.characters.forEach(tchar => {
//     resMsg += tchar + ' '
//   });
//   console.log(resMsg)
//   res.send({data:resMsg})
// })

// router.post('/message',(req,res)=>{
//   if(!script.characters.includes(req.body.data))
//     res.send({data:'Please select from the given options'})  
//   else
//     user = req.body.data
//     res.send({data:"you have selected: "+req.body.data+", Tap on the mic and say start to begin"})
// })

// router.post('/audio', upload.single('blob'), (req,res)=>{
//   recog.speechToText().then((text) => {
//     if(text == 'start')
//       res.send({user:text, bot:"Starting now"})
//   })
// })

module.exports = router;
