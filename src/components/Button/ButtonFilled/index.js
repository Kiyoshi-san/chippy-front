import React from "react";

export default function ButtonFilled(props) {
  const { label, ...rest } = props;
  return (
    <div>
      <button {...rest} className={`button-filled`}>
        {label}
      </button>
    </div>
  );
}
