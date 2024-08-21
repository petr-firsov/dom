const tiles = Array.from(document.querySelectorAll('.tile'));

function startGame() {
    let startTile = (Math.ceil(Math.random() * 15));
    tiles[startTile].insertAdjacentHTML('beforeend', '<img src="./images/goblin.png" width=100 height=100 class="goblin" alt="Гоблин">');
}

function moveGoblin() {
    let goblin = document.querySelector('.goblin');
    let goblinParent = goblin.parentElement;
    let currentTile = tiles.indexOf(goblinParent);
    let nextTile = (Math.ceil(Math.random() * 15));
    while (nextTile === currentTile) {
        nextTile = (Math.ceil(Math.random() * 15));
    }
    goblin.remove();
    tiles[nextTile].insertAdjacentHTML('beforeend', '<img src="./images/goblin.png" width=100 height=100 class="goblin">');
}

startGame();

const game = setInterval(moveGoblin, 1500);