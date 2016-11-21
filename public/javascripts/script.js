function add(produto) {
  var contador = document.getElementById('carrinho').innerHTML;
  var valContador = parseFloat(contador) + 1;
  document.getElementById('carrinho').innerText = valContador;
  var produtoCarrinho = document.getElementsByClassName(produto);
  var sacola = [];
  var totalCarrinho;
  for(var i in produtoCarrinho) {
    var produto = {
      'id': produtoCarrinho[0].idProduto,
      'imagem': produtoCarrinho[0].currentSrc,
      'descricao': produtoCarrinho[1].textContent,
      'preco': produtoCarrinho[2].textContent,
      'totalCarrinho': parseFloat(produtoCarrinho[2].textContent)
    };
  }
  sacola.push([
    '<div class="col-xs-6 col-lg-4 thumbnail thumb2">' +
        '<img src="'+ produto.imagem +'" class="imagem" alt="Corinthians" style="width:50%">' +
        '<p class="descProduto">' + produto.descricao + '</p>' +
        '<p class="precProduto">R$: ' + produto.preco + '</p>' +
        '<input type="button" class="btn btn-default btn2" id="'+ produto.id +'" onclick="remove(this.id);" value="Remover" />' +
    '</div>'+
    '<hr />' +
    '<p class="precProduto"><strong>TOTAL: R$ </strong>' + produto.totalCarrinho + '0' + '</p>'
  ]);
  document.getElementById("prodCarrinho").innerHTML = sacola;
}

function remove(id){
  var removeProduto = document.getElementsByClassName(id);
  var vazio = [];
  vazio.splice(removeProduto);
  var contador = document.getElementById('carrinho').innerHTML;
  var valContador = parseFloat(contador) - 1;
  document.getElementById('carrinho').innerText = valContador;
  document.getElementById("prodCarrinho").innerHTML = vazio;
}
