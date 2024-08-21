/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const tiles = Array.from(document.querySelectorAll('.tile'));\r\n\r\nfunction startGame() {\r\n    let startTile = (Math.ceil(Math.random() * 15));\r\n    tiles[startTile].insertAdjacentHTML('beforeend', '<img src=\"./images/goblin.png\" width=100 height=100 class=\"goblin\" alt=\"Гоблин\">');\r\n}\r\n\r\nfunction moveGoblin() {\r\n    let goblin = document.querySelector('.goblin');\r\n    let goblinParent = goblin.parentElement;\r\n    let currentTile = tiles.indexOf(goblinParent);\r\n    let nextTile = (Math.ceil(Math.random() * 15));\r\n    while (nextTile === currentTile) {\r\n        nextTile = (Math.ceil(Math.random() * 15));\r\n    }\r\n    goblin.remove();\r\n    tiles[nextTile].insertAdjacentHTML('beforeend', '<img src=\"./images/goblin.png\" width=100 height=100 class=\"goblin\">');\r\n}\r\n\r\nstartGame();\r\n\r\nconst game = setInterval(moveGoblin, 1500);\n\n//# sourceURL=webpack://dom/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;