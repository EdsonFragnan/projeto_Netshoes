var express = require('express');
var produtos = require('../controllers/produtos.js');
var rota = express.Router();

//Rotas de cadastro Usuário
rota.route('/produtos')
	.get(produtos.getProdutos);

module.exports = rota;
