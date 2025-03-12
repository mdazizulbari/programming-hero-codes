class Product {
  constructor(name, price, brand, malik) {
    this.name = name;
    this.price = price;
    this.brandName = brand;
    this.malik = malik;
  }
  details() {
    console.log(`i am ${this.name} product details`);
  }
}
const iphone = new Product("iphone", "1234", "apple", "jobs");
const samsung = new Product("samsung", "800", "samsung electronics", "idk");
iphone.details();
samsung.details();
