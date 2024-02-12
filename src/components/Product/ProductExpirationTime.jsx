import React from "react";

const ProductExpirationTime = ({ days, hours, mins, secs }) => {
  return (
    <div className="expiration-time-container">
      <div className="days">
        <h1>{days}</h1>
        <span>dias</span>
      </div>
      <div className="hours">
        <h1>{hours}</h1>
        <span>horas</span>
      </div>
      <div className="minutes">
        <h1>{mins}</h1>
        <span>mins</span>
      </div>
      <div className="secs">
        <h1>{secs}</h1>
        <span>segs</span>
      </div>
    </div>
  );
};

export default ProductExpirationTime;
