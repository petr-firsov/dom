import {tiles} from './tiles';
import image from './images/goblin.png';
export function startGame() {
    let startTile = (Math.ceil(Math.random() * 15));
    tiles[startTile].insertAdjacentHTML('beforeend', `<img src="${image}" width=100 height=100 class="goblin" alt="Гоблин">`);
}