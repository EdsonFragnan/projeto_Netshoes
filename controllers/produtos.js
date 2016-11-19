var fs = require('fs');
var path = require("path");
var arq = path.join(__dirname, '../db/produtos.json');

//GET Obtem todos os produtos
exports.getProdutos = function(req, res) {
  fs.readFile(arq, {encoding: 'utf-8'}, function(err, data) {
    if (err) {
      res.status(404).send('Arquivo não encontrado');
    } else {
      var produtos = JSON.parse(data)
      res.status(200).send(produtos);
    }
  });
}
