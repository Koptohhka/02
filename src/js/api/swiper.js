import { insertSpinnerToButton, removeSpinnerFromButton } from '../utils/utils';
import {
  prepareFilmsData,
  renderFilmsCardsMarkup,
  addEventListenersToFilmCards
} from '../index';

class MySwiper {
  constructor() {
    this.swiper = null;
    this.currentPageCounter = 1;
    this.isOnEndHandlerEnabled = true;
    this.isAllPagesFinished = false;
    this.currentSearchRequest = 'batman';
  }

  async onEndSwiperHandler() {
    if (this.isOnEndHandlerEnabled) {
      insertSpinnerToButton();
      this.isOnEndHandlerEnabled = false;
      this.currentPageCounter += 1;
      const data = await prepareFilmsData(this.currentSearchRequest, this.currentPageCounter);
      if (data) {
        this.swiper.appendSlide(renderFilmsCardsMarkup(data));
        addEventListenersToFilmCards(data);
      }
      this.isOnEndHandlerEnabled = true;
      removeSpinnerFromButton();
    }
  }

  initSwiper() {
    this.swiper = new Swiper('.swiper-container', {
      loop: false,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-nextt',
        prevEl: '.swiper-button-prevv',
      },
      direction:	'horizontal',
      slidesPerView: 4,
      spaceBetween: 20,
      breakpoints: {
        320: {
          slidesPerView: 1,
          paceBetween: 'auto',
        },
        470: {
          slidesPerView: 2
        },
        722: {
          slidesPerView: 3,
        },
        900: {
          slidesPerView: 4
        }
      }
    });
    this.swiper.on('reachEnd', this.onEndSwiperHandler.bind(this));
  };

  insertSwiperMarkup(startSlides) {
    const markup = `<div id="swiper-container" class="swiper-container">
    <div id="films-container" class="swiper-wrapper">
    ${startSlides}
    </div>
    <div class="swiper-pagination"></div>
    </div>
    <div class="swiper-button-prevv">
        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-left" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="#5d1049" d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"></path></svg>
    </div>
      <div class="swiper-button-nextt">
        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-left" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="#5d1049" d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"></path></svg></div>
    `;
    document.getElementById('wrapper').insertAdjacentHTML('beforeend', markup);
  };

  changeCurrentPageCounter() {
    this.currentPageCounter++;
  };

  insertNewSlides(slides) {
    this.isOnEndHandlerEnabled = false;
    this.swiper.removeAllSlides();
    this.swiper.appendSlide(slides);
    this.isOnEndHandlerEnabled = true; 
    this.swiper.slideTo(0);
  }

  changeCurrentSearchRequest(request) {
    this.currentSearchRequest = request;
  }
};

const newSwiper = new MySwiper();

export default newSwiper;