import React, { useEffect } from "react";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { detailProduct, listProductOffers } from "reduxDir/actions/product";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import BannerPage from "components/Banner/BannerPage";
import ProductCarousel from "components/Product/ProductCarousel";
import ProductDetailImage from "./ProductDetailImage";
import ProductDetailInfo from "./ProductDetailInfo";
import ProductInfo from "./ProductInfo";

export default function Banner() {
  const dispatch = useDispatch();
  const { id } = useParams();

  const productOffers = useSelector((state) => state.productOffers);
  const { data } = productOffers;
  useEffect(() => {
    var dispatchHandler = () => {
      dispatch(listProductOffers());
    };
    dispatchHandler();
  }, []);

  const { loading, productDetail } = useSelector((state) => state);
  const { productDetail: productDet } = productDetail;

  useEffect(() => {
    var dispatchHandler = () => {
      dispatch(detailProduct(id));
    };
    dispatchHandler();
  }, [id, dispatch, loading]);

  return (
    <div className="product-detail-page-container">
      <BannerPage title="shop" />
      <div className="body-row-container bg-gray">
        <div className="body-row">
          <div className="product-detail-info">
            <ProductDetailImage productDetail={productDet} />
            <ProductDetailInfo productDetail={productDet} />
          </div>

          <ProductInfo productDetail={productDet} />

          <ProductCarousel products={data} title="Produtos Relacionados" />
        </div>
      </div>
    </div>
  );
}
