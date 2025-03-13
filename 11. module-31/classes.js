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

class Vehical {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  move() {
    console.log("I can go far");
  }
}

class Bus extends Vehical {
  constructor(name, price, seat) {
    super(name, price);
    this.seat = seat;
  }
  route() {
    console.log("Dhaka to CoxBazar");
  }
}

class Truck extends Vehical {
  constructor(name, price, load) {
    super(name, price);
    this.load = load;
  }
}

const greenLine = new Bus("greenLine", "12", 50)
console.log(greenLine)