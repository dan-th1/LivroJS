function result(){
    var p1 = document.getElementById("nota1").value
    var p2 = document.getElementById("nota2").value
    var media = (parseFloat(p1) + parseFloat(p2)) / 2;
    var resultado = document.getElementById("resultado");
    let mensagem = "";
    let img = document.createElement('img'); // Cria um elemento de imagem
    img.setAttribute('id', 'foto'); // Define o id da imagem
    if (isNaN(media) || media < 0 || media > 10) {
        resultado.innerHTML = "Por favor, insira notas válidas entre 0 e 10.";
    } else if (media >= 7) {
         mensagem = `Aprovado com média ${media.toFixed(1)}!`;
        // Cria imagem de aprovado
        let imge = document.createElement('img');
        imge.setAttribute('id', 'foto');
        imge.setAttribute('src', 'img/aprovado.png');
        resultado.innerHTML = mensagem;
        resultado.appendChild(imge);

    } else if (media >= 5) {
        resultado.innerHTML = `Recuperação com média ${media.toFixed(1)}!`; 
        let imge = document.createElement('img');
        imge.setAttribute('id', 'foto');
        imge.setAttribute('src', 'img/recu.png');
        resultado.appendChild(imge);
    } else {
        resultado.innerHTML = `Reprovado com média ${media.toFixed(1)}!`;
        resultado.style.color = "red";
        resultado.style.fontWeight = "bold";
        let imge = document.createElement('img');
        imge.setAttribute('id', 'foto');
        imge.setAttribute('src', 'img/reprovado.png');
        resultado.appendChild(imge);
    }
}
var botao = document.getElementById("btnCalcular");
botao.addEventListener("click", result);