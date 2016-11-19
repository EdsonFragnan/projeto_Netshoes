var express = require('express'),
	app = express(),
	bodyParser = require('body-parser'),
	methodOverride = require('method-override');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));

var rotas = require('./routes/index.js');
app.use('/', rotas);

app.listen(3000, function() {
	console.log('Projeto Netshoes ON = http://localhost:3000');
});
