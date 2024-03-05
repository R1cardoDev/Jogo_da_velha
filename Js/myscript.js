// -- Variáveis ---------------------------------------------------
const resultado = document.querySelector("#resultado");
const listaClick = [], listaJogador1 = [], listaJogador2 = [];
const arrayjogo1 = [], arrayjogo2 = [];
let jogador1 = "", jogador2 = "", contador = null;

// Função para verificar o ganhador --------------------------------
function verificaGanhador(jogador, arrays) {
    // Lista de possíveis combinações vencedoras ----------------------
    const listaVencedor = [
        123, 132, 213, 231, 312, 321, 456, 465, 546, 564, 645, 654, 789, 798, 879, 897, 978,
        987, 147, 174, 417, 471, 714, 741, 258, 285, 528, 582, 825, 852, 369, 396, 639, 693,
        936, 963, 159, 195, 519, 591, 915, 951, 357, 375, 537, 573, 735, 753, 629, 692, 269,
        296, 962, 926
    ];
    // Loops de verificação ------------------------------------------
    for (let t = 0; t <= 11; t++) {
        let sequencia = arrays;
        sequencia = sequencia.filter(numero => numero !== t);
        for (let w = 0; w <= 11; w++) {
            let sequencia2 = sequencia;
            sequencia2 = sequencia2.filter(numero => numero !== w).join('');
            for (let x = 0; x <= listaVencedor.length; x++) {
                if (sequencia2 == listaVencedor[x] || sequencia2.slice(1) == listaVencedor[x] || sequencia2.slice(2) == listaVencedor[x] || sequencia2.slice(3) == listaVencedor[x]) {
                    resultado.innerHTML = ""; resultado.innerHTML = `${jogador} Venceu !!`;
                };
            }
        }
    }
}

// -- Evento dos botões --------------------------------------------
function evento(y) {
    // Tratamento de imagens -----------------------------------------
    const imgx = new Image();
    const imgo = new Image();
    imgx.src = "Img/Xis.PNG";
    imgx.width = 170; imgx.height = 170;
    imgo.src = "Img/Zero.jpg";
    imgo.width = 170; imgo.height = 170;

    // Verificar a opção de clique -----------------------------------
    listaClick.push(y);
    const verif = listaClick.filter(x => x === y).length;
    if (verif <= 1) {
        if (resultado.innerHTML == "" || resultado.innerHTML == null) {
            document.querySelector("#casa" + y).appendChild(imgx);
            resultado.innerHTML = "Jogador 2";
            jogador1 += y; arrayjogo1.push(y);
        } else if (resultado.innerHTML == "Jogador 1") {
            document.querySelector("#casa" + y).appendChild(imgx);
            resultado.innerHTML = "Jogador 2";
            jogador1 += y; arrayjogo1.push(y);
            verificaGanhador("Jogador 1", arrayjogo1);
        } else if (resultado.innerHTML == "Jogador 2") {
            document.querySelector("#casa" + y).appendChild(imgo);
            resultado.innerHTML = "Jogador 1";
            jogador2 += y; arrayjogo2.push(y);
            verificaGanhador("Jogador 2", arrayjogo2);
        };
    }

    // Finalizar o jogo ----------------------------------------------
    contador += 1;
    if (contador === 9 && resultado.innerHTML != "Jogador 1 Venceu !!") {
        resultado.innerHTML = "Deu Veia !!";
    }

}


