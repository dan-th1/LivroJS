function fuso (){
    let InhoraJapao = document.getElementById("horaJapao").value;
    let horaJapao = Number(InhoraJapao);
    let resp = document.getElementById("resp");
    if (horaJapao === "" || isNaN(horaJapao) || horaJapao < 0 || horaJapao > 23) {
        alert("Por favor, preencha o campo com um número válido.");
        document.getElementById("horaJapao").focus();
        return;
    }
    let horaBrasil = (horaJapao + 12) // Ajuste para o fuso horário do Brasil
    if(horaBrasil > 24) {
        horaBrasil -= 24; // Ajuste para o formato de 24 horas
        resp.innerHTML = `<p>A hora no Brasil é ${horaBrasil} horas.</p>`
    } else if (horaBrasil == 0 || horaBrasil == 24) {
        horaBrasil -= 24; // Ajuste para o formato de 24 horas
        resp.innerHTML = `<p>É meia-noite no Brasil.</p>` 
    }
}
let btHora = document.getElementById("btHora");
btHora.addEventListener("click", fuso);