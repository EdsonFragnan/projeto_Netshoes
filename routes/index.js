//Rota de retornar Produtos
module.exports = (app) => {
  const produto = app.controllers.produtos;
  app.get('/', produto.getProdutos);
}
