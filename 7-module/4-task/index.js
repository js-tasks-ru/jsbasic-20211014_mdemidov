export default class StepSlider {
  constructor({ steps, value = 0 }) {

    this.steps = steps;
    this.segment = this.steps - 1;
    this.render();
    this.sliderValue();
    this.eventListener();

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

  sliderValue(value = 0) {
    this.value = value;

    let valueSlaider = this.elem.querySelector('.slider__value');
    let sliderProgress = this.elem.querySelector('.slider__progress');
    let thumb = this.elem.querySelector('.slider__thumb');
    let intervals = this.sliderSteps.querySelectorAll('span');

    let persent = (value / this.segment) * 100;

    sliderProgress.style.width = `${persent}%`;
    thumb.style.left = `${persent}%`;

    for (let interval of intervals) {
      interval.classList.remove('slider__step-active');
    }

    valueSlaider.textContent = this.value;
    intervals[this.value].classList.add('slider__step-active');

  }

  onClick = (event) => {

    let newPersent = (event.clientX - this.elem.getBoundingClientRect().left) / this.elem.offsetWidth;

    this.sliderValue(Math.round(newPersent * this.segment));

    this.elem.dispatchEvent(new CustomEvent('slider-change', {
      bubbles: true,
      detail: this.value
    }));
  }


  eventListener() {
    let thumb = this.elem.querySelector('.slider__thumb');

    thumb.ondragstart = () => false;
    thumb.onselectstart = () => false;

    thumb.onpointerdown = this.onPointerdown;
    this.elem.onclick = this.onClick;
  }

  onPointerdown = (event) => {

    event.preventDefault();
    //thumb.setPointerCapture(event.pointerId);
    document.addEventListener('pointermove', this.sliderMove);
    document.addEventListener('pointerup', this.sliderStop);

  }

  sliderMove = (event) => {

    event.preventDefault();

    let sliderProgress = this.elem.querySelector('.slider__progress');
    let thumb = this.elem.querySelector('.slider__thumb');
    let valueSlaider = this.elem.querySelector('.slider__value');

    let newPersent = (event.clientX - this.elem.getBoundingClientRect().left) / this.elem.offsetWidth;

    if (newPersent < 0) {
      newPersent = 0;
    }

    if (newPersent > 1) {
      newPersent = 1;
    }

    let persent = (newPersent) * 100;

    this.value = Math.round(newPersent * this.segment);

    valueSlaider.textContent = this.value;
    sliderProgress.style.width = `${persent}%`;
    thumb.style.left = `${persent}%`;

    this.elem.classList.add('slider_dragging');
  };

  sliderStop = () => {
    document.removeEventListener('pointermove', this.sliderMove);
    document.removeEventListener('pointerup', this.sliderStop);
    this.elem.classList.remove('slider_dragging');

    let sliderProgress = this.elem.querySelector('.slider__progress');
    let thumb = this.elem.querySelector('.slider__thumb');

    let persent = (this.value / this.segment) * 100;

    sliderProgress.style.width = `${persent}%`;
    thumb.style.left = `${persent}%`;

    console.log(persent)

    this.elem.dispatchEvent(new CustomEvent('slider-change', {
      bubbles: true,
      detail: this.value
    }));
  };

}
