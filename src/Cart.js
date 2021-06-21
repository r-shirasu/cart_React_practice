import React from "react";
import "./Cart.scss";
import { Data } from "./Data";

export const Cart = () => {
  return (
    <article className="cartItem">
      <img src={Data[0].img} alt={Data[0].alt}></img>
      <div className="item-info">
        <h4 className="title">{Data[0].title}</h4>
        <h4 className="price">{Data[0].price}</h4>
      </div>
    </article>
  );
};
