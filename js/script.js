
/*
Copiamo la griglia fatta ieri nella nuova repo e aggiungiamo la logica del gioco (attenzione: non bisogna copiare tutta la cartella dell'esercizio ma solo l'index.html, e le cartelle js/ css/ con i relativi script e fogli di stile, per evitare problemi con l'inizializzazione di git).

L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49

Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.

I numeri nella lista delle bombe non possono essere duplicati.

In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina, altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.

La partita termina quando il giocatore clicca su una bomba o raggiunge il numero massimo possibile di numeri consentiti.

Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una b.

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
        box.innerHTML = cellNum;
        box.style.width = `calc(100% / ${cellParRow})`;
        box.style.height = `calc(100% / ${cellParRow})`;
        mainSquare.append(box);


        if (!arr.includes(parseInt(cellNum))) {
            box.classList.add('box-save');
        } else {
            box.classList.add('box-bomb');
        }

        box.addEventListener('click', changeColor);



    }

    function changeColor() {
        if (box.classList.contains('box-save')) {
            this.classList.add('selected-save')
        } else {
            box.classList.add('selected-bomb')
        }
    }

    
}





