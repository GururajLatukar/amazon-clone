import React, { useEffect, useState } from "react";
import "./Orders.css";
import { db } from "../firebase";
import { useStateValue } from "./StateProvider";
import moment from "moment";
import CheckoutProduct from "./CheckoutProduct";
import CurrencyFormat from "react-currency-format";

function Orders(props) {
  const [orders, setOrders] = useState([]);
  const [{ basket, user }, dispatch] = useStateValue();

  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user?.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) => {
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          );
        });
    } else {
      setOrders([]);
    }
  }, [user]);

  return (
    <div className="orders">
      <h1>Your Orders</h1>
      <div className="orders__order">
        {orders?.map((order) => (
          <div className="orders__order">
            <h2>Order</h2>
            <p>
              {moment.unix(order.data.created).format("MMMM Do YYYY, h:mm")}
            </p>
            <p className="orders__order__id">
              <small>{order.id}</small>
            </p>
            {order.data.basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                image={item.image}
                title={item.title}
                price={item.price}
                rating={item.rating}
                hideButton
              />
            ))}
            <CurrencyFormat
              renderText={(value) => (
                <h3 className="orders__order__total">Order Total: {value}</h3>
              )}
              decimalScale={2}
              value={order.data.amount / 100}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"$"}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Orders;
