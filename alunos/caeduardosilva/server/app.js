console.log('Aplicacao iniciada...')
//node app.js

var express = require('express');
var app = express();

app.use (express.static('C:/Users/aluno/Desktop/curso-front-end/alunos/caeduardosilva'));

//back-end
app.post('/api/contatos', function(req, res){
	res.json(200, "Contato cadastrado com sucesso")
})

app.get('/api/contatos', function(req, res){
	res.json(200, ["contato1", "contato2"])
})

app.put('/api/contatos', function(req, res){
	res.json(200, "Contato atualizado com sucesso")
})

app.delete('/api/contatos', function(req, res){
	res.json(200, "Contato deletado com sucesso")
})



/*
app.get('/', function(req, res){
	res.sendfile('index.html');
});

app.get('/portifolio', function(req, res){
	res.sendfile('portifolio.html');
});
*/

app.listen(3000);