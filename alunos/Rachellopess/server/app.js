//console.log('Teste NodeJS')
//node app.js

var express = require('express');
var app = express();

app.use (express.static('C:/Users/31323063/Desktop/front/alunos/Rachellopess'));

/*
app.get('/', function(req, res){
	res.sendfile('index.html');
});

app.get('/portifolio', function(req, res){
	res.sendfile('portifolio.html');
});
*/

app.listen(3000);