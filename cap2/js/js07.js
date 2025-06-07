function promo(){
    var remedio = document.getElementById('remedio').value
    var preço = document.getElementById('preço'.replace(',','.')).value
    var promotion = Math.floor(preço*2).toFixed(2)
    document.getElementById('resposta').innerHTML=`Comprando 2 ${remedio} sai por R$ ${promotion}`
}
var total = document.getElementById('total')
total.addEventListener('click', promo)