import React from "react";
import { Link } from "react-router-dom";
import RatingStars from "./RatingStars";

export default function ProductTileDescription(props) {
  const { productId, name, categoryName, oldPrice, newPrice, rating } = props;
  return (
    <div className="product-tile-description">
      <Link to={`/product/${categoryName}/${name}/${productId}`}>
        <h3 className="title">{name}</h3>
      </Link>
      <div className="price">
        {oldPrice && (
          <span className="old-price">R$ {oldPrice.toFixed(2)}</span>
        )}
        {newPrice && (
          <span className="new-price">R$ {newPrice.toFixed(2)}</span>
        )}
      </div>
      <RatingStars rating={rating}></RatingStars>
    </div>
  );
}
