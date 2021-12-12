import createElement from '../../assets/lib/create-element.js';
import ProductCard from '../../6-module/2-task/index.js';

export default class ProductGrid {
  constructor(products) {
    this.products = products;
    this.filters = {};
    this.eventListener();
    this.render();
  }

  render() {

    this.elem = document.createElement('div');
    this.elem.classList.add('products-grid');
    this.cardInner = document.createElement('div');
    this.cardInner.classList.add('products-grid__inner');
    this.elem.append(this.cardInner);

    this.products.forEach((item) => {
      this.card = new ProductCard(item);
      this.cardInner.append(this.card.elem);
    });

  }

  updateFilter = (filters) => {

    let filterList = this.products;
    filters = this.tuneFilters();

    if (filters.noNuts == true) {
      filterList = filterList.filter(item => !item.nuts == true);
      this.cardInner.remove();
    } else {
      filterList = this.products;
      this.cardInner.remove();
    }

    if (filters.vegeterianOnly == true) {
      filterList = filterList.filter(item => item.vegeterian == true);
      this.cardInner.remove();
    } else {
      filterList = filterList;
      this.cardInner.remove();
    }

    if (filters.maxSpiciness == 2) {
      filterList = filterList.filter(item => item.spiciness <= 2);
      this.cardInner.remove();
    } else {
      filterList = filterList;
      this.cardInner.remove();
    }

    if (filters.category == 'soups') {
      filterList = filterList.filter(item => item.category == 'soups');
      this.cardInner.remove();
    } else {
      filterList = filterList;
      this.cardInner.remove();
    }

    console.log(filterList)

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

  tuneFilters() {

    let noNutsControl = document.querySelector('[data-no-nuts]');

    if (noNutsControl.checked == true) {
      this.filters.noNuts = true;
    } else {
      this.filters.noNuts = false;
    }

    let vegetarianOnlyControl = document.querySelector('[data-vegetarian-only]');

    if (vegetarianOnlyControl.checked == true) {
      this.filters.vegeterianOnly = true;
    } else {
      this.filters.vegeterianOnly = false;
    }

    let maxSpicinessControl = document.querySelector('[data-max-spiciness]');
    if (maxSpicinessControl.checked == true) {
      this.filters.maxSpiciness = 2;
    } else {
      this.filters.maxSpiciness = 4;
    }

    let categoryControl = document.querySelector('[data-category]');

    if (categoryControl.checked == true) {
      this.filters.category = 'soups';
    } else {
      this.filters.category = '';
    }

    return this.filters;
  }
}




