var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.sendFile('/frontend/web/index.html');
});

app.listen(3000);
