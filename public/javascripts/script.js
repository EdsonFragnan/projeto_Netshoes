function add(produto) {
  var contador = document.getElementById('carrinho').innerHTML;
  var valContador = parseFloat(contador) + 1;
  document.getElementById('carrinho').innerText = valContador;

  var produtoCarrinho = document.getElementsByClassName(produto);
  var sacola = [];
  var totalCarrinho;
  for(var i in produtoCarrinho) {
    var produto = {
      'idProduto': produtoCarrinho[0].textContent,
      'sku': produtoCarrinho[0].nextElementSibling.innerText,
      'imagem': produtoCarrinho[1].currentSrc,
      'descricao': produtoCarrinho[2].textContent,
      'tamanho': produtoCarrinho[3].textContent,
      'preco': produtoCarrinho[4].textContent,
      'totalCarrinho': parseFloat(produtoCarrinho[4].textContent)
    };
  }

  var valCarrinho = produto.preco;
  var campos = document.getElementsByClassName('precProduto');
  console.log(campos);
  //valCarrinho.push(produto.preco);

  console.log(valCarrinho);

  sacola.push(
    '<div class="col-xs-6 col-lg-4 thumbnail thumb2"  id="'+ produto.sku +'">' +
        '<img src="'+ produto.imagem +'" class="imagem" alt="Corinthians" style="width:50%">' +
        '<p class="descProduto">' + produto.descricao + '</p>' +
        '<p class="tamanhoProduto">' + produto.tamanho + '</p>' +
        '<p class="precProduto">R$ ' + produto.preco + '</p>' +
        '<input type="button" class="btn btn-default btn2" id="'+ produto.sku +'" onclick="remove(this.id);" value="Remover" />' +
    '</div>'
  );
  sacola.toString();
  document.getElementById("prodCarrinho").insertAdjacentHTML('beforeend', sacola);
  document.getElementById("btnFecharCompra").style.display = "block";
}

function remove(id){
  var produtoRemove = document.getElementById("prodCarrinho");
  var elemen = document.getElementById(id);
  produtoRemove.removeChild(elemen);
  var contador = document.getElementById('carrinho').innerHTML;
  var valContador = parseFloat(contador) - 1;
  document.getElementById('carrinho').innerText = valContador;
}
