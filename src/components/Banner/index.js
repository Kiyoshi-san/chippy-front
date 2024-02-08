import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import ButtonFilled from "../Button/ButtonFilled/index";
import "react-multi-carousel/lib/styles.css";

export default function Banner() {
  const [animatedClassTitle, setAnimatedClassTitle] =
    useState("title-animated");
  const [animatedClassSubTitle, setAnimatedClassSubTitle] =
    useState("subtitle-animated");

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
    <>
      <Carousel
        containerClass="carousel-banner-container"
        itemClass="carousel-item-height"
        swipeable
        draggable
        showDots
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
        beforeChange={() => {
          setAnimatedClassTitle("");
          setAnimatedClassTitle("title-animated");
          setAnimatedClassSubTitle("");
          setAnimatedClassSubTitle("subtitle-animated");
        }}
        centerMode={false}
        partialVisible={false}
      >
        <div>
          <div className="imageMask"></div>
          <img src={"images/banner/banner1.jpg"} />
          <h1 className={`title ${animatedClassTitle}`}>Legend 1</h1>
          <div className={`subtitle-container ${animatedClassSubTitle}`}>
            <h1 className={`subtitle ${animatedClassSubTitle}`}>
              Subtitle Legend 1
            </h1>
            <ButtonFilled label="Comprar"></ButtonFilled>
          </div>
        </div>
        <div>
          <div className="imageMask"></div>
          <img src={"images/banner/banner2.jpg"} />
          <h1 className={`title ${animatedClassTitle}`}>Legend 2</h1>
          <div className={`subtitle-container ${animatedClassSubTitle}`}>
            <h1 className={`subtitle ${animatedClassSubTitle}`}>
              Subtitle Legend 2
            </h1>
            <ButtonFilled label="Comprar"></ButtonFilled>
          </div>
        </div>
        <div>
          <div className="imageMask"></div>
          <img src={"images/banner/banner3.jpg"} />
          <h1 className={`title ${animatedClassTitle}`}>Legend 3</h1>
          <div className={`subtitle-container ${animatedClassSubTitle}`}>
            <h1 className={`subtitle ${animatedClassSubTitle}`}>
              Subtitle Legend 3
            </h1>
            <ButtonFilled label="Comprar"></ButtonFilled>
          </div>
        </div>
        <div>
          <div className="imageMask"></div>
          <img src={"images/banner/banner4.jpg"} />
          <h1 className={`title ${animatedClassTitle}`}>Legend 4</h1>
          <div className={`subtitle-container ${animatedClassSubTitle}`}>
            <h1 className={`subtitle`}>Subtitle Legend 4</h1>
            <ButtonFilled label="Comprar"></ButtonFilled>
          </div>
        </div>
      </Carousel>
    </>
  );
}
