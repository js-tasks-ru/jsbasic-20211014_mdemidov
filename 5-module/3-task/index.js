function initCarousel() {
  // ваш код...
  let carousel = document.querySelector('.carousel');
  let wrapper = document.querySelector('.carousel__inner');
  let slides = wrapper.querySelectorAll('.carousel__slide');
  let slidesLength = slides.length;
  let widthSlide = wrapper.offsetWidth;
  let slidesShift = widthSlide * (slidesLength - 1);
  let arrowRight = document.querySelector('.carousel__arrow_right');
  let arrowLeft = document.querySelector('.carousel__arrow_left');

  let shift = 0;

  arrowLeft.style.display = 'none';

  carousel.addEventListener('click', function (event) {
    let target = event.target.closest('div');

    if (target == arrowRight) {

      shift += widthSlide;

      slides.forEach(() => wrapper.style.transform = `translateX(${-shift}px)`);

    };

    if (target == arrowLeft) {

      shift -= widthSlide;

      slides.forEach(() => wrapper.style.transform = `translateX(${- shift}px)`);

    };


    if (wrapper.style.transform != `translateX(0px)`) {
      arrowLeft.style.display = '';
    }

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
};
