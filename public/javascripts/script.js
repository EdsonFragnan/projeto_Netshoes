
var precoTotal = [];
function add(produto) {
  var contador = document.getElementById('carrinho').innerHTML;
  var valContador = parseInt(contador) + 1;
  document.getElementById('carrinho').innerText = valContador;
  var produtoCarrinho = document.getElementsByClassName(produto);
  var sacola = [];
  for(var i in produtoCarrinho) {
    var produto = {
      'idProduto': produtoCarrinho[0].textContent,
      'sku': produtoCarrinho[0].nextElementSibling.innerText,
      'imagem': produtoCarrinho[1].currentSrc,
      'descricao': produtoCarrinho[2].textContent,
      'tamanho': produtoCarrinho[3].textContent,
      'preco': parseFloat(produtoCarrinho[4].textContent)
    };
  }

  var cifrao = '<span class="cifrao">R$ </span>';
  sacola.push(
    '<div class="col-xs-2 col-md-3 col-lg-3 thumbnail thumb2"  id="'+ produto.sku +'">' +
        '<img src="'+ produto.imagem +'" class="imagem" alt="Corinthians" style="width:100%">' +
        '<p class="descProduto">' + produto.descricao + '</p>' +
        '<p class="tamanhoProduto">' + produto.tamanho + '</p>' +
        cifrao +
        '<p class="precProdutoCarrinho">'+ produto.preco + '</p>' +
        '<input type="button" class="btn btn-default btn2" id="'+ produto.sku +'" onclick="remove(this.id);" value="Remover" />' +
    '</div>'
  );

  precoTotal.push(parseFloat(produto.preco));
  var soma = 0;
  for (var i = 0; i < precoTotal.length; i++) {
   soma+= precoTotal[i];
  }
  sacola.toString();
  document.getElementById("prodCarrinho").insertAdjacentHTML('beforeend', sacola);
  document.getElementById("vazio").innerHTML = '';
  document.getElementById("cifrao3").innerText = 'TOTAL: R$ ';
  document.getElementById("total").innerText = ' ' + soma;
  document.getElementById("btnFecharCompra").style.display = "block";
}

var precoCarrinho = [];
var subtrai = 0;
function remove(id){
  var valMenor = document.getElementById('total').innerHTML;
  var elemen = document.getElementById(id);
  var elemen2 = document.getElementById(id).childNodes;
  var valElemen = parseFloat(elemen2[4].textContent);
  var total = parseFloat(valMenor);
  precoCarrinho.push(valElemen);
  for (var i = 0; i < precoCarrinho.length; i++) {
    subtrai = total.toFixed(2)
    subtrai-= parseFloat(precoCarrinho[i].toFixed(2));
  }
  var contador = document.getElementById('carrinho').innerHTML;
  var valContador = parseInt(contador) - 1;
  if (valContador === 0) {
    document.getElementById("cifrao3").innerText = '';
    document.getElementById('vazio').innerHTML = '<strong>Carrinho vazio.</strong>';
    document.getElementById('total').innerHTML = 'TOTAL: R$ '+ 0;
  } else {
    document.getElementById("cifrao3").innerText = '';
    document.getElementById('total').innerHTML = 'TOTAL: R$ ' + parseFloat(subtrai.toFixed(2));
  }
  document.getElementById('carrinho').innerText = valContador;
  var produtoRemove = document.getElementById("prodCarrinho");
  produtoRemove.removeChild(elemen);
  precoTotal = [];
}
