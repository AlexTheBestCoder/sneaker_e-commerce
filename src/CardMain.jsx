import React, { useState } from "react";
import "./CardMain.css";
import sneaker from "./images/image-product-1.jpg";
import min_sneaker_1 from "./images/image-product-1-thumbnail.jpg";
import min_sneaker_2 from "./images/image-product-2-thumbnail.jpg";
import min_sneaker_3 from "./images/image-product-3-thumbnail.jpg";
import min_sneaker_4 from "./images/image-product-4-thumbnail.jpg";

export default function CardMain() {
  const [count, setCount] = useState(0);
  const Total = 125;
  function reduce() {
    if (count > 0) {
      setCount((count) => count - 1);
    }
  }
  return (
    <div className="main-content">
      <div className="main-container-left">
        <div className="all-sneaker">
          <div className="sneaker-image-primary">
            <img src={sneaker} alt="" />
          </div>
          <div className="sneaker-image-secondary">
            <img src={min_sneaker_1} alt="" />
            <img src={min_sneaker_2} alt="" />
            <img src={min_sneaker_3} alt="" />
            <img src={min_sneaker_4} alt="" />
          </div>
        </div>
      </div>
      <div className="main-container-rigth">
        <div className="all-detail">
        <div className="text">
          <h2>Sneaker Company</h2>
          <h1>
            Fall Limited Edition <br />
            <span>Sneakers</span>
          </h1>
          <p>
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they’ll withstand everything
            the weather can offer.
          </p>
        </div>
        <div className="price">
          <div className="total">
            <div className="total-value">${Total * count}.00</div>
            <div className="reduction">50%</div>
          </div>
          <p className="old-price">$250.00</p>
        </div>
        {/* <br /> */}
        <div className="my-button">
          <div className="button-plus-and-moins">
            <button className="boutton-moins" onClick={reduce}>
              -
            </button>
            <p>{count}</p>
            <button
              className="boutton-plus"
              onClick={() => {
                setCount((count) => count + 1);
              }}
            >
              +
            </button>
          </div>
          <div className="button-add">
            <button
              type="submit"
              onClick={() => {
                setCount(0);
                // alert("Yess, vous venez d'ajouter votre commande au panier")
              }}
            >
              <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                  fill="white"
                  fill-rule="nonzero"
                />
              </svg>
              Add to cart
            </button>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
