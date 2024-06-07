axios
  .get("https://10dbb377-5ad6-4b2b-98d2-c61953242ce0.mock.pstmn.io/products")
  .then(function (result) {
    console.log("통신 결과 : ", result);
    const products = result.data.products;

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
  })
  .catch(function (error) {
    console.error("error 발생 : ", error);
  });
