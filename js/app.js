let game;

document.getElementById('btn__reset').addEventListener('click', () => {
    game = new Game;
    game.startGame();
});

window.addEventListener('keyup', (e) => {
    const keyPressed = e.key;
    const overlay = document.getElementById('overlay');
    if (keyPressed === 'Enter') {
        if (overlay.className === 'start'
        || overlay.className === 'win'
        || overlay.className === 'lose'
        ) {
            game = new Game;
            game.startGame();
        }
    }
});

qwerty.addEventListener('click', (e) => {
    if (e.target.className === 'key') {
        game.handleInteraction(e.target);
    }
});

window.addEventListener('keyup', (e) => {
    const keyPressed = e.key.toLowerCase();
    const keys = document.getElementsByClassName('key');
    const overlay = document.getElementById('overlay');
    for (let i = 0; i < keys.length; i++) {
        if (keys[i].disabled === false) {
            if (keyPressed === keys[i].textContent && overlay.className === '') {
                game.handleInteraction(keys[i]);
            }
        }
    }
});
