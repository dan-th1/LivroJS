function promo() {
    var modelo = document.getElementById('Modelo').value
    var preço = document.getElementById('preço').value
    var parcelas = (preço/2)/12
    document.getElementById('resposta1').innerHTML=`Promoção ${modelo}`
    document.getElementById('resposta2').innerHTML=`Entrada de R$ ${(preço/2).toFixed(2).replace('.',',')}`
    document.getElementById('resposta3').innerHTML=`+12 parcelas de: R$ ${(parcelas).toFixed(2).replace('.',',')}`
}
var btProm = document.getElementById('btProm')
btProm.addEventListener('click', promo)