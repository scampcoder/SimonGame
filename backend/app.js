let order = [];
let playerOrder = [];
let flash;
let turn;
let good;
let compTurn;
let intervalId;
let string = false;
let noise = true;
let on = false;
let win;

const turnCounter = document.querySelector('#turn');
const topLeft = document.querySelector('#topleft');
const topRight = document.querySelector('#topright');
const bottonLeft = document.querySelector('#bottomleft');
const bottomRight = document.querySelector('#bottomright');
const strict = document.querySelector('#strict');
const onButton = document.querySelector('#on');
const startButton = document.querySelector('#start');

startButton.addEventListener('click', (event) => {
    if (strictButton.checked == true){
        strict =  true;
    } else {
        strict = false;
    }
})

onButton.addEventListener('click', (event) => {
    if (onButton.checked == true){
        on = true;
        turnCounter.innerHTML = "-";
    } else {
        on = false;
    }
})