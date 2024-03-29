import React from "react";
import { Link } from "react-router-dom";
import ProductTileDescription from "../ProductTile/components/ProductTileDescription";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ButtonHoverEffect from "../../Button/ButtonHoverEffect";
import ProductExpirationTime from "../ProductExpirationTime";

export default function ProductTileHome(props) {
  const { days, hours, mins, secs } = props;
  const { products } = props;

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

  const ButtonGroup = ({ next, previous }) => {
    return (
      <div className="carousel-button-group">
        <ButtonHoverEffect onClick={() => previous()}>
          <i className="elEffect icon icon-left-arrow"></i>
        </ButtonHoverEffect>
        <ButtonHoverEffect onClick={() => next()}>
          <i className="elEffect icon icon-right-arrow"></i>
        </ButtonHoverEffect>
      </div>
    );
  };

  return (
    <>
      {!!products?.length && (
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
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          centerMode={false}
          partialVisible={false}
          arrows={false}
          customButtonGroup={<ButtonGroup />}
        >
          {products?.map((prod, id) => (
            <div key={id} className="image-container">
              <ProductExpirationTime
                days={days}
                hours={hours}
                mins={mins}
                secs={secs}
              />
              <div className="image-box">
                <Link
                  to={`/product/${prod.categoryName}/${prod.name}/${prod._id}`}
                >
                  <img src={prod.image[0]} alt="brinquedo-de-cachorro" />
                </Link>
              </div>
              <ProductTileDescription
                productId={prod._id}
                name={prod.name}
                category={prod.category}
                oldPrice={prod.oldPrice}
                newPrice={prod.newPrice}
                rating={prod.rating}
              ></ProductTileDescription>
            </div>
          ))}
        </Carousel>
      )}
    </>
  );
}
