class Game {
    constructor() {
        this.missed = 0;
        this.phrases = this.createPhrases();
        this.activePhrase = null;
    }
    createPhrases() {
        let phraseArray = [
            new Phrase('For whom the bell tolls'),
            new Phrase('Let them eat cake'),
            new Phrase('Stairway to Heaven'),
            new Phrase('All along the watchtower'),
            new Phrase('Eleanor Rigby'),
            new Phrase('Simplicity is the ultimate sophistication'),
            new Phrase('What we think we become'),
            new Phrase('Common sense is not so common'),
            new Phrase('Vae Victis')
        ]
        return phraseArray;
    }
    getRandomPhrase() {
        let random = Math.floor(Math.random() * this.phrases.length);
        return this.phrases[random];
    }
    startGame() {
        const overlay = document.getElementById('overlay');
        const tries = document.getElementsByClassName('tries');
        const keys = document.getElementsByClassName('key');
        overlay.style.display = 'none';
        overlay.className = '';
        this.missed = 0;
        for (let i = 0; i < keys.length; i++) {
            keys[i].classList.remove('chosen', 'wrong');
            keys[i].disabled = false;
        }
        this.activePhrase = this.getRandomPhrase()
        this.activePhrase.addPhraseToDisplay();
        for (let i = 0; i < tries.length; i++) {
        tries[i].firstChild.src = "images/liveHeart.png"
        }
    }
    checkForWin() {
        const show = document.querySelectorAll('.show')
        const letter = document.querySelectorAll('.letter');
        if (show.length === letter.length) {
            return true;
        } else {
            return false;
        }
    }
    removeLife() {
        const tries = document.getElementsByClassName('tries');
        tries[this.missed].firstChild.src = 'images/lostHeart.png';
        this.missed++;
        if (this.missed >= tries.length) {
            this.gameOver();
        }
    }
    gameOver(bool) {
        const overlay = document.getElementById('overlay');
        if (bool) {
            overlay.style.display = 'flex';
            document.getElementById('game-over-message')
            .textContent = "You Win!";
            overlay.className = 'win';
        } else if (game.missed >= 5) {
            overlay.style.display = 'flex';
            document.getElementById('game-over-message')
            .textContent = "You Lose";
            overlay.className = 'lose';
        }
    }
    handleInteraction(eventTarget) {
        eventTarget.disabled = true;
        if (this.activePhrase.checkLetter(eventTarget)) {
            eventTarget.classList.add('chosen');
            this.activePhrase.showMatchedLetter(eventTarget);
        } else {
            eventTarget.classList.add('wrong');
            this.removeLife();
        }
        this.gameOver(this.checkForWin());
    }
}