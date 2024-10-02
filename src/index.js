import './index.css';

import {startGame} from './startgame';
import {moveGoblin} from './movegoblin';

startGame();
setInterval(moveGoblin, 1500);