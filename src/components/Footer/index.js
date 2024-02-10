import React from "react";

import visa from "images/payment-methods/pag_peqcartaovisa.png";
import mastercard from "images/payment-methods/pag_peqcartaomastercard.png";
import amex from "images/payment-methods/pag_peqcartaoamex.png";
import diners from "images/payment-methods/pag_peqcartaodiners.png";
import elo from "images/payment-methods/pag_peqcartaoelo.png";
import hipercard from "images/payment-methods/pag_peqcartaohiperit.png"; // vermelo
import hiper2 from "images/payment-methods/pag_pd_peqcartaohiper.png";
import playstore from "images/app-store/googleplay.png";
import appstore from "images/app-store/apstore.png";

export default function Footer() {
  const footerFirstSectionData = [
    {
      title: "Nossos Serviços",
      items: [
        "Sobre a Entrega",
        "Devolução",
        "Termos e Condições de Uso",
        "Entrega e Reembolso",
      ],
    },
    {
      title: "Extras",
      items: ["Contate-nos", "Devolução", "Blog", "Marcas"],
    },
    {
      title: "Minha Conta",
      items: [
        "Meus Pedidos",
        "Cartões de crédito",
        "Meus Endereços",
        "Dados Pessoais",
      ],
    },
  ];

  const cards = [visa, mastercard, amex, diners, elo, hipercard, hiper2];

  return (
    <div className="footer-container">
      <div className="body-row-container">
        <div className="body-row">
          <div className="our-services-container">
            <div className="first-foot-section">
              {footerFirstSectionData?.map((el, idx) => (
                <div key={idx} className="column">
                  <div className="title">
                    <h3>{el.title}</h3>
                  </div>
                  <ul>
                    {el.items.map((its, id) => (
                      <li key={id}>
                        <a href="#">
                          <i className="icon icon-triangle-right-arrow"></i>
                          {its}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              <div className="column">
                <div className="title">
                  <h3>Contato</h3>
                </div>
                <ul>
                  <li>
                    <span>
                      <i className="icon icon-locator"></i>
                      Megnor Comp Pvt Limited, Trade Centre, Udhana Darwaja
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="icon icon-phone"></i>
                      (91)-261 3023333
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="icon icon-email"></i>
                      atendimento@chipy.com
                    </span>
                  </li>
                  <li className="image-cards">
                    {cards?.map((card, id) => (
                      <img key={id} src={card} alt="" />
                    ))}
                  </li>
                </ul>
              </div>
            </div>
            <div className="second-foot-section">
              <div className="section">
                <div className="download-app">
                  <div className="title">
                    <h3>Baixe o nosso App</h3>
                  </div>
                  <div className="image-mobile">
                    <div className="image">
                      <img src={appstore} alt="" />
                    </div>
                    <div className="image">
                      <img src={playstore} alt="" />
                    </div>
                  </div>
                </div>
                <div className="follow-us">
                  <div className="title">
                    <h3>Siga-nos</h3>
                  </div>
                  <div className="social-icon">
                    <div className="icons">
                      <i className="icon icon-facebook"></i>
                      <i className="icon icon-twitter"></i>
                      <i className="icon icon-instagram"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="copyright">
                <span>
                  ©2021 SW Chippy Enterprise. All Rights Reserved. Designed by
                  <span className="chippy-enterprise"> Chippy</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
