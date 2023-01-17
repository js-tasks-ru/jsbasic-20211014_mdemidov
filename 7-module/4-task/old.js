export default class StepSlider {
  constructor({ steps, value = 0 }) {

    this.steps = steps;
    this.value = value;
    this.render();
    this.sliderValue();
    document.addEventListener('pointerup', this.onClick);
    this.elem.addEventListener('click', this.onClick);

  }

  render() {
    this.elem = document.createElement('div');
    this.elem.classList.add('slider');

    this.elem.insertAdjacentHTML('afterbegin',
      `<div class="slider__thumb" style="left: 0%;">
        <span class="slider__value">0</span>
      </div>

      <div class="slider__progress" style="width: 0%;"></div>
    `);

    this.sliderSteps = document.createElement('div');
    this.sliderSteps.classList.add('slider__steps');
    this.elem.append(this.sliderSteps);

    for (let i = 0; i < this.steps; i++) {
      let interval = document.createElement('span');
      if (i == 0) {
        interval.classList.add('slider__step-active');
      }
      this.sliderSteps.append(interval);
    }

  }

  onClick = (event) => {

    if (event.target == this.elem.querySelector('.slider__thumb')) {

      return;
    }

    let selectValue = new CustomEvent('slider-change', {
      bubbles: true,
      detail: this.value
    });
    this.elem.dispatchEvent(selectValue);
  }

  // onMove = (event) => {

  //   if (event.target != this.elem.querySelector('.slider__thumb')) {
  //     return;
  //   }

  //   let selectValue = new CustomEvent('slider-change', {
  //     bubbles: true,
  //     detail: this.value
  //   });
  //   this.elem.dispatchEvent(selectValue);
  // }


  sliderValue() {
    let segment = (this.steps - 1);
    let valueSlaider = this.elem.querySelector('.slider__value');
    let sliderProgress = this.elem.querySelector('.slider__progress');
    let thumb = this.elem.querySelector('.slider__thumb');
    let intervals = this.sliderSteps.querySelectorAll('span');

    this.elem.onclick = (event) => {

      let left = event.clientX - this.elem.getBoundingClientRect().left;
      let persent = `${(left / this.elem.offsetWidth)}`;
      if (persent < 0) {
        persent = 0;
      }

      if (persent > 1) {
        persent = 1;
      }
      this.value = Math.round(persent * segment);
      for (let interval of intervals) {
        interval.classList.remove('slider__step-active');
      }
      intervals[this.value].classList.add('slider__step-active');
      valueSlaider.textContent = this.value;
      sliderProgress.style.cssText = `
        width: ${(this.value / segment) * 100}%;
      `;

      thumb.style.cssText = `
        left: ${(this.value / segment) * 100}%;
      `;
    };

    thumb.onpointerdown = (event) => {

      event.preventDefault();
      thumb.setPointerCapture(event.pointerId);


      let sliderMove = (event) => {

        event.preventDefault();
        let left = event.clientX - this.elem.getBoundingClientRect().left;

        this.elem.classList.add('slider_dragging');
        let persent = `${(left / this.elem.offsetWidth)}`;

        if (persent < 0) {
          persent = 0;
        }

        if (persent > 1) {
          persent = 1;
        }

        this.value = Math.round(persent * segment);
        for (let interval of intervals) {
          interval.classList.remove('slider__step-active');
        }
        intervals[this.value].classList.add('slider__step-active');
        valueSlaider.textContent = this.value;
        sliderProgress.style.cssText = `
            width: ${(this.value / segment) * 100}%;
          `;

        thumb.style.cssText = `
            left: ${(this.value / segment) * 100}%;
          `;
      };

      let sliderStop = () => {
        document.removeEventListener('pointermove', sliderMove);
        document.removeEventListener('pointerup', sliderStop);
        this.elem.classList.remove('slider_dragging');
      };

      document.addEventListener('pointermove', sliderMove);
      document.addEventListener('pointerup', sliderStop);

    };

    thumb.ondragstart = () => false;
    thumb.onselectstart = () => false;

  }



}
