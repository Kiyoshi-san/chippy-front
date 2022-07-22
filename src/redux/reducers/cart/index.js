import {
  ADD_PRODUCT_CART_REQUEST,
  ADD_PRODUCT_CART_SUCCESS,
  ADD_PRODUCT_CART_FAIL,
} from "../../actions/cart/constants";

export const addProductToCartReducer = (initialState = {}, action) => {
  switch (action.type) {
    case ADD_PRODUCT_CART_REQUEST:
      return { loading: true };
    case ADD_PRODUCT_CART_SUCCESS:
      return { loading: false, data: action.payload };
    case ADD_PRODUCT_CART_FAIL:
      return { loading: false, error: action.payload };
    default:
      return initialState;
  }
};
