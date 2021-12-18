import createElement from '../../assets/lib/create-element.js';
import ProductCard from '../../6-module/2-task/index.js';

export default class ProductGrid {
  constructor(products) {
    this.products = products;
    this.filters = {};
    this.eventListener();
    this.render(products);

  }

  render(products) {

    this.elem = createElement(`
        <div class="products-grid">
          <div class="products-grid__inner">


          </div>
        </div>
      `
    );

    this.cardInner = this.elem.querySelector('.products-grid__inner');

    products.forEach((item) => {
      this.card = new ProductCard(item);
      this.cardInner.append(this.card.elem);
    });

  }

  updateFilter(filters) {

    Object.assign(this.filters, filters);

    let filterList = this.products;

    if (this.filters.noNuts == true) {
      filterList = filterList.filter(item => !item.nuts == true);
    }

    if (this.filters.vegeterianOnly == true) {
      filterList = filterList.filter(item => item.vegeterian == true);
    }

    if (this.filters.maxSpiciness == 2) {
      filterList = filterList.filter(item => item.spiciness <= 2);
    }

    if (this.filters.category == 'soups') {
      filterList = filterList.filter(item => item.category == 'soups');
    }

    this.changeList(filterList);

  }


  changeList(filterList) {
    this.cardInner.remove();
    this.cardInner = document.createElement('div');
    this.cardInner.classList.add('products-grid__inner');
    this.elem.append(this.cardInner);

    filterList.forEach((item) => {
      this.card = new ProductCard(item);
      this.cardInner.append(this.card.elem);
    });
  }

  eventListener() {
    document.body.addEventListener('product-add', (event) =>
      console.log(`Я ${event.detail} и меня добавили в корзину.`)
    );
  }

}




