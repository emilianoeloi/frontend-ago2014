console.log('Aplicacao iniciada...');

var express = require('express');
var app = express();
app.use(express.static('C:/Users/aluno/Desktop/Curso Desenvolvimento Web Front End/frontend/cloneGitHub/alunos/daeleduardo'))
app.post('/api/contatos/',function(req,res){

		res.json(200,"Contato cadastrado com sucesso!")
})

app.get('/api/contatos/',function(req,res){

		res.json(205,["contato1","contato2"])
})


app.put('/api/contatos/',function(req,res){

		res.json(202,"Contato atualizado com sucesso")
})

app.delete('/api/contatos/',function(req,res){

		res.json(200,"Apagado com sucesso")
})

app.listen(3000);
