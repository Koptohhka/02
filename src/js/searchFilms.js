import newSwiper from './api/swiper.js';
import {
    insertSpinnerToButton,
    removeSpinnerFromButton
} from './utils/utils';
import {
    prepareFilmsData,
    renderFilmsCardsMarkup,
    addEventListenersToFilmCards,
} from './index';

let isSearchButtonEnabled = true;

const changeIsSearchButtonEnabledFlag = (value) => {
    isSearchButtonEnabled = value;
};

const insertErrorFoundMessage = (errorMessage) => {
    document.getElementById('error-message').textContent = errorMessage;
};

const searchFilms = async (requestText) => {
    changeIsSearchButtonEnabledFlag(false);
    insertSpinnerToButton();
    const data = await prepareFilmsData(requestText, 1);
    if (data) {
        newSwiper.changeCurrentSearchRequest(requestText);
        newSwiper.insertNewSlides(renderFilmsCardsMarkup(data));
        addEventListenersToFilmCards(data);
    } else if (requestText === '') {
        insertErrorFoundMessage(`No results for empty string`);
    } else {
        insertErrorFoundMessage(`No results for ${requestText}`);
    }
    removeSpinnerFromButton();
    changeIsSearchButtonEnabledFlag(true);
};

document.getElementById('search-button').addEventListener('click', async () => {
    if (isSearchButtonEnabled) {
        await searchFilms(document.getElementById('search-input').value);
    }
});

export {
    searchFilms,
    changeIsSearchButtonEnabledFlag
};