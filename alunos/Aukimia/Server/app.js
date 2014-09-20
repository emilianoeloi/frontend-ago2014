
var express = require('express');

var app = express();
app.use(express.static('C:/Users/aluno/Documents/frontend-ago2014/alunos/Aukimia'))

//Comentário de uma linha
/*Escrevo muito
*/

/*
app.get('/', function(req, res){
	res.sendfile('C:/Users/aluno/aula3/index.html');
});
app.get('/portifolio', function(req, res){
	res.sendfile('C:/Users/aluno/Documents/frontend-ago2014/alunos/Aukimia/Portifólio/index.html');
});
*/

app.listen(3000);
