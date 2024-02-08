import React from "react";
import RatingStars from "../components/ProductTile/components/RatingStars";
import AddToCartPdpForm from "../AddToCartPdpForm";

export default function ProductDetailInfo(props) {
  const { productDetail } = props;

  const inStock = !!productDetail?.countInStock;

  return (
    <div className="product-detail-info-container">
      <div className="title-container">
        <h3>{productDetail?.name}</h3>
      </div>
      <RatingStars rating={productDetail?.rating}></RatingStars>
      <div className="in-stock">
        {inStock ? (
          <>
            <i className="icon icon-ok"></i>
            <span>Em estoque</span>
          </>
        ) : (
          <span>Fora de estoque</span>
        )}
      </div>
      <div className="sku">
        <span>SKU: {productDetail?._id}</span>
      </div>
      <div className="price">
        {productDetail?.oldPrice && (
          <span className="old-price">
            R$ {productDetail?.oldPrice.toFixed(2)}
          </span>
        )}
        {productDetail?.newPrice && (
          <span className="new-price">
            R$ {productDetail?.newPrice.toFixed(2)}
          </span>
        )}
      </div>
      <div className="description-container">
        <div className="description-box">
          <div className="title">
            <h2>Descrição</h2>
          </div>
          <div className="description">
            <span>{productDetail?.description}</span>
          </div>
        </div>
        <div className="see-more">
          <a href="#product-info">Ver mais</a>
        </div>
      </div>
      <div className="add-to-cart-form">
        <AddToCartPdpForm productDetail={productDetail} />
      </div>
    </div>
  );
}
