function initCarousel() {
  // ваш код...
  let carousel = document.querySelector('.carousel');
  let wrapper = document.querySelector('.carousel__inner');
  let slides = wrapper.querySelectorAll('.carousel__slide');
  let slidesLength = slides.length;
  let firstSlide = slides[0];
  let lastSlide = slides[slidesLength - 1];

  // console.log(carousel.scrollWidth, carousel.offsetWidth, carousel.clientWidth);
  // console.log(window.pageYOffset);


  let widthSlide = wrapper.offsetWidth;

  let arrowRight = document.querySelector('.carousel__arrow_right');
  let arrowLeft = document.querySelector('.carousel__arrow_left');

  let shift = 0;

  arrowLeft.style.display = 'none';

  carousel.addEventListener('click', function (event) {
    let target = event.target.closest('div');

    if (target == arrowRight) {

      shift += widthSlide;

      for (let slide of slides) {
        slide.style.transform = `translateX(${-shift}px)`;
      }

    };

    if (target == arrowLeft) {

      shift -= widthSlide;

      console.log(shift);

      for (let slide of slides) {
        slide.style.transform = `translateX(${-shift}px)`;
      }

    };

    let coordWrapperLeft = wrapper.getBoundingClientRect().left;
    let coordFirstSlide = firstSlide.getBoundingClientRect().left;
    let coordLastSlide = lastSlide.getBoundingClientRect().left;

    let shiftFirstSlide = coordWrapperLeft - coordFirstSlide;
    let shiftLastSlide = coordWrapperLeft - coordLastSlide;

    if (shiftLastSlide == 0) {
      arrowRight.style.display = 'none';
    } else {
      arrowRight.style.display = '';
    };

    if (shiftFirstSlide == 0) {
      arrowLeft.style.display = 'none';
    } else {
      arrowLeft.style.display = '';
    };

  });

};


