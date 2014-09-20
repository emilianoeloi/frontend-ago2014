console.log('Teste NodeJS');

//node app.NodeJS
var express = require('express');
var app = express();
app.use(express.static('C:/Users/31413496/Documents/frontend-ago2014/alunos/felixoliveiracaio'))
app.listen(3000);

/*
app.get ('/', function(req,res){
	res.sendfile('index.html');

});
*/

