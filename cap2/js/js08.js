function calculo(){
    var custo = document.getElementById('custo'.replace(',','.')).value
    var tempo = document.getElementById('tempo').value
    var preço = ((custo*tempo)/15).toFixed(2)
    document.getElementById('total').innerHTML=`Valor a Pagar: R$ ${preço}`
}
var valor = document.getElementById('valor')
valor.addEventListener('click',calculo)