import React from "react";

export default function CategoryBanners() {
  return (
    <div className="category-banners">
      <div className="first-banner banner">
        <div className="title">
          <h1>
            <strong>Cães</strong> <span>collection</span>
          </h1>
        </div>
        <img
          src={"images/3_category_banner/dog_play.jpg"}
          alt="brinquedo de cachorro"
        />
      </div>
      <div className="second-banner banner">
        <div className="title">
          <h1>
            <strong>Gatos</strong> <span>collection</span>
          </h1>
        </div>
        <img
          src={"images/3_category_banner/cat_play.jpg"}
          alt="brinquedo de gato"
        />
      </div>
      <div className="third-banner banner">
        <div className="title">
          <h1>
            <strong>Outros</strong> <span>collection</span>
          </h1>
        </div>
        <img
          src={"images/3_category_banner/others_play.jpg"}
          alt="animais brincando"
        />
      </div>
    </div>
  );
}
