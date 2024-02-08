import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { listCategories } from "../../../redux/actions/category";

export default function MenuCategory() {
  const categoryList = useSelector((state) => state.categoriesList);
  const { categories } = categoryList;
  const [categoryPosFixed, setCategoryPosFixed] = useState("");
  const [categoryMenuMobile, setCategoryMenuMobile] = useState("");
  const [menuIcon, setMenuIcon] = useState("");
  const [closeIcon] = useState("");

  const categoriesRoot = categories?.filter((obj) => {
    return obj.parentCategoryId === "root";
  });

  const dispatch = useDispatch(listCategories());
  useEffect(() => {
    dispatch(listCategories());
  }, [dispatch]);

  /* const headerHeight = document.querySelectorAll(
    ".top-header-menu-box"
  ).offsetTop; */
  const headerHeight = 90;

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= headerHeight) {
        setCategoryPosFixed("category-fixed");
      } else {
        setCategoryPosFixed("");
      }
    });
  });

  const menuCategoryMobile = () => {
    setCategoryMenuMobile("menu-category-mobile");
    setMenuIcon("menu-icon--opacity-0");
  };

  const closeCategoryMenu = () => {
    setCategoryMenuMobile("");
    setMenuIcon("");
  };

  return (
    <div className={`menu-category-container ${categoryPosFixed}`}>
      <i
        className={`icon icon-menu show-for-small-only ${menuIcon}`}
        onClick={() => {
          menuCategoryMobile();
        }}
      ></i>
      <div className={`menu-category-box ${categoryMenuMobile}`}>
        <div className="categories">
          {categoriesRoot?.map((cat, id) => (
            <Link key={id} to={`/${cat.categoryId}`}>
              <div
                className="category-item click-underline-container"
                key={`${cat.name}${cat.categoryId}`}
              >
                <span>{cat.name}</span>
                <div className="underline"></div>
              </div>
            </Link>
          ))}
        </div>
        <i
          className={`icon icon-close ${closeIcon}`}
          onClick={closeCategoryMenu}
        ></i>
      </div>
    </div>
  );
}
