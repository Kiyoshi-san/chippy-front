import React from "react";
import { Route, Routes as Switch } from "react-router-dom";
import HomePage from "pages/HomePage";
import ProductDetail from "pages/ProductDetail";
import ProductList from "pages/ProductList";
import Header from "components/Header";
import Footer from "components/Footer";
import NewsLetter from "components/NewsLetter";

function App() {
  return (
    <>
      <Header />
      <main className="mainContainer">
        <Switch>
          <Route path="/" element={<HomePage />} exact />
          <Route path="/products" element={<ProductList />} exact />
          <Route
            path="/product/:category/:name/:id"
            element={<ProductDetail />}
            exact
          />
        </Switch>
      </main>
      <NewsLetter />
      <Footer />
    </>
  );
}

export default App;
