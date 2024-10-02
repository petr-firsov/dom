import {tiles} from './tiles';
import goblin from './images/goblin.png';
export function startGame() {
    let startTile = (Math.ceil(Math.random() * 15));
    tiles[startTile].insertAdjacentHTML('beforeend', `<img src="${goblin}" width=100 height=100 class="goblin" alt="Гоблин">`);
}


