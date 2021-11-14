import createElement from "../../assets/lib/create-element.js";

export default class ProductCard {
  constructor(product) {
    this.product = product;
    this.elem = document.createElement('div');
    this.render();
    this.button = this.elem.querySelector('.card__button');
    this.button.addEventListener('click', this.onClick);
    this.id = product.id;
  }

  render() {
    this.elem.classList.add('card');
    this.cardTop = createElement(`
      <div class="card__top">
        <img src="../../assets/images/products/laab_kai_chicken_salad.png" class="card__image" alt="product">
        <span class="card__price">€${this.product.price.toFixed(2)}</span>
      </div>
    `);

    this.cardBody = createElement(`
      <div class="card__body">
        <div class="card__title">${this.product.name}</div>
        <button type="button" class="card__button">
          <img src="../../assets/images/icons/plus-icon.svg" alt="icon">
        </button>
      </div>
    `);

    this.elem.append(this.cardTop);
    this.elem.append(this.cardBody);

  }

  onClick = (event) => {

    let addToCart = new CustomEvent('product-add', {
      bubbles: true,
      detail: this.id
    });

    this.elem.dispatchEvent(addToCart);
  }

};
