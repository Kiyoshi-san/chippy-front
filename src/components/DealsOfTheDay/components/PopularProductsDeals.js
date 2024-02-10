import React from "react";
import ProductLineItemsDaysOffer from "components/ProductLineItems/components/ProductLineItemsDaysOffer";

export default function PopularProductsDeals(props) {
  const { daysOffer } = props;

  return (
    <div className="popular-products-deals">
      <div className="title">
        <h1>
          <strong>Produtos</strong> <span>populares</span>
        </h1>
      </div>
      <div className="productlist">
        {daysOffer?.length &&
          daysOffer.map((dO) => (
            <div key={dO.name}>
              <ProductLineItemsDaysOffer
                productId={dO._id}
                image={dO.image[0]}
                name={dO.name}
                categoryName={dO.categoryName}
                newPrice={dO.newPrice}
                rating={dO.rating}
              />
            </div>
          ))}
      </div>
    </div>
  );
}
