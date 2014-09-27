console.log('Aplicacao iniciada...');

var express = require('express');
var app = express();
app.use(express.static('C:/Curso Curta Duração/Desenvolvimento Front-End/Arquivos/repositorio/alunos/italogoncalves'))

app.post('/api/contatos', function(req, res){
	res.json(201,"Contato cadastrado com sucesso...")
})

app.get('/api/contatos', function(req, res){
	res.json(200,["Contato 1", "Contato 2"])
})

app.put('/api/contatos', function(req, res){
	res.json(200,["Contato atualizado com sucesso..."])
})

app.delete('/api/contatos', function(req, res){
	res.json(200,["Contato deletado com sucesso..."])
})



app.listen(3000);

