
/*
Consegna
L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero (in ordine) tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49

*/

const select = document.getElementById('levels');
const mainSquare = document.getElementById('square');
const playButton = document.getElementById('btn-play');

let arrLevels = [100, 81, 49];

playButton.addEventListener('click', setupGame);

function setupGame() {

    mainSquare.innerHTML = '';

    const indexLevels = parseInt(select.value);

    const cellsCount = arrLevels[indexLevels];

    const cellParRow = Math.sqrt(cellsCount);

    let box;

    let arr = [];

    let i = 0;

    while (i < 17) {
        let randomNumber = Math.floor(Math.random() * (cellsCount - 1) + 1);
        if (!arr.includes(randomNumber)) {
            arr.push(randomNumber)
            i++
        }
    }

    console.log(arr)

    for (let cellNum = 1; cellNum <= cellsCount; cellNum++) {

        box = document.createElement('div');
        box.classList.add('box');
        box.innerHTML = cellNum
        box.style.width = `calc(100% / ${cellParRow})`;
        box.style.height = `calc(100% / ${cellParRow})`;

        mainSquare.append(box);

        box.addEventListener('click', changeColor);
        
    }

    function changeColor() {

        if(!arr.includes(parseInt(this.innerHTML))) {
            this.classList.add('selected-save');
        } else {
            this.classList.add('selected-bomb');

        }

    } 
   
}




