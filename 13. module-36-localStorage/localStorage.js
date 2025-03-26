const handleAddtoCart = () => {
  const productName = document.getElementById("productName");
  const productQuantity = document.getElementById("productQuantity");
  const name = productName.value;
  const quantity = productQuantity.value;

  saveProductToLocalStorage(name, quantity);
  displayProduct(name, quantity);

  productName.value = "";
  productQuantity.value = "";
};

const displayProduct = (productName, productQuantity) => {
  const productContainer = document.getElementById("product-container");
  const li = document.createElement("li");
  li.innerText = `${productName} : ${productQuantity}`;
  productContainer.appendChild(li);
};

const getProductFromLocalStorage = () => {
  let cart = {};
  const getProduct = localStorage.getItem("cart");
  if (getProduct) {
    cart = JSON.parse(getProduct);
  }
  return cart;
};

const saveProductToLocalStorage = (productName, productQuantity) => {
  const cart = getProductFromLocalStorage();
  cart[productName] = productQuantity;
  const cartString = JSON.stringify(cart);
  localStorage.setItem("cart", cartString);
};

const displayProductFromLocalStorage = () => {
  const products = getProductFromLocalStorage();
  for (const product in products) {
    console.log(product);
    console.log(products[product]);
    displayProduct(product, products[product]);
  }
};
displayProductFromLocalStorage();
