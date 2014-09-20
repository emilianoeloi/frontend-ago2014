console.log('Teste NodeJS');

// node app.js
var express = require('express');
var app = express();
app.use(express.static('C:\\Users\\314115410\\Documents\\frontend-ago2014\\alunos\\RafaelDourado'))
app.listen(3000);

/*app.get('/', function(req, res){
res.sendfile('index3.html');
});
*/


