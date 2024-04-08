var express = require('express')
var app = express();

app.use(express.static("w"))

var inscritos =
[{
  name: "Aquiles"
}, {
  name: "Trindade"
}]

app.get('/inscritos', function(req, res) {
   res.send(inscritos)
})

app.get('/', function(req, res) {
   res.send('Se inscreve lindo')
})

app.listen(3000, function() {
   console.log('Da o like mano')
})