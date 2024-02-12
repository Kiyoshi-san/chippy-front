import React from "react";

export default function Rating(props) {
  const { rating, numReviews, caption } = props;
  return (
    <div className="rating-stars">
      <span>
        <i
          className={rating >= 1 ? "icon icon-star filled" : "icon icon-star"}
        ></i>
      </span>
      <span>
        <i
          className={rating >= 2 ? "icon icon-star filled" : "icon icon-star"}
        ></i>
      </span>
      <span>
        <i
          className={rating >= 3 ? "icon icon-star filled" : "icon icon-star"}
        ></i>
      </span>
      <span>
        <i
          className={rating >= 4 ? "icon icon-star filled" : "icon icon-star"}
        ></i>
      </span>
      <span>
        <i
          className={rating >= 5 ? "icon icon-star filled" : "icon icon-star"}
        ></i>
      </span>
      {caption ? (
        <span>{caption}</span>
      ) : (
        <span>{`${numReviews ? `${numReviews} avaliações` : ""}`}</span>
      )}
    </div>
  );
}
