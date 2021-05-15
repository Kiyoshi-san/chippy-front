import React from "react";
import Search from "../Search";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="top-header-menu-container">
      <i className="icon icon-menu show-for-small-only"></i>
      <div className="logo">
        <Link to={"/"}>
          <i className="icon icon-logo"></i>
        </Link>
      </div>
      <Search />
      <div className="cta-icons">
        <i className="icon icon-heart-empty hide-for-small-only"></i>
        <div className="top-header-menu--my-account">
          <span className="hide-for-small-only">Minha conta</span>
          <i className="icon icon-profile show-for-small-only"></i>
        </div>
        <i className="icon icon-cart"></i>
      </div>
    </div>
  );
}
