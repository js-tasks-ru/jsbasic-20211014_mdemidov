function initCarousel() {
  // ваш код...
  let carousel = document.querySelector('.carousel');
  let wrapper = document.querySelector('.carousel__inner');
  let slides = wrapper.querySelectorAll('.carousel__slide');
  let slidesLength = slides.length;
  let widthSlide = wrapper.offsetWidth;
  let slidesShift = widthSlide * (slidesLength - 1);


  // let firstSlide = slides[0];
  // let lastSlide = slides[slidesLength - 1];
  // console.log(carousel.scrollWidth, carousel.offsetWidth, carousel.clientWidth);
  // console.log(window.pageYOffset);




  let arrowRight = document.querySelector('.carousel__arrow_right');
  let arrowLeft = document.querySelector('.carousel__arrow_left');

  let shift = 0;

  arrowLeft.style.display = 'none';

  carousel.addEventListener('click', function (event) {
    let target = event.target.closest('div');

    if (target == arrowRight) {

      shift += widthSlide;

      slides.forEach(() => wrapper.style.transform = `translateX(${-shift}px)`);
      // for (let slide of slides) {
      //   //slide.style.transform = `translateX(${- shift}px)`;
      //   wrapper.style.transform = `translateX(${- shift}px)`;
      // }
    };



    if (target == arrowLeft) {

      shift -= widthSlide;

      slides.forEach(() => wrapper.style.transform = `translateX(${- shift}px)`);
      // for (let slide of slides) {
      //   // slide.style.transform = `translateX(${- shift}px)`;
      //   wrapper.style.transform = `translateX(${- shift}px)`;
      // }
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

<<<<<<< HEAD
    // let coordWrapperLeft = wrapper.getBoundingClientRect().left;
    // let coordFirstSlide = firstSlide.getBoundingClientRect().left;
    // let coordLastSlide = lastSlide.getBoundingClientRect().left;

    // let shiftFirstSlide = coordWrapperLeft - coordFirstSlide;
    // let shiftLastSlide = coordWrapperLeft - coordLastSlide;

    // if (shiftLastSlide == 0) {
    //   arrowRight.style.display = 'none';
    // } else {
    //   arrowRight.style.display = '';
    // };

    // if (shiftFirstSlide == 0) {
    //   arrowLeft.style.display = 'none';
    // } else {
    //   arrowLeft.style.display = '';
    // };

  });

=======
>>>>>>> 7690912aed866ccb6d6562c2fbef9a374d48c382
};
