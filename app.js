const express = require('express');
const path = require("path");
const load = require('express-load');
const app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.set('view options', {layout: false});
app.use(express.static(path.join(__dirname, 'public')));

load('db').then('controllers').then('routes').into(app);

app.listen(3000, () => {
	console.log('Projeto Netshoes ON = http://localhost:3000');
});
