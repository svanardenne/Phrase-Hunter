/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }
    addPhraseToDisplay() {
        const phraseDiv = document.getElementById('phrase');
        let string = this.phrase;
        let ul = document.createElement('UL');
        for(let i = 0; i < string.length; i++) {
            if (string[i] !== ' ') {
                ul.innerHTML += `<li class="hide letter">${string[i]}</li>`;
            } else {
                ul.innerHTML += `<li class="hide space"> </li>`;
            }
        }
        phraseDiv.appendChild(ul);
    }
    checkLetter(eventTarget) {
        let match = null;
        for (let i = 0; i < this.phrase.length; i++) {
            if (this.phrase.includes(eventTarget.textContent)) {
               return match = true;
            } else {
                return match = false;
            }
        }  
    }
}