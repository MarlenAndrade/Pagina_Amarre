function moverPosicionRandom(elm){
    elm.style.position = 'absolute';
    elm.style.top = Math.random() * (window.innerHeight - elm.offsetHeight) + 'px'; //para que no salga de la pantalla de lo ancho
    elm.style.left = Math.random() * (window.innerWidth - elm.offsetinnerWidth) + 'px'; //para que no salga de la pantalla de lo alto
}

let btnSi = document.getElementById("btn_si");
let btnNo = document.getElementById("btn_no");
let divModoSexo = document.getElementsByClassName("modo_hot")[0]; //solo hay uno -> valor 0

btnNo.addEventListener('mouseenter', function(e) { moverPosicionRandom(e.target) });

btnSi.addEventListener('click', function(e){
    alert('Sabía que dirías que SÍ. Casémonos ya y tengamos hijos. TE AMO!!! ❤');

    divModoSexo.style.display = 'block'; //si aparece el elemento, hidden ahí sigue pero no se ve, none lo desaparece
    const cancion = new Audio('img\\modo_hot.mp3');
    cancion.play();
});

window.addEventListener('beforeunload', (event) => {
    event.preventDefault();
    event.returnValue = "";
});