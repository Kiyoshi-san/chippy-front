import {
  ADD_PRODUCT_CART_REQUEST,
  ADD_PRODUCT_CART_SUCCESS,
  ADD_PRODUCT_CART_FAIL,
} from "./constants";

import Axios from "axios";

export const addProductToCart = (dataProduct) => async (dispatch, getState) => {
  dispatch({ type: ADD_PRODUCT_CART_REQUEST });
  try {
    const { data } = await Axios.post(
      "/api/cart",
      {
        cartItems: {
          name: dataProduct.productDetail.name,
          qty: dataProduct.qty,
          image: dataProduct.productDetail.image,
          price: dataProduct.productDetail.price,
          product: dataProduct.productDetail._id,
        },
      } /* {
        headers: {
            Authorization: `Bearer ${userInfo.token}`
        }
    } */
    );
    dispatch({ type: ADD_PRODUCT_CART_SUCCESS, payload: data });
  } catch (error) {
    const message = error.response?.data.message
      ? error.response.data.message
      : error.message;
    dispatch({ type: ADD_PRODUCT_CART_FAIL, payload: message });
  }
};
