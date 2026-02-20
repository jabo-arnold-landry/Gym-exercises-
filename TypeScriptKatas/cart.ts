type CartsItem = Record<string, any>;

interface CartStructure {
  productName: string;
  productPrice: number;
  products: CartsItem[];
}

class Cart implements CartStructure {
  productName: string;
  productPrice: number;
  products: CartsItem[];
  constructor(productName: string, productPrice: number) {
    this.productName = productName;
    this.productPrice = productPrice;
    this.products = [];
  }

  //cart implementation
  addProduct() {
    let obj: CartsItem = {
      name: this.productName,
      price: this.productPrice,
      quantity: 1,
    };
    const foundProduct = this.products.find(
      (product) => product.name === obj.name,
    );

    if (foundProduct) {
      foundProduct.quantity++;
    } else {
      this.products.push(obj);
    }
  }

  removeProduct() {
    let productToRemove = this.products.findIndex(
      (product) => product.name === this.productName,
    );
    this.products.splice(productToRemove, 1);
  }

  getTotal(): number {
    let sum = this.products.reduce(
      (total, product) => (total += product.price),
      0,
    );
    return sum;
  }
}
