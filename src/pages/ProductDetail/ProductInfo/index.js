import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import RatingStars from "components/Product/ProductTile/components/RatingStars";
import ProductTile from "components/Product/ProductTile";
import { listProductOffers } from "reduxDir/actions/product";

export default function ProductInfo(props) {
  const { productDetail } = props;
  const [activeTab, setActiveTab] = useState(1);

  const productOffers = useSelector((state) => state.productOffers);
  const { data: productOffer } = productOffers;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listProductOffers());
  }, [dispatch]);

  const activeTabHandler = (tabIndex) => {
    activeTab !== tabIndex ? setActiveTab(tabIndex) : setActiveTab("");
  };

  return (
    <>
      <div className="product-info-container hide-for-small-only">
        <div className="product-info-tabs">
          <div
            className={`description-container ${
              activeTab == 1 ? "active" : ""
            }`}
            onClick={() => activeTabHandler(1)}
          >
            <h2>Descrição</h2>
          </div>
          <div
            className={`description-container ${
              activeTab == 2 ? "active" : ""
            }`}
            onClick={() => activeTabHandler(2)}
          >
            <h2>Tags</h2>
          </div>
          <div
            className={`description-container ${
              activeTab == 3 ? "active" : ""
            }`}
            onClick={() => activeTabHandler(3)}
          >
            <h2>Reviews</h2>
          </div>
          <div
            className={`description-container ${
              activeTab == 4 ? "active" : ""
            }`}
            onClick={() => activeTabHandler(4)}
          >
            <h2>Vendedor</h2>
          </div>
          <div
            className={`description-container ${
              activeTab == 5 ? "active" : ""
            }`}
            onClick={() => activeTabHandler(5)}
          >
            <h2>Mais produtos</h2>
          </div>
        </div>
        <div className="body-container">
          {activeTab == 1 ? (
            <div id="product-info" className="description-container">
              <span>{productDetail?.description}</span>
            </div>
          ) : activeTab == 2 ? (
            <div className="tag-category-container">
              <Link to={`/${productDetail?.categoryName}`}>
                <div className="tag">{productDetail?.categoryName}</div>
              </Link>
            </div>
          ) : activeTab == 3 ? (
            <div className="review-product-container">
              {productDetail?.review ? (
                productDetail.review.map((reviews, id) => (
                  <div key={id} className="product-review-container">
                    <div className="review-user-name">
                      <span>{reviews?.user}</span>
                    </div>
                    <div className="review-message-name">
                      <span>{reviews?.message}</span>
                    </div>
                    <RatingStars
                      rating={reviews?.rating}
                      numReviews={reviews?.numReviews}
                    />
                  </div>
                ))
              ) : (
                <div>
                  <h2>Ainda não há avaliações para este produto</h2>
                </div>
              )}
            </div>
          ) : activeTab == 4 && productDetail?.seller?.seller ? (
            <div className="seller-container">
              <h2>{productDetail?.seller?.seller?.name}</h2>
              <RatingStars
                rating={productDetail?.seller?.seller?.rating}
                numReviews={productDetail?.seller?.seller?.numReviews}
              />
            </div>
          ) : activeTab == 5 ? (
            <div className="more-products-container">
              {productOffer?.map((prodOffer, id) => (
                <div key={id} className="more-product-box">
                  <ProductTile product={prodOffer} />
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </div>
      <div className="product-info-container show-for-small-only">
        <div
          className={`description-container`}
          onClick={() => activeTabHandler(1)}
        >
          <div className={`label-tab ${activeTab == 1 ? "active" : ""}`}>
            <h2>Descrição</h2>
          </div>
          <div className="body-container">{productDetail?.description}</div>
        </div>
        <div
          className={`description-container`}
          onClick={() => activeTabHandler(2)}
        >
          <div className={`label-tab ${activeTab == 2 ? "active" : ""}`}>
            <h2>Tags</h2>
          </div>
          <div className="body-container">
            <div className="tag-category-container">
              <Link to={`/${productDetail?.categoryName}`}>
                <div className="tag">{productDetail?.categoryName}</div>
              </Link>
            </div>
          </div>
        </div>
        <div
          className={`description-container`}
          onClick={() => activeTabHandler(3)}
        >
          <div className={`label-tab ${activeTab == 3 ? "active" : ""}`}>
            <h2>Reviews</h2>
          </div>
          <div className="body-container">
            <div className="review-product-container">
              {productDetail?.review ? (
                productDetail.review.map((reviews, id) => (
                  <div key={id} className="product-review-container">
                    <div className="review-user-name">
                      <span>{reviews?.user}</span>
                    </div>
                    <div className="review-message-name">
                      <span>{reviews?.message}</span>
                    </div>
                    <RatingStars
                      rating={reviews?.rating}
                      numReviews={reviews?.numReviews}
                    />
                  </div>
                ))
              ) : (
                <div>
                  <h2>Ainda não há avaliações para este produto</h2>
                </div>
              )}
            </div>
          </div>
        </div>
        <div
          className={`description-container`}
          onClick={() => activeTabHandler(4)}
        >
          <div
            className={`label-tab ${activeTab == 4 && productDetail?.seller?.seller ? "active" : ""}`}
          >
            <h2>Vendedor</h2>
          </div>
          <div className="body-container">
            <div className="seller-container">
              <h2>{productDetail?.seller?.seller?.name}</h2>
              <RatingStars
                rating={productDetail?.seller?.seller?.rating}
                numReviews={productDetail?.seller?.seller?.numReviews}
              />
            </div>
          </div>
        </div>
        <div
          className={`description-container`}
          onClick={() => activeTabHandler(5)}
        >
          <div className={`label-tab ${activeTab == 5 ? "active" : ""}`}>
            <h2>Mais produtos</h2>
          </div>
          <div className="body-container">
            <div className="more-products-container">
              {productOffer?.map((prodOffer, id) => (
                <div key={id} className="more-product-box">
                  <ProductTile product={prodOffer} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
