import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { SideBySideMagnifier } from "react-image-magnifiers";

export default function ProductDetailImage(props) {
  const { productDetail } = props;

  const alwaysInPlace = true,
    overlayOpacity = 0.6,
    switchSides = false,
    fillAvailableSpace = false,
    fillAlignTop = false,
    fillGapLeft = 0,
    fillGapRight = 10,
    fillGapTop = 10,
    fillGapBottom = 10;

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
      partialVisibilityGutter: 0, // this is needed to tell the amount of px that should be visible.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
      partialVisibilityGutter: 0, // this is needed to tell the amount of px that should be visible.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
      partialVisibilityGutter: 0, // this is needed to tell the amount of px that should be visible.
    },
  };

  return (
    <Carousel
      itemClass="product-detail-carousel"
      swipeable
      draggable
      showDots={false}
      responsive={responsive}
      ssr={false} // means to render carousel on server-side.
      infinite
      autoPlay={false}
      autoPlaySpeed={5000}
      keyBoardControl
      /* BUG - customTransition="all 1.5"
    transitionDuration={3500} */
      removeArrowOnDeviceType={["tablet", "mobile"]}
      dotListClass="custom-dot-list-style"
      centerMode={false}
      partialVisible={false}
      arrows={true}
    >
      {!!productDetail?.image.length &&
        productDetail?.image.map((prodDetailImg, id) => {
          return (
            <div key={id} className="product-detail-page-carousel-image-zoom">
              <img
                className="thumbnail-carousel-zoom"
                src={`/${prodDetailImg}`}
              />
              <SideBySideMagnifier
                className="input-position"
                style={{ order: switchSides ? "1" : "0" }}
                imageSrc={`/${prodDetailImg}`}
                largeImageSrc={`/${prodDetailImg}`}
                alwaysInPlace={alwaysInPlace}
                overlayOpacity={overlayOpacity}
                switchSides={switchSides}
                zoomPosition="left"
                inPlaceMinBreakpoint={641}
                fillAvailableSpace={fillAvailableSpace}
                fillAlignTop={fillAlignTop}
                fillGapTop={fillGapTop}
                fillGapRight={fillGapRight}
                fillGapBottom={fillGapBottom}
                fillGapLeft={fillGapLeft}
                zoomContainerBorder="1px solid #ccc"
                zoomContainerBoxShadow="0 4px 8px rgba(0,0,0,.5)"
              />
            </div>
          );
        })}
    </Carousel>
  );
}
