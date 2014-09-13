/*console.log("ieie");*/

var express = require('express');
var app = express();

app.get('/', function(req,res){
				res.sendfile('./index.html');
			}
		);

app.get('/portifolio', function(req,res){
				res.sendfile('./portifolio/index.html');
			}
		);

app.listen(3000);