import {
    CELL_CLASS,
    EN_KEYS,
    RU_KEYS
} from './keys-data';

const initKeyboard = () => {
    const keyBoardContainer = document.getElementById('wrapper');
    keyBoardContainer.insertAdjacentHTML('afterbegin', '<div id="keyboard-container" class="keyboard-container"</div>');
    const textInput = document.getElementById('search-input');

    const KEYBOARD_METHODS = {
        'CapsLock': true,
        'Shift': true,
        'Control': true,
        'fn': true,
        'Tab': function () {
            textInput.value += '      ';
        },
        'Backspace': function () {
            return textInput.value = textInput.value.slice(0, -1);
        },
        'Alt': true,
        'OS': true,
        'Enter': function() {
            return textInput.value = textInput.value + '\n'
        }
    }

    let upperCaseFlag = false;
    let langFlag = true;
    let currentLanguage = EN_KEYS;

    function renderKeyboard(classes, data) {
        let cellsArray = [];
        let activeClass = '';
        classes.forEach((it, i) => {
            activeClass = 'keyboard__cell--active';
            let cellItem = `<div id="${data[i]}" class="keyboard__cell ${it}">${data[i]}</div>`;
            cellsArray.push(cellItem);
        })

        let keyboard = `<div class="keyboard">${cellsArray.join('')}</div>`;
        keyBoardContainer.innerHTML = keyboard;
    }
    renderKeyboard(CELL_CLASS, currentLanguage[0]);

    function toChangeLangFlag() {
        if (langFlag) {
            langFlag = false;
        } else {
            langFlag = true;
        }
    }

    function toChangeLang() {
        if (langFlag) {
            currentLanguage = RU_KEYS;
        } else {
            currentLanguage = EN_KEYS;
        }
        renderKeyboard(CELL_CLASS, currentLanguage[0]);
    }

    function toChangeCaseFlag() {
        if (!upperCaseFlag) {
            upperCaseFlag = true;
        } else {
            upperCaseFlag = false;
        }
    }

    function toChangeCase() {
        if (!upperCaseFlag) {
            renderKeyboard(CELL_CLASS, currentLanguage[1]);
        } else {
            renderKeyboard(CELL_CLASS, currentLanguage[0]);
        }
    }

    function toAddBorder(id) {
        let targetElement = document.getElementById(id);

        if (targetElement.id !== 'CapsLock') {
            targetElement.classList.add('keyboard__cell--active');

            function toRemoveBorder() {
                targetElement.classList.remove('keyboard__cell--active');
            }

            document.addEventListener('mouseup', toRemoveBorder);
            document.addEventListener('keyup', toRemoveBorder);
        } else {
            if (upperCaseFlag) {
                targetElement.classList.add('keyboard__cell--active');
            } else {
                targetElement.classList.remove('keyboard__cell--active');
            }
        }
    }

    function toAddletter(targetElement) {
        textInput.value += targetElement.textContent;
    }

    document.addEventListener('mousedown', function (evt) {
        if (evt.target.classList.contains("keyboard__cell")) {
            if (evt.target.id === 'CapsLock') {
                toChangeCase();
                toChangeCaseFlag();
            }

            if (evt.target.id === 'Shift') {
                toChangeCase();
                toChangeCaseFlag();

                function shiftClickFunction() {
                    toChangeCase();
                    toChangeCaseFlag();
                    document.removeEventListener('mouseup', shiftClickFunction);
                }

                document.addEventListener('mouseup', shiftClickFunction);
            }

            if (evt.target.id === 'Context') {
                toChangeLang();
                toChangeLangFlag();
            }

            toAddBorder(evt.target.id);

            if (KEYBOARD_METHODS[evt.target.id] === undefined) {
                toAddletter(evt.target);
            } else if (typeof KEYBOARD_METHODS[evt.target.id] === 'function') {
                KEYBOARD_METHODS[evt.target.id]();
            }
        }
    });
};

export default initKeyboard;
