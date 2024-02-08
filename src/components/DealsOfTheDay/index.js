import React, { useEffect } from "react";
import ProductTileHome from "../ProductTileHome";
import MultCategories from "./MultCategories";
import PopularProductsDeals from "./components/PopularProductsDeals";

export default function DealsOfTheDay(props) {
  const { days, hours, mins, secs } = props;
  const { products } = props;

  useEffect(() => {
    //   TODO BRING EXPIRATION TIME
  });

  return (
    <div className="deals-of-the-day-container">
      <div className="left-panel">
        <div className="title">
          <h1>
            <strong>Ofertas</strong> <span>do dia</span>
          </h1>
        </div>
        <div className="body">
          <div>
            <span>
              Mauris ut tincidunt nisi, id auctor libero. Etiam aliquet felis et
              consectetur faucibus. Praesent aliquam, lec tempus consequat,
              felis quam venenatis ligula
            </span>
          </div>
          <MultCategories></MultCategories>
        </div>
      </div>
      <div className="middle-panel">
        <ProductTileHome
          days={days}
          hours={hours}
          mins={mins}
          secs={secs}
          products={products}
        ></ProductTileHome>
      </div>
      <div className="right-panel">
        <PopularProductsDeals daysOffer={products}></PopularProductsDeals>
      </div>
    </div>
  );
}
