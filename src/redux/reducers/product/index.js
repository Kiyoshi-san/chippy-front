import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_OFFERS_REQUEST,
  PRODUCT_OFFERS_SUCCESS,
  PRODUCT_OFFERS_FAIL,
  PRODUCT_DETAIL_REQUEST,
  PRODUCT_DETAIL_SUCCESS,
  PRODUCT_DETAIL_FAIL,
} from "../../actions/product/constants";

export const productListReducer = (
  state = { loading: true, products: [] },
  action,
) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { loading: true };
    case PRODUCT_LIST_SUCCESS:
      return {
        loading: false,
        products: action.payload.products,
        pages: action.payload.pages,
        page: action.payload.page,
      };
    case PRODUCT_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const productOffersReducer = (
  state = { loading: false, data: [], error: "" },
  action,
) => {
  switch (action.type) {
    case PRODUCT_OFFERS_REQUEST:
      return { loading: true };
    case PRODUCT_OFFERS_SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case PRODUCT_OFFERS_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export const productDetailReducer = (initialState = {}, action) => {
  switch (action.type) {
    case PRODUCT_DETAIL_REQUEST:
      return { loading: true };
    case PRODUCT_DETAIL_SUCCESS:
      return { loading: false, productDetail: action.payload };
    case PRODUCT_DETAIL_FAIL:
      return { loading: false, error: action.payload };
    default:
      return { initialState };
  }
};
