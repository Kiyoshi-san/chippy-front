import React from "react";
import dog from "images/3_category_banner/dog_play.jpg";
import cat from "images/3_category_banner/cat_play.jpg";
import others from "images/3_category_banner/others_play.jpg";

export default function CategoryBanners() {
  return (
    <div className="category-banners">
      <div className="first-banner banner">
        <div className="title">
          <h1>
            <strong>Cães</strong> <span>collection</span>
          </h1>
        </div>
        <img src={dog} alt="brinquedo de cachorro" />
      </div>
      <div className="second-banner banner">
        <div className="title">
          <h1>
            <strong>Gatos</strong> <span>collection</span>
          </h1>
        </div>
        <img src={cat} alt="brinquedo de gato" />
      </div>
      <div className="third-banner banner">
        <div className="title">
          <h1>
            <strong>Outros</strong> <span>collection</span>
          </h1>
        </div>
        <img src={others} alt="animais brincando" />
      </div>
    </div>
  );
}
