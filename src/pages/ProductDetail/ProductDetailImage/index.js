import React from "react";
import { Carousel } from "react-responsive-carousel";
// import { SideBySideMagnifier } from "react-image-magnifiers";

export default function ProductDetailImage(props) {
  const { productDetail } = props;

  /* const alwaysInPlace = true,
    overlayOpacity = 0.6,
    switchSides = false,
    fillAvailableSpace = false,
    fillAlignTop = false,
    fillGapLeft = 0,
    fillGapRight = 10,
    fillGapTop = 10,
    fillGapBottom = 10; */

  return (
    <Carousel
      className="product-detail-carousel"
      autoPlay={false}
      swipeable
      emulateTouch
      infiniteLoop
      showDots={false}
      showArrows={false}
      showStatus={false}
    >
      {productDetail?.image.length &&
        productDetail?.image.map((prodDetailImg, id) => (
          <div key={id} className="product-detail-page-carousel-image-zoom">
            <img className="thumbnail-carousel-zoom" src={prodDetailImg} />
            {/* <SideBySideMagnifier
              className="input-position"
              style={{ order: switchSides ? "1" : "0" }}
              imageSrc={prodDetailImg}
              largeImageSrc={prodDetailImg}
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
            /> */}
          </div>
        ))}
    </Carousel>
  );
}
