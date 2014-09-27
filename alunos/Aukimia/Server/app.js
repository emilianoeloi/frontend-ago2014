
var express = require('express');

var app = express();
app.use(express.static('C:/Users/aluno/Documents/frontend-ago2014/alunos/Aukimia'))

///Backend
app.post('/api/contatos',function(req, res){
	res.json(200, "Contatos cadastrados com sucesso" )
})
app.get('/api/contatos',function(req, res){
	res.json(200, ["contato1", "contato2"] )
})
app.put('/api/contatos',function(req, res){
	res.json(200, "Dados atualizados com sucesso" )
})
app.delete('/api/contatos',function(req, res){
	res.json(200, "Dados deletados com sucesso" )
})

app.listen(3000);






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


