function calcularP(){
    let nome = document.getElementById("nome").value;
    let masculino = document.getElementById("masculino").checked;
    let feminino = document.getElementById("feminino").checked;
    let altura = document.getElementById("altura").value;
    let resposta = document.getElementById("resposta");

    if (nome === "" || isNaN(altura)) {
        alert("Por favor, preencha todos os campos.");
        document.getElementById("nome").focus();
        return;
    } 
    if(altura == 0 || isNaN (altura) || altura < 0){
        alert("Altura inválida. Por favor, insira um valor positivo.");
        document.getElementById("altura").focus();
        return;
    }
    if(masculino){
        var pesoIdeal = 22 * Math.pow(altura, 2);
    } else {
        var pesoIdeal = 21 * Math.pow(altura, 2);
    }resultado.innerHTML = `<p>Olá ${nome}, seu peso ideal é ${pesoIdeal.toFixed(2)} kg.</p>`;
}
let btnCalcular = document.getElementById("btnCalcular");
btnCalcular.addEventListener("click", calcularP);
function limparCampos() {
    document.getElementById("nome").value = "";
    document.getElementById("altura").value = "";
    document.getElementById("masculino").checked = false;
    document.getElementById("feminino").checked = false;
    document.getElementById("resposta").innerHTML = "";
    document.getElementById("nome").focus();
}   
let btnLimpar = document.getElementById("btnLimpar");
btnLimpar.addEventListener("click", limparCampos);