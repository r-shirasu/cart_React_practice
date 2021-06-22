import React, { useState } from "react";
import "./Cart.scss";
import { Data } from "./Data";

// get our fontawesome imports
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Cart = () => {
  const [mobileItems, setmobileItems] = useState(Data);
  const [count, setCount] = useState(2199.96);

  const increase = (dataValue, dataIndex) => {
    const increaseAction = mobileItems.map((dataArray, id) => {
      if (id === dataIndex) {
        return { ...dataArray, amount: dataArray.amount + 1 };
      }
      return dataArray;
    });
    let sum = count + dataValue.price;
    setCount(Math.round(sum * 100) / 100);
    setmobileItems(increaseAction);
  };

  const decrease = (dataArray, dataIndex) => {
    const decreaseAction = mobileItems
      .map((dataArray, id) => {
        if (id === dataIndex) {
          return { ...dataArray, amount: dataArray.amount - 1 };
        }
        return dataArray;
      })
      .filter((dataArray, _) => dataArray.amount !== 0);

    let sum = count - dataArray.price;
    setCount(Math.round(sum * 100) / 100);
    setmobileItems(decreaseAction);
  };

  const removeItem = (dataIndex) => {
    const deleteArr = mobileItems.filter((_, id) => {
      return id !== dataIndex;
    });
    setmobileItems(deleteArr);
  };

  return (
    <div className="section">
      {mobileItems.map((dataArray, dataIndex) => {
        return (
          <article key={`${dataArray}${dataIndex}`} className="cartItem">
            <img src={dataArray.img} alt={dataArray.alt}></img>
            <div className="item-info">
              <h4 className="title">{dataArray.title}</h4>
              <h4 className="price">{`$${dataArray.price}`}</h4>
              <button
                className="remove-btn"
                onClick={() => removeItem(dataIndex)}
              >
                remove
              </button>
            </div>
            <div className="amount-container">
              <button className="amount-btn">
                <FontAwesomeIcon
                  icon={faChevronUp}
                  onClick={() => increase(dataArray, dataIndex)}
                />
              </button>
              <p className="amount">{dataArray.amount}</p>
              <button className="amount-btn">
                <FontAwesomeIcon
                  icon={faChevronDown}
                  onClick={() => decrease(dataArray, dataIndex)}
                />
              </button>
            </div>
          </article>
        );
      })}
      <footer>
        <hr></hr>
        <div className="cart-total">
          <h4>total</h4>
          <h4>{`$${count}`}</h4>
        </div>
        <button className="btn clear-btn">clear cart</button>
      </footer>
    </div>
  );
};
