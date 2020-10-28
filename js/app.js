/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
const qwerty = document.getElementById('qwerty');
let game;

document.getElementById('btn__reset').addEventListener('click', () => {
    game = new Game;
    game.startGame();
});

qwerty.addEventListener('click', (e) => {
    if (e.target.className === 'key') {
        game.handleInteraction(e.target);
    }
});