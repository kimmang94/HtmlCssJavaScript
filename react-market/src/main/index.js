import React from "react";
import "./index.css";
import axios from "axios";

function MainPage() {
  const [products, setProducts] = React.useState([]);
  React.useEffect(function () {
    axios
      .get(
        "https://10dbb377-5ad6-4b2b-98d2-c61953242ce0.mock.pstmn.io/products"
      )
      .then(function (result) {
        const products = result.data.products;
        setProducts(products);
      })
      .catch(function (error) {
        console.error("error : ", error);
      });
  }, []);
  return (
    <div>
      <div className="header">
        <div className="header__area">
          {<img src="images/icons/logo.png" />}
        </div>
      </div>
      <div className="body__contents">
        <div className="body__contents__banner">
          {<img src="images/banners/banner1.png" />}
        </div>
        <h1>판매되는 상품들</h1>
        <div className="products">
          {products.map(function (product, index) {
            return (
              <div className="products__card">
                <div className="products__card__content">
                  <img src={product.imageUrl} />
                  <span className="products__card__content__name">
                    {product.name}
                  </span>
                  <span className="products__card__content__price">
                    {product.price} 원
                  </span>
                  <div className="products__card__content__seller">
                    <img
                      className="products__card__content__sellerimg"
                      src="images/icons/avatar.png"
                    />
                    <span>{product.seller}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="footer"></div>
    </div>
  );
}

export default MainPage;
