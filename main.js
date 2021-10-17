const $arenas = document.body.querySelector('.arenas');
const $randomButton = document.querySelector('.button')

let playerFirst = {
    name: 'player one',
    player: 1,
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
    weapon: [
        'shotgun',
        'bare hands'
    ],
    attack: function () {
        console.log(`${this.name} fight`)
    }
};

let playerSecond = {
    name: 'player two',
    player: 2,
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: [
        'katana',
        'surikens',
        'bazuka'
    ],
    attack: function () {
        console.log(`${this.name} fight`)
    }
};

function createPlayer(playerClassName, playerObj) {
    let playerClassDiv = document.createElement('div');
    playerClassDiv.className = playerClassName;

    let progressBarDiv = document.createElement('div');
    progressBarDiv.className = 'progressbar';

    let lifeBarDiv = document.createElement('div');
    lifeBarDiv.className = 'life';
    lifeBarDiv.style.width = '100%';

    let nameDiv = document.createElement('div');
    nameDiv.className = 'name';
    nameDiv.innerHTML = playerObj.name;
    progressBarDiv.appendChild(lifeBarDiv);
    progressBarDiv.appendChild(nameDiv);

    let characterDiv = document.createElement('div');
    characterDiv.className = 'character';
    let img = document.createElement('img');
    img.src = playerObj.img;
    characterDiv.appendChild(img);

    playerClassDiv.appendChild(progressBarDiv);
    playerClassDiv.appendChild(characterDiv);

    $arenas.appendChild(playerClassDiv);
}

function changeHP (playerObj) {
    $playerLife = document.body.querySelector(`.player${playerObj.player} .life`);
    let randomValue = Math.ceil(Math.random() * 20);
    playerObj.hp = playerObj.hp - randomValue > 0 ? playerObj.hp - randomValue : 0;
    $playerLife.style.width = `${playerObj.hp}%`;

    if(playerObj.hp === 0) {
        $arenas.appendChild(playerWin(playerObj.name));
        $randomButton.disabled = true;
    }
}

function playerWin(playerName)  {
    const $winTitle = document.createElement('div');
    $winTitle.className = 'winTitle';
    $winTitle.innerText = `${playerName} win`;

    return $winTitle;
}

$randomButton.addEventListener('click', () => {
    changeHP(playerFirst);
    changeHP(playerSecond);
});


createPlayer('player1', playerFirst);
createPlayer('player2', playerSecond);