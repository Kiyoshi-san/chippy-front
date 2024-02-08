import React from "react";
import truck from "images/service_image_banner/truck.png";
import moneyBag from "images/service_image_banner/money-bag.png";
import phone from "images/service_image_banner/phone.png";
import divisor from "images/divisor.png";

export default function ServiceBanner() {
  return (
    <div className="service-banner">
      <div className="service-box">
        <div className="img">
          <img src={truck} alt="" />
        </div>
        <div className="description">
          <h3>Entrega grátis</h3>
          <span>Vestibulum dolor purus porta</span>
        </div>
        <img src={divisor} alt="" />
      </div>
      <div className="service-box">
        <div className="img">
          <img src={moneyBag} alt="" />
        </div>
        <div className="description">
          <h3>Devolução garantida</h3>
          <span>Vestibulum dolor purus porta</span>
        </div>
      </div>
      <div className="service-box">
        <img src={divisor} alt="" />
        <div className="img">
          <img src={phone} alt="" />
        </div>
        <div className="description">
          <h3>Suporte 24 horas</h3>
          <span>Vestibulum dolor purus porta</span>
        </div>
      </div>
    </div>
  );
}
