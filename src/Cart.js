import React from "react";
import "./Cart.scss";
import { Data } from "./Data";

export const Cart = () => {
  return (
    <div className="section">
      {Data.map((dataArray, dataIndex) => {
        return (
          <article className="cartItem">
            <img src={dataArray.img} alt={dataArray.alt}></img>
            <div className="item-info">
              <h4 className="title">{dataArray.title}</h4>
              <h4 className="price">{dataArray.price}</h4>
              <button className="remove-btn">remove</button>
            </div>
            <div className="amount-container">
              <button className="amount-btn"></button>
            </div>
          </article>
        );
      })}
    </div>
  );
};
