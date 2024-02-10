import React from "react";
import banner from "images/banner/banner_product_detail_page.jpg";

export default function BannerPage(props) {
  const { title } = props;
  return (
    <div className="banner-page-container">
      {!!title && (
        <div className="banner-page-title">
          <h3>{title}</h3>
        </div>
      )}
      <div className="banner-page-img">
        <img src={banner} alt="" />
      </div>
    </div>
  );
}
