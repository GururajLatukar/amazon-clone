import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";

function Checkout(props) {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/2020/PC/Storage/September/New/V253363838_IN_CEPC_Electronics_Teaser_stripe_wfh_pc_2.jpg"
          className="checkout__ad"
        />
        <div>
          <h3>Hello, {user?.email}</h3>
          <h2 className="checkout__title">Your Shopping Basked</h2>
        </div>

        {basket.map((product) => (
          <CheckoutProduct
            id={product.id}
            price={product.price}
            rating={product.rating}
            image={product.image}
            title={product.title}
            key={product.id}
          />
        ))}
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
