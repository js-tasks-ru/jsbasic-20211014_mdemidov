import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  constructor(slides) {
    this.slides = slides;
    this.elem = document.createElement('div');
    this.render();
    this.slidesScroll();
    this.button = this.elem.querySelectorAll('.carousel__button');
    this.elem.addEventListener('click', this.onClick);

  }

  render() {
    this.elem.classList.add('carousel');
    let arrowRight = createElement(`
      <div class="carousel__arrow carousel__arrow_right">
        <img src="/assets/images/icons/angle-icon.svg" alt="icon">
      </div>
    `);

    let arrowLeft = createElement(`
      <div class="carousel__arrow carousel__arrow_left">
        <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
      </div>
    `);

    arrowLeft.style.display = 'none';

    this.elem.append(arrowRight);
    this.elem.append(arrowLeft);

    let wrapper = document.createElement('div');
    wrapper.classList.add('carousel__inner');
    this.elem.append(wrapper);

    let slide;

    for (let i = 0; i < this.slides.length; i++) {
      slide = createElement(`
      <div class="carousel__slide" data-id="${this.slides[i].id}">
        <img src="/assets/images/carousel/${this.slides[i].image}" class="carousel__img" alt="slide">
          <div class="carousel__caption">
            <span class="carousel__price">€${this.slides[i].price.toFixed(2)}</span>
            <div class="carousel__title">${this.slides[i].name}</div>
            <button type="button" class="carousel__button">
              <img src="/assets/images/icons/plus-icon.svg" alt="icon">
            </button>
          </div>
        </div>
      `)
      wrapper.append(slide);
    }

  }

  onClick = (event) => {
    let target = event.target.closest('button');
    if (!target) return;
    let parentEl = target.parentNode.parentNode;

    this.id = parentEl.dataset.id;
    console.log(this.id);

    let addToCart = new CustomEvent('product-add', {
      bubbles: true,
      detail: this.id
    });
    this.elem.dispatchEvent(addToCart);





    return this.id;
  }

  slidesScroll() {
    let wrapper = this.elem.querySelector('.carousel__inner');
    let slides = wrapper.querySelectorAll('.carousel__slide');
    let slidesLength = slides.length;
    let arrowRight = this.elem.querySelector('.carousel__arrow_right');
    let arrowLeft = this.elem.querySelector('.carousel__arrow_left');

    let shift = 0;

    this.elem.addEventListener('click', function (event) {
      let target = event.target.closest('div');

      if (target == arrowRight) {

        shift += wrapper.offsetWidth;

        slides.forEach(() => wrapper.style.transform = `translateX(${-shift}px)`);

      };

      if (target == arrowLeft) {

        shift -= wrapper.offsetWidth;

        slides.forEach(() => wrapper.style.transform = `translateX(${- shift}px)`);

      };


      if (wrapper.style.transform != `translateX(0px)`) {
        arrowLeft.style.display = '';
      }

      let slidesShift = wrapper.offsetWidth * (slidesLength - 1);

      if (wrapper.style.transform != `translateX(${-slidesShift}px)`) {
        arrowRight.style.display = '';
      }

      if (wrapper.style.transform == `translateX(${-slidesShift}px)`) {
        arrowRight.style.display = 'none';
      }

      if (wrapper.style.transform == `translateX(0px)`) {
        arrowLeft.style.display = 'none';
        arrowRight.style.display = '';

      }

    });

  }

}
