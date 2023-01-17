export default class Cart {
  cartItems = []; // [product: {...}, count: N]

  constructor(cartIcon) {
    this.cartIcon = cartIcon;
  }

  addProduct(product) {
    // ваш код
    let cartItem = this.cartItems.find(item => item.product.id == product.id);

    if (!cartItem) {
      this.cartItems.push({
        product,
        count: 1
      });
    }
    else {
      cartItem.count++;
    }

  }

  updateProductCount(productId, amount) {
    // ваш код
    let cartItem = this.cartItems.find(item => item.product.id == productId);

    console.log(cartItem)

    cartItem.count += amount;

    if (cartItem.count == 0) {
      console.log(123)
      this.cartItems.splice(this.cartItems.indexOf(cartItem), 1);
    }
  }

  isEmpty() {
    // ваш код
    return this.cartItems.length === 0;
  }

  getTotalCount() {
    // ваш код
    let totalCount = 0;
    this.cartItems.forEach((item) => {
      totalCount += item.count;
    });

    return totalCount;
  }

  getTotalPrice() {
    // ваш код
    let totalPrice = 0;
    this.cartItems.forEach((item) => {
      let quantity = item.count;
      let price = item.product.price;
      let itemCost = quantity * price;
      totalPrice += itemCost;
    });

    return totalPrice;
  }

  onProductUpdate(cartItem) {
    // реализуем в следующей задаче

    this.cartIcon.update(this);
  }
}

