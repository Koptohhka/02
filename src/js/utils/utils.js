const insertSpinnerToButton = () => {
    document.getElementById('search-button').innerHTML = '<div class="loader loader--button">Loading...</div>';
}

const removeSpinnerFromButton = () => {
    document.getElementById('search-button').innerText = 'search';
}

const insertRecgonitedTextToInput = (textValue) => {
    document.getElementById('search-input').value = textValue;
}

export { insertSpinnerToButton, removeSpinnerFromButton, insertRecgonitedTextToInput };