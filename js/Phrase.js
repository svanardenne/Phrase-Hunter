/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }
    addPhraseToDisplay() {
        const phraseDiv = document.getElementById('phrase');
        let ul = document.createElement('UL');
        for(let i = 0; i < this.phrase.length; i++) {
            if (this.phrase[i] !== ' ') {
                ul.innerHTML += `<li class="hide letter">${this.phrase[i]}</li>`;
            } else {
                ul.innerHTML += `<li class="hide space"> </li>`;
            }
        }
        phraseDiv.innerHTML = '';
        phraseDiv.appendChild(ul);
    }
    checkLetter(eventTarget) {
        for (let i = 0; i < this.phrase.length; i++) {
            if (this.phrase.includes(eventTarget.textContent)) {
               return true;
            } else {
                return false;
            }
        }  
    }
    showMatchedLetter(eventTarget) {
        const letters = document.getElementsByClassName('letter');
        for (let i = 0; i < letters.length; i++) {
            if (eventTarget.textContent === letters[i].textContent) {
                letters[i].classList.add('show');
                letters[i].classList.remove('hide');
            }
        }
    }
}