const fetchProduct = (id, callback) =>
  fetch(`https://dummyjson.com/products/${id}`)
    .then((responce) => responce.json())
    .then((data) => callback(data));

const showProduct = (productData) => {
  const productContainer = document.createElement("div");
  document.body.append(productContainer);

  const productTitle = document.createElement("h1");
  productTitle.innerText = productData.title;

  const description = document.createElement("p");
  description.innerText = productData.description;

  const price = document.createElement("p");
  price.innerText = `Price: ${productData.price}$`;

  const image = document.createElement("img");
  image.src = productData.images[0];

  productContainer.append(productTitle, description, price, image);
};

fetchProduct(1, (product) => showProduct(product));


const fetchAnotherProduct = (id) =>
  fetch(`https://dummyjson.com/products/${id}`)
    .then((response) => response.json());


Promise.all([fetchAnotherProduct(3), fetchAnotherProduct(5)])
  .then((result) => {
    showProduct(result[0])
    showProduct(result[1])
  });