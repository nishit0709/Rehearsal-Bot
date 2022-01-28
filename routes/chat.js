const express = require('express');
const multer = require('multer')
const router = express.Router();

const storage = multer.diskStorage({
  destination: (req,file,cb) =>{
    cb(null, 'JS')
  },
  filename: (req, file, cb) => {
    cb(null, 'userSound')
  }
})

const upload = multer({storage: storage})

router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/message',(req,res)=>{
  console.log(req.body)
  res.send({data:"success"})
})

router.post('/audio', upload.single('blob'), (req,res)=>{
  res.send({data:"audio file recieved"})
})

module.exports = router;
