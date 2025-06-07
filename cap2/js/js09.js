function promotion(){
    var nome = document.getElementById('nome').value
    var preço = document.getElementById('preço'.replace(',','.')).value
    var tercP = preço/2
    document.getElementById('resposta').innerHTML=`${nome} - Promoção Leve 3 por R$ ${((preço*2)+tercP).toFixed(2)}`
    document.getElementById('resposta2').innerHTML=`O terceiro produto sai por R$ ${tercP}`
}
var promo = document.getElementById('promo')
promo.addEventListener('click', promotion)