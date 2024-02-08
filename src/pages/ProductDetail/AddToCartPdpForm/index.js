import React, { useState } from "react";
import { useDispatch } from "react-redux";
import ButtonFilled from "../../../components/Button/ButtonFilled";
import { addProductToCart } from "../../../redux/actions/cart";

export default function AddToCartPdpForm(props) {
  const [qtyValue, setQtyValue] = useState(1);

  const valueGreat1 = qtyValue > 1 ? true : false;

  const incrementValue = (e) => {
    e.preventDefault();
    setQtyValue(qtyValue + 1);
  };

  const decrementValue = (e) => {
    e.preventDefault();
    setQtyValue(valueGreat1 ? qtyValue - 1 : qtyValue);
  };

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();

    const qty = e.target.addqtycart.value;

    const data = {
      productDetail: props.productDetail,
      qty,
    };
    dispatch(addProductToCart(data));
  };

  return (
    <div className="add-to-cart-pdp-form" onSubmit={submitHandler}>
      <form action="">
        <div className="input-qty">
          <input type="number" name="addqtycart" min={1} value={qtyValue} />
          <div className="increment-buttons">
            <input
              type="button"
              onClick={incrementValue}
              value="+"
              className="button-plus"
              data-field="quantity"
            />
            <input
              type="button"
              onClick={decrementValue}
              value="-"
              className="button-minus"
              data-field="quantity"
              disabled={!valueGreat1}
            />
          </div>
        </div>
        <div className="button-add">
          <ButtonFilled type="submit" label="Adicionar" />
        </div>
      </form>
    </div>
  );
}
