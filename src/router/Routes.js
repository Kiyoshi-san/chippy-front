import React from "react";
import { Route, Routes as Switch } from "react-router-dom";
import Header from "../components/Header";
import HomePage from "../pages/HomePage";
import ProductDetail from "../pages/ProductDetail";
import ProductList from "../pages/ProductList";
import Footer from "../components/Footer";
import NewsLetter from "../components/NewsLetter";

const Routes = () => {
  return (
    <>
      <Header />
      <main className="mainContainer">
        <Switch>
          <Route path="/" component={HomePage} exact></Route>
          <Route path="/products" component={ProductList} exact></Route>
          <Route
            path="/product/:category/:name/:id"
            component={ProductDetail}
            exact
          ></Route>
        </Switch>
      </main>
      <NewsLetter />
      <Footer />
    </>
  );
};

export default Routes;
