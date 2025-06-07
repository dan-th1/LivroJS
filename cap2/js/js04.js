function conversor() {
    var nome = document.getElementById('nome').value.toUpperCase()
    var duraçao = document.getElementById('duraçao').value
    var convertido = Math.floor(duraçao/60)
    document.getElementById('converçao').innerHTML=`${nome} <br>${convertido} horas e ${duraçao%60} minutos`
}
var clique = document.getElementById('clique')
clique.addEventListener('click', conversor)