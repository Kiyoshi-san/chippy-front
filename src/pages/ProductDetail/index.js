import React, { useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { detailProduct, listProductOffers } from "reduxDir/actions/product";
import { useDispatch, useSelector } from "react-redux";
import BannerPage from "components/Banner/BannerPage";
import ProductCarousel from "components/ProductCarousel";
import ProductDetailImage from "./ProductDetailImage";
import ProductDetailInfo from "./ProductDetailInfo";
import ProductInfo from "./ProductInfo";

export default function Banner(props) {
  const dispatch = useDispatch();

  const productOffers = useSelector((state) => state.productOffers);
  const { data } = productOffers;
  useEffect(() => {
    var dispatchHandler = () => {
      dispatch(listProductOffers());
    };
    dispatchHandler();
  });

  const productDetailList = useSelector((state) => state.productDetail);
  const { productDetail } = productDetailList;

  const {
    match: {
      params: { id },
    },
  } = props;
  useEffect(() => {
    var dispatchHandler = () => {
      dispatch(detailProduct(id));
    };
    dispatchHandler();
  }, [id, dispatch]);

  return (
    <div className="product-detail-page-container">
      <BannerPage title="shop" />
      <div className="body-row-container bg-gray">
        <div className="body-row">
          <div className="product-detail-info">
            <ProductDetailImage productDetail={productDetail} />
            <ProductDetailInfo productDetail={productDetail} />
          </div>

          <ProductInfo productDetail={productDetail} />

          <ProductCarousel products={data} title="Produtos Relacionados" />
        </div>
      </div>
    </div>
  );
}
