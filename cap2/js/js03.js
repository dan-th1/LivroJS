function mostrarEvent() {
    var n = document.getElementById('n').value ;
    document.getElementById('resposta').innerHTML=` ${n} * 1 = ${n*1} <br> ${n} * 2 = ${n*2} <br> ${n} * 3 = ${n*3} <br> ${n} * 4 = ${n*4} <br> ${n} * 5 = ${n*5} <br> ${n} * 6 = ${n*6} <br> ${n} * 7 = ${n*7} <br> ${n} * 8 = ${n*8} <br> ${n} * 9 = ${n*9} <br> ${n} * 10 = ${n*10}`
}
var mostrar = document.getElementById('mostrar'); 
mostrar.addEventListener('click', mostrarEvent);