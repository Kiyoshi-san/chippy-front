import React from "react";

export default function ButtonHoverEffect(props) {
  const { children, ...rest } = props;

  return (
    <button className="button-hover-effect" type="button" {...rest}>
      {children}
      {children}
    </button>
  );
}
