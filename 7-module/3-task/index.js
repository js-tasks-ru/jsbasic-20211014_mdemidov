export default class StepSlider {
  constructor({ steps, value = 0 }) {

    this.steps = steps;
    this.value = value;
    this.elem = document.createElement('div');
    this.render();
    this.sliderValue();
    this.elem.addEventListener('click', this.onClick);
  }

  render() {

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

  onClick = () => {
    let selectValue = new CustomEvent('slider-change', {
      bubbles: true,
      detail: this.value
    });
    this.elem.dispatchEvent(selectValue);
  }

  sliderValue() {
    let segment = (this.steps - 1);
    let valueSlaider = this.elem.querySelector('.slider__value');
    let sliderProgress = this.elem.querySelector('.slider__progress');
    let thumb = this.elem.querySelector('.slider__thumb');
    let intervals = this.sliderSteps.querySelectorAll('span');

    this.elem.onclick = (event) => {

      let left = event.clientX - this.elem.getBoundingClientRect().left;
      let persent = `${(left / this.elem.offsetWidth)}`;
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
  }

}
