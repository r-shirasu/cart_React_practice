import React, { useState } from "react";
import "./App.scss";
import { Data } from "./Data";

// get our fontawesome imports
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const App = () => {
  const [mobileItems, setmobileItems] = useState(Data);
  const [count, setCount] = useState(2199.96);
  const [footer, setFooter] = useState(true);
  const [message, setMessage] = useState(false);
  const [amount, setAmount] = useState(4);

  const increase = (dataValue, dataIndex) => {
    const increaseAction = mobileItems.map((dataValue, id) => {
      if (id === dataIndex) {
        return { ...dataValue, amount: dataValue.amount + 1 };
      }
      return dataValue;
    });
    let sum = count + dataValue.price;
    setCount(Math.round(sum * 100) / 100);
    setmobileItems(increaseAction);
  };

  const decrease = (dataValue, dataIndex) => {
    const decreaseAction = mobileItems
      .map((dataValue, id) => {
        if (id === dataIndex) {
          return { ...dataValue, amount: dataValue.amount - 1 };
        }
        return dataValue;
      })
      .filter((dataValue, _) => dataValue.amount !== 0);

    let sum = count - dataValue.price;
    setAmount(mobileItems.length - 1);
    setCount(Math.round(sum * 100) / 100);
    setmobileItems(decreaseAction);
  };

  const removeItem = (dataValue, dataIndex) => {
    const deleteArr = mobileItems.filter((_, id) => {
      return id !== dataIndex;
    });
    let sum = count - dataValue.price;
    setAmount(mobileItems.length - 1);
    setCount(Math.round(sum * 100) / 100);
    setmobileItems(deleteArr);
  };

  const clearItems = () => {
    setmobileItems([]);
    setAmount(0);
    setMessage(true);
    setFooter(false);
  };

  return (
    <>
      <nav>
        <div className="nav-center">
          <h3>useReducer</h3>
          <div className="nav-container">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M16 6v2h2l2 12H0L2 8h2V6a6 6 0 1 1 12 0zm-2 0a4 4 0 1 0-8 0v2h8V6zM4 10v2h2v-2H4zm10 0v2h2v-2h-2z" />
            </svg>
            <div className="amount-container">
              <p className="total-amount">{amount}</p>
            </div>
          </div>
        </div>
      </nav>
      <section className="cart">
        <header>
          <h2>Your bag</h2>
        </header>
        <div className="section">
          {message && <h4 className="emptyMessage">is currently empty</h4>}
          {mobileItems.map((dataValue, dataIndex) => {
            return (
              <article key={`${dataValue}${dataIndex}`} className="cartItem">
                <img src={dataValue.img} alt={dataValue.alt}></img>
                <div className="item-info">
                  <h4 className="title">{dataValue.title}</h4>
                  <h4 className="price">{`$${dataValue.price}`}</h4>
                  <button
                    className="remove-btn"
                    onClick={() => removeItem(dataValue, dataIndex)}
                  >
                    remove
                  </button>
                </div>
                <div className="amount-container">
                  <button className="amount-btn">
                    <FontAwesomeIcon
                      icon={faChevronUp}
                      onClick={() => increase(dataValue, dataIndex)}
                    />
                  </button>
                  <p className="amount">{dataValue.amount}</p>
                  <button className="amount-btn">
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      onClick={() => decrease(dataValue, dataIndex)}
                    />
                  </button>
                </div>
              </article>
            );
          })}
          {footer && (
            <footer>
              <hr></hr>
              <div className="cart-total">
                <h4>total</h4>
                <h4>{`$${count}`}</h4>
              </div>
              <button className="btn clear-btn" onClick={clearItems}>
                clear cart
              </button>
            </footer>
          )}
        </div>
      </section>
    </>
  );
};
