import { searchFilms, changeIsSearchButtonEnabledFlag } from '../searchFilms';
import { insertRecgonitedTextToInput } from '../utils/utils';

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const microphone = document.getElementById('microphone');
const recognition = new window.SpeechRecognition();
recognition.interimResults = false;
recognition.lang = 'en-EN';
let isSpeechButtonHandlerEnabled = true;

const changeEnabledSpeechFlag = (flag) => {
    if (!flag) {
        isSpeechButtonHandlerEnabled = false;
        microphone.classList.add('microphone-container--active');
    } else {
        isSpeechButtonHandlerEnabled = true;
        microphone.classList.remove('microphone-container--active');
    }
};

microphone.addEventListener('click', () => {
    if (isSpeechButtonHandlerEnabled) {
        changeIsSearchButtonEnabledFlag(false);
        console.log('clicked');
        changeEnabledSpeechFlag(false);
        recognition.start();
    }
});

recognition.addEventListener('result', (evt) => {
    const resultArray = Array.from(evt.results);
    const recognitedText = resultArray[0][0].transcript;
    searchFilms(recognitedText);
    insertRecgonitedTextToInput(recognitedText);
    recognition.stop();
    changeEnabledSpeechFlag(true);
});

recognition.addEventListener('end', () => {
    changeEnabledSpeechFlag(true);
    changeIsSearchButtonEnabledFlag(true);
});
