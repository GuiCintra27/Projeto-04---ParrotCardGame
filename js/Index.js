const main = document.querySelector('main');
let moves = document.getElementById('Moves'), timer = document.getElementById('Timer');
let qtd = 0, x = 0, flip = 0, sec = 0, th = 0, op = 0;
let firstCard, secondCard, cards = '';

const imgs = [
    'bobrossparrot',
    'explodyparrot',
    'fiestaparrot',
    'metalparrot',
    'revertitparrot',
    'tripletsparrot',
    'unicornparrot'
];

function stopWatch(){
    setInterval(() => {
        timer.innerHTML = `${sec}:${th}` 
        th++;
        if(th < 10){
            th = '0'+th;
        }
        if (th === 100){
            sec ++;
            th = '0'+0;
        }
    },10);
}

function Start(){
    while (x === 0){
        qtd = Number(prompt('Bem vindo ao jogo da memória, escolha uma quantidade PAR de cartas entre 4 e 14 para começar a jogar'));
    
        if (qtd >= 4 && qtd <= 14 && qtd%2 === 0){
            x = 1;
        }else if (qtd < 4 || qtd > 14){
            alert("O número digitado não está no intervalo proposto!");
        }else if (qtd%2 === 1){
            alert("O número digitado não é par. Por favor selecione um número par!");
        }else {
            alert('Digite apenas números!');
        }
    }

    let cardsGame = (imgs.sort(() => Math.random() - 0.5)).slice(-(qtd/2));
    cardsGame = [...cardsGame, ...cardsGame].sort(() => Math.random() - 0.5);

    for (i = 0; i < (qtd); i++){
        cards += `
            <div class="Card" data-card="${cardsGame[i]}" id="${cardsGame[i]+i}" onclick="Flip(this)">
                <div class="Back-side">
                    <img src="images/${cardsGame[i]}.gif" alt="">
                </div>
                <div class="Front-side">
                    <img src="images/front.png" alt="">
                </div>
            </div>`;
    }

    main.innerHTML = cards;
    if (op === 0){
        stopWatch();
        op++;
    }
}

function Flip(x){
    
    if (firstCard){
        if (x.id === firstCard.id){
            alert('Selecione outra carta!');
            return false;
        }
    }
    
    flip ++;
    moves.innerHTML = `Jogadas ${flip}`;

    if (!secondCard){
        x.classList.add('Flip');
    }
    
    if (!firstCard){
        firstCard = x;
        return false;
    }
    
    secondCard = x;

    if (secondCard) {
        Match(firstCard, secondCard);
    }
}

function Match(a, b){
    if (a.dataset.card === b.dataset.card){

    }else{
        setTimeout(() => {
            a.classList.remove("Flip");
            b.classList.remove("Flip");
          }, 1000);
    }

    firstCard = '';
    secondCard = '';

    let win = document.querySelectorAll('.Flip');

    if (win.length === qtd){
        setTimeout(() => {
            alert(`Parabéns! Você ganhou em ${flip} jogadas!`);
            let z = String(prompt('Deseja jogar novamente?'));
            if (z.toLowerCase() === 'sim'){
                qtd = 0, x = 0, flip = 0, sec = 0, th = 0;
                firstCard = '', secondCard = '', cards = '';
                return Start();
            }else {
                window.close();
            }
          }, 1000);  
    }
}