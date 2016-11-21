//GET Obtem todos os produtos
module.exports = (app) => {
  const fs = require('fs');
  const path = require("path");
  const arq = path.join(__dirname, '../db/produtos.json');

  const ProdutoController = {
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
                'idProduto': list[i].id,
                'sku': list[i].sku,
                'produto': list[i].title,
                'preco': tratamentoPreco(list[i].price),
                'moeda': list[i].currencyFormat,
                'tamanhos': list[i].availableSizes
            });
          }
          res.render('index', {produtos: produtosList});
        }
      });
    }
  }
  return ProdutoController;
}

const tratamentoPreco = (preco) => {
  return preco + '0';
}
