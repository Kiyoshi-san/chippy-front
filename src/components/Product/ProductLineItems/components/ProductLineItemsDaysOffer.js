import React, { lazy } from "react";
import { Link } from "react-router-dom";
import ProductTileDescription from "../../ProductTile/components/ProductTileDescription";

export default function ProductLineItemsDaysOffer(props) {
  const { productId, categoryName, name, image, newPrice, rating } = props;
  // const prodImg = require(image).default;
  // const prodImg = lazy(async () => await import(image));
  return (
    <div className="product-line-items-days-offer">
      <Link to={`/product/${categoryName}/${name}/${productId}`}>
        <div className="image-container">
          {/* <img src={require(`../../${image}`).default} alt={name} /> */}
          {/* <img
            src={
              require(
                `../../../assets/images/product/pote_de_racao_vermelho.png`,
              ).default
            }
            alt={name}
          /> */}
          <img
            src={import(`../../${image}`)
              .then((module) => module.default)
              .catch((err) => console.log(err))}
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
