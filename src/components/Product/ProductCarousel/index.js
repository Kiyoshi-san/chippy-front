import React from "react";
import Carousel from "react-multi-carousel";
import ButtonHoverEffect from "../../Button/ButtonHoverEffect";
import ProductTile from "../../Product/ProductTile";
import TitleColor from "../../TitleColor";

export default function ProductCarousel(props) {
  const { products, title } = props;

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 4, // optional, default to 1.
      partialVisibilityGutter: 4, // this is needed to tell the amount of px that should be visible.
    },
    desktop: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
      partialVisibilityGutter: 3, // this is needed to tell the amount of px that should be visible.
    },
    tablet: {
      breakpoint: { max: 767, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
      partialVisibilityGutter: 2, // this is needed to tell the amount of px that should be visible.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
      partialVisibilityGutter: 1, // this is needed to tell the amount of px that should be visible.
    },
  };

  const CustomRightArrow = ({ onClick, ...rest }) => {
    // onMove means if dragging or swiping in progress.
    return (
      <ButtonHoverEffect {...rest} onClick={() => onClick()}>
        <i className="elEffect icon icon-right-arrow"></i>
      </ButtonHoverEffect>
    );
  };

  const CustomLeftArrow = ({ onClick, ...rest }) => {
    // onMove means if dragging or swiping in progress.
    return (
      <ButtonHoverEffect {...rest} onClick={() => onClick()}>
        <i className="elEffect icon icon-left-arrow"></i>
      </ButtonHoverEffect>
    );
  };

  return (
    <div className="product-carousel">
      <TitleColor title={title} />
      {products?.length && (
        <Carousel
          containerClass="product-tile-home-container"
          itemClass="carousel-item-height"
          swipeable
          draggable
          showDots={false}
          responsive={responsive}
          ssr={false} // means to render carousel on server-side.
          infinite
          autoPlay
          autoPlaySpeed={5000}
          keyBoardControl
          /* BUG - customTransition="all 1.5"
          transitionDuration={3500} */
          dotListClass="custom-dot-list-style"
          centerMode={false}
          partialVisible={false}
          customRightArrow={<CustomRightArrow />}
          customLeftArrow={<CustomLeftArrow />}
        >
          {products?.map((prd, id) => (
            <ProductTile key={id} product={prd} />
          ))}
        </Carousel>
      )}
    </div>
  );
}
