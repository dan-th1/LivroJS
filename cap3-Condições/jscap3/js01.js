function media(){
    var inp1 = document.getElementById('p1').value
    var inp2 = document.getElementById('p2').value
    var p1 = Number(inp1)
    var p2 = Number(inp2)
    var m = ((p1+p2)/2).toFixed(1)
    var med = document.getElementById('med')
    document.getElementById('med').innerHTML=`Sua média foi: <b> ${m} </b>`
    if(m >= 7){
        document.getElementById('result').innerHTML='Parabens bixão, você é FODA!'
        document.getElementById('result').style.color ='green'
    }
    else{
        document.getElementById('result').innerHTML='BURRO ta <b>REPROVADO</b>'
        document.getElementById('result').style.color='red'
    }

}
var confirm = document.getElementById('confirm')
confirm.addEventListener('click', media)