import {tiles} from './tiles';
export function moveGoblin() {
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

