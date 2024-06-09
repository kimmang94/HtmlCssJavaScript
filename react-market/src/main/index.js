import "./index.css";
function MainPage() {
  return (
    <div>
      <div class="header">
        <div class="header__area">{<img src="images/icons/logo.png" />}</div>
      </div>
      <div class="body__contents">
        <div class="body__contents__banner">
          {<img src="images/banners/banner1.png" />}
        </div>
        <h1>판매되는 상품들</h1>
        <div class="products">
          <div className="products__card">
            <div className="products__card__content">
              <img src="images/products/keyboard1.jpg" />
              <span className="products__card__content__name">키보드</span>
              <span className="products__card__content__price">50000 원</span>
              <div className="products__card__content__seller">
                <img
                  className="products__card__content__sellerimg"
                  src="images/icons/avatar.png"
                />
                <span>그랩</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer"></div>
    </div>
  );
}

export default MainPage;
