let playerFirst = {
    name: 'player one',
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

    document.body.querySelector('.arenas').appendChild(playerClassDiv);
}


createPlayer('player1', playerFirst);
createPlayer('player2', playerSecond);