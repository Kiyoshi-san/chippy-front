import React from "react";

export default function Search() {
  const submitHandler = (e) => {
    console.log(e);
  };
  return (
    <div className="search-component hide-for-small-only">
      <form onSubmit={submitHandler}>
        <div className="input-container">
          <input type="text" placeholder="Buscar" />
          <i className="icon icon-search"></i>
        </div>
      </form>
    </div>
  );
}
