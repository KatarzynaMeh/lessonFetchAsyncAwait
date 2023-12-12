const addButton = document.querySelector("button");
const addForm = document.querySelector("form");
const addTitle = document.querySelector("#title");
const addPrice = document.querySelector("#price");

const showProduct = (product) => {
  const { id, title, price } = product;
  console.log(id, title, price);

  const productContainer = document.createElement("div");
  const titleContainer = document.createElement("h1");
  titleContainer.innerText = title;
  const priceContainer = document.createElement("p");
  priceContainer.innerText = price;
  productContainer.append(titleContainer, priceContainer);
  document.body.append(productContainer);
};

const addNewProduct = (product, callback) => {
  fetch("https://dummyjson.com/products/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(product),
  })
    .then((response) => response.json())
    .then((data) => callback(data));
};

addForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const product = {
    title: addTitle.value,
    price: addPrice.value,
  };
  addNewProduct(product, (data) => showProduct(data));
  addTitle.value = "";
  addPrice.value = "";
});

const objectUser = { firstName: "Ivan", age: 29 };
const { age } = objectUser; // деструктурирует объект
console.log(age);
