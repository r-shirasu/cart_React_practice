import React, { useState } from "react";
import "./Cart.scss";
import { Data } from "./Data";

// get our fontawesome imports
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Cart = () => {
  const [amount, setAmount] = useState(1);
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
              <button className="amount-btn">
                <FontAwesomeIcon icon={faChevronUp} />
              </button>
              <p class="amount">{amount}</p>
              <button className="amount-btn">
                <FontAwesomeIcon icon={faChevronDown} />
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
};
