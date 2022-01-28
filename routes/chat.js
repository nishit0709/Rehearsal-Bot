var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/',(req,res)=>{
  console.log(req.body)
  var response = {data:"success"}
  res.send(response)
})

module.exports = router;
