//--variavel----------------------------------
const resultado = document.querySelector("#resultado"), listaClick = [];
var jogador1 = "", jogador2 = "", contador = null;

//--tratar e retornar dados---------
function eevento(y) {

    //—tratamento de imgens——————————
    var imgo = new Image();
    var imgx = new Image();
    imgx.src = "Img/Xis.PNG";
    imgx.width = 200; imgx.height = 200;
    imgo.src = "Img/Zero.jpg";
    imgo.width = 200; imgo.height = 200;

    // vericar o click opcao---------------
    listaClick.push(y);
    var verif = listaClick.filter(x => x === y).length;
    if (verif <= 1) {
        if (resultado.innerHTML == "" || resultado.innerHTML == null) {
            document.querySelector("#casa" + y).appendChild(imgx);
            resultado.innerHTML = "Jogador 2";
            jogador1 += y;

        } else if (resultado.innerHTML == "Jogador 1") {
            document.querySelector("#casa" + y).appendChild(imgx);
            resultado.innerHTML = "Jogador 2";
            jogador1 += y;

        } else if (resultado.innerHTML == "Jogador 2") {
            document.querySelector("#casa" + y).appendChild(imgo);
            resultado.innerHTML = "Jogador 1";
            jogador2 += y;
        };
    }
    // lista de probabilidade de ganhar---------------------------------------------------------
    console.log("jogador1 "+jogador1);
    console.log("jogador2 "+jogador2);
    listaVencedor = [123, 132, 213, 231, 312, 321, 456, 465, 564, 546, 654, 645, 789, 798, 897,
        879, 978, 987, 147, 174, 471, 417, 714, 741, 258, 285, 582, 528, 852, 825, 369, 396, 693,
        639, 936, 963, 159, 195, 591, 519, 951, 915357, 375, 537, 573, 753, 735, 6239, 5791];

    for (var x = 0; x <= listaVencedor.length; x++) {
        if (jogador1 == listaVencedor[x] || jogador1.slice(1) == listaVencedor[x] || jogador1.slice(2) == listaVencedor[x] || jogador1.slice(3) == listaVencedor[x]) {
            resultado.innerHTML = ""; resultado.innerHTML = "Jogador 1 Venceu !!"
        };
        if (jogador2 == listaVencedor[x] || jogador2.slice(1) == listaVencedor[x] || jogador2.slice(2) == listaVencedor[x] || jogador2.slice(3) == listaVencedor[x]) {
            resultado.innerHTML = ""; resultado.innerHTML = "Jogador 1 Venceu !!"
        };
    }
    // finalizar o jogo ------------------------------------------
    contador += 1; if (contador === 9 ){resultado.innerHTML = "Deu Veia !!"};

}

