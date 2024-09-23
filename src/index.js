import './index.css';

import {startGame} from './startgame';
import {moveGoblin} from './movegoblin';

startGame();
const game = setInterval(moveGoblin, 1500);