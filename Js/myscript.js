//--variavel----------------------------------
var resultado = document.querySelector("#Resultado"),
casa1 = document.querySelector("#casa1"),
casa2 = document.querySelector("#casa2"),
casa3 = document.querySelector("#casa3"),
casa4 = document.querySelector("#casa4"),
casa5 = document.querySelector("#casa5"),
casa6 = document.querySelector("#casa6"),
casa7 = document.querySelector("#casa7"),
casa8 = document.querySelector("#casa8"),
casa9 = document.querySelector("#casa9"),
jogador1 = 0, jogagor2 = 0, imgx = new Image(), imgo = new Image();
//—tratamento de imgens——————————
imgx.src = "Img/Xis.PNG";
imgx.width = 200;imgx.height = 200;
imgo.src = "Img/Zero.jpg";
imgo.width = 200;imgo.height = 200;
//—evento click———————————————-
casa1. addEventListener("click", function(){
if(resultado.innerHTML == ""){
casa1.appendChild(imgx);
resultado.innerHTML = "Jogador 2"
}else if(casa1.innerHTML == ""){
casa1.appendChild(imgo);
resultado.innerHTML = "Jogador 1"
};
});

casa2.addEventListener("click", function(){
if(resultado.innerHTML == ""){
casa2.appendChild(imgx);
resultado.innerHTML = "Jogador 2"
}else if(casa2.innerHTML == ""){
casa2.appendChild(imgo);
resultado.innerHTML = "Jogador 1"
};
});

casa3.addEventListener("click", function(){
if(resultado.innerHTML == ""){
casa3.appendChild(imgx);
resultado.innerHTML = "Jogador 2"
}else if(casa3.innerHTML == ""){
casa3.appendChild(imgo);
resultado.innerHTML = "Jogador 1"
};
});

casa4.addEventListener("click", function(){
if(resultado.innerHTML == ""){
casa4.appendChild(imgx);
resultado.innerHTML = "Jogador 2"
}else if(casa4.innerHTML == ""){
casa4.appendChild(imgo);
resultado.innerHTML = "Jogador 1"
};
});

casa5.addEventListener("click", function(){
if(resultado.innerHTML == ""){
casa5.appendChild(imgx);
resultado.innerHTML = "Jogador 2"
}else if(casa5.innerHTML == ""){
casa5.appendChild(imgo);
resultado.innerHTML = "Jogador 1"
};
});

casa6.addEventListener("click", function(){
if(resultado.innerHTML == ""){
casa6.appendChild(imgx);
resultado.innerHTML = "Jogador 2"
}else if(casa6.innerHTML == ""){
casa6.appendChild(imgo);
resultado.innerHTML = "Jogador 1"
};
});

casa7.addEventListener("click", function(){
if(resultado.innerHTML == ""){
casa7.appendChild(imgx);
resultado.innerHTML = "Jogador 2"
}else if(casa7.innerHTML == ""){
casa7.appendChild(imgo);
resultado.innerHTML = "Jogador 1"
};
});

casa8.addEventListener("click", function(){
if(resultado.innerHTML == ""){
casa8.appendChild(imgx);
resultado.innerHTML = "Jogador 2"
}else if(casa8.innerHTML == ""){
casa8.appendChild(imgo);
resultado.innerHTML = "Jogador 1"
};
});

casa9.addEventListener("click", function(){
if(resultado.innerHTML == ""){
casa9.appendChild(imgx);
resultado.innerHTML = "Jogador 2"
}else if(casa9.innerHTML == ""){
casa9.appendChild(imgo);
resultado.innerHTML = "Jogador 1"
};
});