"use strict"

function addTextEvent() {
    let textInput = document.getElementById('inputText');
    let textContainer = document.getElementById('textContainer');

    let newElement = document.createElement('p');
    newElement.textContent = textInput.value;
    setFontStyle(newElement)

    textContainer.append(newElement);

    textInput.value = '';
}

function setFontStyle(element) {
    let text = element.textContent

    let special = /[!@#$%^&*()_+]/;

    if (text.match(special)) {
        element.setAttribute('class', 'newElementRedStyle');
    } else if (text.length > 3) {
        element.setAttribute('class', 'newElementGreenStyle');
    }
}

document.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' || e.key === 'NumpadEnter') {
        addTextEvent();
    }
});