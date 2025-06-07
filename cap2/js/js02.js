function resp(){
    var nome = document.getElementById('nome').value;
    document.getElementById('resposta').textContent=`Olá ${nome}, como vai?`
}
var confirma = document.getElementById('confirma')
confirma.addEventListener('click', resp)