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
const strictButton = document.querySelector('#strict');
const onButton = document.querySelector('#on');
const startButton = document.querySelector('#start');

strictButton.addEventListener('click', (event) => {
    if (strictButton.checked == true){
        strict =  true;
    } else {
        strict = false;
    }
});

onButton.addEventListener('click', (event) => {
    if (onButton.checked == true){
        on = true;
        turnCounter.innerHTML = "-";
    } else {
        on = false;
        turnCounter.innerHTML = "";
        clearColor();
        clearInterval(intervalId);
    }
});

startButton.addEventListener('click', (event) => {
    if(on || win){
        play();
    }
});

function play() {
    win = false;
    order = [];
    playerOrder = [];
    flash = 0;
    intervalId = 0;
    turn = 1;
    turnCounter.innerHTML = 1;
    good = true;
    for(let i=0; i < 20; i++){
        order.push(Math.floor(Math.random() * 4) + 1);
    }
    console.log(order);
}