console.log('Aplicacao iniciada...');

var express = require('express');
var app = express();
app.use(express.static('C:/Curso Curta Duração/Desenvolvimento Front-End/Arquivos/repositorio/alunos/italogoncalves/server'))
app.listen(3000);

