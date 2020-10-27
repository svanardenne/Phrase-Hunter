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
        const letters = document.querySelectorAll('.letter');
        let match = null;
        for (let i = 0; i < letters.length; i++) {
            if (eventTarget.textContent.toLowerCase() === letters[i].textContent.toLowerCase()) {
               letters[i].classList.add('show');
               match = eventTarget.textContent; 
            }
        }
        return match;
    }
}