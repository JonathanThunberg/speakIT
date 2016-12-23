var express = require('express');
const bodyParser= require('body-parser')
var app = express();

app.use(bodyParser.urlencoded({extended: true}))

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/public/index.html')
})

app.post('/quotes', (req, res) => {
  console.log(req.body)
})


var server = app.listen(3000, function () {

   var host = server.address().address
   var port = server.address().port

   console.log("Example app listening at http://%s:%s", host, port)
})