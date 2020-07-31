import newSwiper from './api/swiper.js';
import { prepareFilmsData, insertFilmCard, renderFilmsCardsMarkup, addEventListenersToFilmCards } from './index';

const initFirstFilmsCardsRender = async () => {
    const data = await prepareFilmsData(newSwiper.currentSearchRequest, newSwiper.currentPageCounter);
    newSwiper.insertSwiperMarkup(renderFilmsCardsMarkup(data));
    newSwiper.initSwiper();
    addEventListenersToFilmCards(data);
};

initFirstFilmsCardsRender();
