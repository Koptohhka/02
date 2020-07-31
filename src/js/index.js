import {
    getFilmDataById,
    getFilmsDataByTitle
} from './services/filmsApiServices';
import noPoster from '../assets/img/keep-calm-poster-not-found.png';
import '../css/style.css';

const prepareFilmsData = async (filmTitle, currentPageCounter) => {
    const filmsData = [];
    const rawFilmsData = await getFilmsDataByTitle(filmTitle, currentPageCounter);
    if (rawFilmsData && rawFilmsData.Response === 'True') {
        const {
            Search
        } = rawFilmsData;
        for (let i = 0; i < Search.length; i += 1) {
            const filmData = await getFilmDataById(Search[i].imdbID);
            filmsData.push(filmData);
        }
        return filmsData;
    } else {
        return false;
    }
};

const renderFilmCard = (filmData) => {
    const {
        Poster,
        Title,
        imdbRating
    } = filmData;
    return `<div class="swiper-slide film-card-item film-card-item--new-card">
        <img class="film-card-item__image"
            src="${Poster !== "N/A" ? Poster : noPoster}"
             alt="">
            <p class="film-card-item__title">${Title}</p>
        ${imdbRating ? `<div class="film-card-item__rate">${imdbRating}</div>` : ''}
    </div>`
};

const renderFilmsCardsMarkup = (filmsData) => {
    console.log(filmsData);
    const filmCardItems = [];
    filmsData.forEach((it) => {
        filmCardItems.push(renderFilmCard(it));
    });
    return filmCardItems.join('');
};

const insertFilmCard = (markup) => {
    const filmsContainer = document.getElementById('films-container');
    filmsContainer.innerHTML = markup;
};

const addEventListenersToFilmCards = (filmsData) => {
    const showFilmInfoCard = (filmData) => {
        console.log(filmData);
        const { Title, Poster, Year, Plot, Actors } = filmData;
        document.getElementById('wrapper').insertAdjacentHTML('afterend', `<div id="full-film-card" class="full-film-card-wrapper"><div class="full-film-card"><img class="full-film-card__image" src="${Poster !== "N/A" ? Poster : noPoster}"><div class="full-film-card__info-container"><p class="full-film-card__title">${Title}</p><p class="full-film-card__realised">Realised: ${Year}</p><p class="full-film-card__cast">${Actors}</p><p class="full-film-card__description">${Plot !== "N/A" ? Plot : 'No description'}</p></div></div></div>`);
    };

    const removeFilmInfoCard = (evt) => {
        if (evt.target.classList.contains('full-film-card-wrapper')) {
            document.getElementById('full-film-card').remove();
            document.removeEventListener('click', removeFilmInfoCard);
        }
    };

    console.log(filmsData, 'here');

    document.querySelectorAll('.film-card-item--new-card').forEach((it, i) => {
        it.classList.remove('film-card-item--new-card');
        it.addEventListener('click', () => {
            showFilmInfoCard(filmsData[i]);
            document.addEventListener('click', removeFilmInfoCard);
        });
    });
};

export {
    prepareFilmsData,
    renderFilmCard,
    insertFilmCard,
    renderFilmsCardsMarkup,
    addEventListenersToFilmCards
};
require('./renderFilms.js');
require('./searchFilms.js');
require('./api/speechRecognitionApi.js');











