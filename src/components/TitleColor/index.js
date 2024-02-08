import React from "react";

export default function TitleColor(props) {
  const { title } = props;
  const splitedTitle = title.split(" ");
  return (
    <div className="title-color-container">
      <span>{splitedTitle[0]}</span> <span>{splitedTitle[1]}</span>
    </div>
  );
}
