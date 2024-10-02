import {tiles} from './tiles';
export function startGame() {
    let startTile = (Math.ceil(Math.random() * 15));
    tiles[startTile].insertAdjacentHTML('beforeend', '<img src="./images/goblin.png" width=100 height=100 class="goblin" alt="Гоблин">');
}