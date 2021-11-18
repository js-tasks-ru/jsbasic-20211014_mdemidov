import createElement from '../../assets/lib/create-element.js';

export default class RibbonMenu {
  constructor(categories) {
    this.categories = categories;
    this.elem = document.createElement('div');
    this.render();
    this.scrollMenu();
    this.elem.addEventListener('click', this.onClick);
  }

  render() {

    this.elem.classList.add('ribbon');
    let arrowLeft = createElement(`
      <button class="ribbon__arrow ribbon__arrow_left">
        <img src="/assets/images/icons/angle-icon.svg" alt="icon">
      </button>
    `);

    let arrowRight = createElement(`
      <button class="ribbon__arrow ribbon__arrow_right">
        <img src="/assets/images/icons/angle-icon.svg" alt="icon">
      </button>
    `);

    this.elem.append(arrowLeft);

    let ribbon = document.createElement('nav');
    ribbon.classList.add('ribbon__inner');
    this.elem.append(ribbon);

    for (let i = 0; i < this.categories.length; i++) {
      let link = document.createElement('a');
      link.setAttribute('href', '#');
      link.classList.add('ribbon__item');
      link.setAttribute('data-id', `${this.categories[i].id}`);
      link.textContent = this.categories[i].name;
      ribbon.append(link);
      if (i == 0) link.classList.add('ribbon__item_active');
    }

    this.elem.append(arrowRight);

    return {
      arrowLeft,
      arrowRight,
    };
  }

  onClick = (event) => {

    let target = event.target.closest('a');
    if (!target) return;

    this.id = target.dataset.id;
    console.log(this.id);

    let select = new CustomEvent('ribbon-select', {
      bubbles: true,
      detail: this.id
    });
    this.elem.dispatchEvent(select);

    return this.id;
  }

  scrollMenu() {
    let ribbon = this.elem.querySelector('.ribbon__inner');
    let navigationByMenu = this.render();
    let arrowLeft = navigationByMenu.arrowLeft.closest('button');
    let arrowRight = navigationByMenu.arrowRight.closest('button');
    arrowRight.classList.add('ribbon__arrow_visible');


    arrowRight.onclick = function () {
      ribbon.scrollBy(350, 0);
      console.log(ribbon.scrollLeft);

      ribbon.onscroll = function () {

        if (ribbon.scrollLeft != 0) {
          arrowLeft.classList.add('ribbon__arrow_visible');
        }

        let scrollRight = ribbon.scrollWidth - ribbon.scrollLeft - ribbon.clientWidth;

        if (scrollRight == 0) {
          arrowRight.classList.remove('ribbon__arrow_visible');
          arrowLeft.classList.add('ribbon__arrow_visible');
        }
      };

    };

    arrowLeft.onclick = function () {
      ribbon.scrollBy(-350, 0);

      if (ribbon.scrollLeft != 0) {
        arrowRight.classList.add('ribbon__arrow_visible');
      }

      ribbon.onscroll = function () {
        if (ribbon.scrollLeft == 0) {
          arrowLeft.classList.remove('ribbon__arrow_visible');
          arrowRight.classList.add('ribbon__arrow_visible');
        }

      };

    };

  }

}




