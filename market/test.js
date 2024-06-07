var products = [
  {
    name: "농구공",
    price: 10000,
    seller: "조던",
    imageUrl: "images/products/basketball1.jpeg"
  },
  {
    name: "축구공",
    price: 60000,
    seller: "메시",
    imageUrl: "images/products/soccerball1.jpg"
  },
  {
    name: "키보드",
    price: 10000,
    seller: "해킹천재",
    imageUrl: "images/products/keyboard1.jpg"
  }
];

let productsHtml = "";
for (var i = 0; i < products.length; i++) {
  let product = products[i];
  productsHtml +=
    '<div class="products__card">' +
    "<div>" +
    '<img class="products__card__01" src="' +
    product.imageUrl +
    '"/>' +
    "</div>" +
    '<div class="products__card__content">' +
    '<span class="products__card__content__name">' +
    product.name +
    "</span>" +
    '<span class="products__card__content__price">' +
    product.price +
    "원" +
    " </span>" +
    '<div class="products__card__content__seller">' +
    "<span>" +
    '<img class="products__card__content__sellerimg" src="images/icons/avatar.png"/>' +
    "</span>" +
    "<span>" +
    product.seller +
    "</span>" +
    " </div>" +
    "</div>" +
    "</div>";
}

document.querySelector(".products").innerHTML = productsHtml;
