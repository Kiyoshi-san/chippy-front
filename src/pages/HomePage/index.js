import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Banner from "components/Banner/BannerPage";
import DealsOfTheDay from "components/DealsOfTheDay";
import ProductCarousel from "components/Product/ProductCarousel";
import CategoryBanners from "components/CategoryBanners";
import ServiceBanner from "components/ServiceBanner";
import { listProductOffers } from "reduxDir/actions/product";

export default function HomePage() {
  const [days] = useState(780);
  const [hours] = useState(4);
  const [mins] = useState(26);
  const [secs] = useState(42);

  const productOffers = useSelector((state) => state.productOffers);
  const { data } = productOffers;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listProductOffers());
  }, [dispatch]);

  return (
    <div className="pt_homepage">
      <Banner />
      <div className="body-row-container bg-gray">
        <div className="body-row">
          <DealsOfTheDay
            products={data}
            days={days}
            hours={hours}
            mins={mins}
            secs={secs}
          />
        </div>
      </div>
      <div className="body-row-container bg-white">
        <div className="body-row">
          <CategoryBanners />
        </div>
      </div>
      <div className="body-row-container bg-white">
        <div className="body-row">
          <ProductCarousel products={data} title="Produtos Relacionados" />
        </div>
      </div>
      <div className="body-row-container bg-white">
        <div className="body-row">
          <ServiceBanner />
        </div>
      </div>
      <div className="body-row-container bg-white">
        <div className="body-row">
          <ProductCarousel products={data} title="Mais Vendidos" />
        </div>
      </div>
    </div>
  );
}
