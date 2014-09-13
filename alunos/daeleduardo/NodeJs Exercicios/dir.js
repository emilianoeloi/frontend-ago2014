
var express = require('express');
var app = express();

/*
app.use(express.static(__dirname));

console.log(__dirname)

*/


app.use(express.static("C:\\Users\\aluno\\Desktop\\Curso Desenvolvimento Web Front End\\frontend\\aula3\\NodeJs\\"));


app.listen(3000, function(){
	console.log('executando');
});


