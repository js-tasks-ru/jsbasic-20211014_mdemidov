import createElement from '../../assets/lib/create-element.js';

export default class CartIcon {
  constructor() {
    this.render();

    this.addEventListeners();
  }

  render() {
    this.elem = createElement('<div class="cart-icon"></div>');
  }

  update(cart) {
    if (!cart.isEmpty()) {
      this.elem.classList.add('cart-icon_visible');

      this.elem.innerHTML = `
        <div class="cart-icon__inner">
          <span class="cart-icon__count">${cart.getTotalCount()}</span>
          <span class="cart-icon__price">€${cart.getTotalPrice().toFixed(2)}</span>
        </div>`;

      this.updatePosition();

      this.elem.classList.add('shake');
      this.elem.addEventListener('transitionend', () => {
        this.elem.classList.remove('shake');
      }, { once: true });

    } else {
      this.elem.classList.remove('cart-icon_visible');
    }
  }

  addEventListeners() {
    document.addEventListener('scroll', () => this.updatePosition());
    window.addEventListener('resize', () => this.updatePosition());
  }

  updatePosition() {
    // ваш код ...
    let container = document.querySelector('.container');
    let padding = getComputedStyle(container);
    let paddingTop = Number(padding.paddingTop.substr(0, 2));
    let marginRight = Math.min(container.getBoundingClientRect().right + 20, document.documentElement.clientWidth - this.elem.offsetWidth - 10) + 'px';

    console.log(marginRight);

    if (window.pageYOffset > this.elem.clientHeight + paddingTop) {

      this.elem.style.cssText = `left: ${marginRight};
      position: fixed;
      top: ${paddingTop}px;
      z-index: 1000;
      `;
    } else { this.elem.style = ''; }

  }
}
