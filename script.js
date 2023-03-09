
let hideText_b = document.getElementById('hideText_b');

let hideText = document.getElementById('hideText');

hideText_b.addEventListener('click', toggleText1);

function toggleText1() {

    hideText.classList.toggle('hide');
    if (hideText.classList.contains('hide')) {
        hideText_b.innerHTML = 'mostrar';
 
    }
    else{
        hideText_b.innerHTML = 'ocultar';
    }
}



let bet_b = document.getElementById('bet_b');

let bet = document.getElementById('bet');

bet_b.addEventListener('click', toggle);

function toggle() {

    bet.classList.toggle('ocultos');
    if (bet.classList.contains('ocultos')) {
        bet_b.innerHTML = 'mostrar';
 
    }
    else{
        bet_b.innerHTML = 'ocultar';
    }
}




let but_b = document.getElementById('but_b');

let but = document.getElementById('but');

but_b.addEventListener('click', toggleText);

function toggleText() {

    but.classList.toggle('sol');
    if (but.classList.contains('sol')) {
        but_b.innerHTML = 'mostrar';
 
    }
    else{
        but_b.innerHTML = 'ocultar';
    }
}

