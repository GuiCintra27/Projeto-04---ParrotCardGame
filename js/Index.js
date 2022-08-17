const main = document.querySelector('main');

const imgs = [
    'bobrossparrot.gif',
    'explodyparrot.gif',
    'fiestaparrot.gif',
    'metalparrot.gif',
    'revertitparrot.gif',
    'tripletsparrot.gif',
    'unicornparrot.gif'
];

let cards = '';
let qtd, x = 0;

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

    let cardsGame = imgs.sort(() => Math.random() - 0.5);
    cardsGame = cardsGame.slice(-(qtd/2));
    cardsGame = [...cardsGame, ...cardsGame];
    cardsGame = cardsGame.sort(() => Math.random() - 0.5);

    for (i = 0; i < (qtd); i++){
        cards += `
            <div class="Card" id="${(cardsGame[i]).substr((cardsGame[i].length)-4)}">
                <div class="Back-side">
                    <img src="images/${cardsGame[i]}" alt="">
                </div>
                <div class="Front-side">
                    <img src="images/front.png" alt="">
                </div>
            </div>`;
    }

    main.innerHTML = cards;
    console.log(cards);
}

let card = document.querySelector('.Card');

