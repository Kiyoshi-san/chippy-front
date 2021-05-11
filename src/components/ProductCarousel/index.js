import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import ButtonHoverEffect from "../Button/ButtonHoverEffect";
import ProductTile from "../ProductTile";
import TitleColor from "../TitleColor";

export default function ProductCarousel() {
  const [products, setProducts] = useState([
    {
      image: "/product_images/brinquedo-osso-cachorro2.png",
      productName: "slami in ball tip pig eiusmod",
      oldPrice: "140,00",
      newPrice: "170,00",
      ratings: "4",
    },
    {
      image: "/product_images/brinquedo-roda-cachorro.png",
      productName: "magna sint sirlon",
      oldPrice: "135,00",
      newPrice: "155,00",
      ratings: "2",
    },
    {
      image: "/product_images/brinquedo-osso-cachorro2.png",
      productName: "enim eu kevin tail enim ve",
      oldPrice: "115,00",
      newPrice: "135,00",
      ratings: "5",
    },
    {
      image: "/product_images/brinquedo-osso-cachorro2.png",
      productName: "slami in ball tip pig eiusmod",
      oldPrice: "140,00",
      newPrice: "170,00",
      ratings: "4",
    },
    {
      image: "/product_images/brinquedo-roda-cachorro.png",
      productName: "magna sint sirlon",
      oldPrice: "135,00",
      newPrice: "155,00",
      ratings: "2",
    },
    {
      image: "/product_images/brinquedo-osso-cachorro2.png",
      productName: "enim eu kevin tail enim ve",
      oldPrice: "115,00",
      newPrice: "135,00",
      ratings: "5",
    },
  ]);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 4, // optional, default to 1.
      partialVisibilityGutter: 4, // this is needed to tell the amount of px that should be visible.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
      partialVisibilityGutter: 3, // this is needed to tell the amount of px that should be visible.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
      partialVisibilityGutter: 1, // this is needed to tell the amount of px that should be visible.
    },
  };

  const CustomRightArrow = ({ onClick, ...rest }) => {
    const {
      onMove,
      carouselState: { currentSlide, deviceType },
    } = rest;
    // onMove means if dragging or swiping in progress.
    return (
      <ButtonHoverEffect {...rest} onClick={() => onClick()}>
        <i className="elEffect icon icon-right-arrow"></i>
      </ButtonHoverEffect>
    );
  };

  const CustomLeftArrow = ({ onClick, ...rest }) => {
    const {
      onMove,
      carouselState: { currentSlide, deviceType },
    } = rest;
    // onMove means if dragging or swiping in progress.
    return (
      <ButtonHoverEffect {...rest} onClick={() => onClick()}>
        <i className="elEffect icon icon-left-arrow"></i>
      </ButtonHoverEffect>
    );
  };

  return (
    <div className="product-carousel">
      <TitleColor title="Produtos Relcionados" />
      <Carousel
        containerClass="product-tile-home-container"
        itemClass="carousel-item-height"
        swipeable
        draggable
        showDots={false}
        responsive={responsive}
        ssr={false} // means to render carousel on server-side.
        infinite
        keyBoardControl
        customTransition="all 1.5"
        transitionDuration={3500}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        centerMode={false}
        partialVisible={false}
        customRightArrow={<CustomRightArrow />}
        customLeftArrow={<CustomLeftArrow />}
      >
        {products?.length &&
          products.map((prd) => <ProductTile product={prd} />)}
      </Carousel>
    </div>
  );
}
