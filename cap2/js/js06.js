function gorjeta(){
    var qtd = document.getElementById('qtd'.replace(',','.')).value
    var consumo = document.getElementById('consumo').value
    var total = ((qtd*consumo)/1000).toFixed(2)
    document.getElementById('resultado').innerHTML=`Valor a pagar: R$ ${total}`
}
var preço = document.getElementById('preço')
preço.addEventListener('click',gorjeta)