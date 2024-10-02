import {tiles} from './tiles';
import goblin from './images/goblin.png';
export function moveGoblin() {
    let goblin = document.querySelector('.goblin');
    let goblinParent = goblin.parentElement;
    let currentTile = tiles.indexOf(goblinParent);
    let nextTile = (Math.ceil(Math.random() * 15));
    while (nextTile === currentTile) {
        nextTile = (Math.ceil(Math.random() * 15));
    }
    goblin.remove();
    tiles[nextTile].insertAdjacentHTML('beforeend', `<img src="${goblin}" width=100 height=100 class="goblin">`);
}

