import React from "react";
import { Link } from "react-router-dom";
import ProductTileDescription from "./components/ProductTileDescription";
import BottomButtons from "./components/BottomButtons";

export default function ProductTile(props) {
  const { product } = props;

  return (
    <div className="product-tile">
      <Link
        to={`/product/${product.categoryName}/${product.name}/${product._id}`}
      >
        <div className="image-product-container">
          <img src={`/${product.image[0]}`} alt={product.name} />
        </div>
      </Link>
      <div className="description">
        <ProductTileDescription
          productId={product._id}
          name={product.name}
          category={product.category}
          oldPrice={product.oldPrice}
          newPrice={product.newPrice}
          rating={product.rating}
        ></ProductTileDescription>
      </div>
      <div className="product-tile-bottom-buttons">
        <BottomButtons productId={product._id}></BottomButtons>
      </div>
    </div>
  );
}
