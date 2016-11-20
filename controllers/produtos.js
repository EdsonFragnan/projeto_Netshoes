//GET Obtem todos os produtos
module.exports = (app) => {
  const fs = require('fs');
  const path = require("path");
  const arq = path.join(__dirname, '../db/produtos.json');

  var ProdutoController = {
    getProdutos: (req, res) => {
      fs.readFile(arq, {encoding: 'utf-8'}, (err, data) => {
        if (err) {
          res.status(404).send('Arquivo não encontrado');
        } else {
          const parseProdutos = JSON.parse(data);
          const list = parseProdutos.products;
          const produtosList = [];
          for(var i in list) {
            produtosList.push({
                'produto': list[i].title,
                'preco': list[i].price,
                'moeda': list[i].currencyFormat
            });
          }
          res.render('index', {produtos: produtosList});
        }
      });
    }
  }
  return ProdutoController;
}
