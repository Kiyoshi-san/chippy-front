import React from "react";
import { Link } from "react-router-dom";
import ProductTileDescription from "../../ProductTile/components/ProductTileDescription";

export default function ProductLineItemsDaysOffer(props) {
  const { productId, categoryName, name /* , image */, newPrice, rating } =
    props;
  return (
    <div className="product-line-items-days-offer">
      <Link to={`/product/${categoryName}/${name}/${productId}`}>
        <div className="image-container">
          <img
            src={require("images/product/pote_de_racao_vermelho.png")}
            alt={name}
          />
        </div>
      </Link>
      <div className="product-line-description">
        <ProductTileDescription
          productId={productId}
          name={name}
          categoryName={categoryName}
          newPrice={newPrice}
          rating={rating}
        ></ProductTileDescription>
      </div>
    </div>
  );
}
