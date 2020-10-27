/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

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
        overlay.style.display = 'none';
        this.activePhrase = this.getRandomPhrase()
        this.activePhrase.addPhraseToDisplay();
    }
    handleInteraction(eventTarget) {
        this.activePhrase.checkLetter(eventTarget);
    }
}