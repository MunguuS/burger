import React from "react";
import css from "./style.module.css";
const Order = (props) => {
  return (
    <div className={css.Order}>
      <p>
        Орц : Гахайн мах:{props.order.orts.bacon} , Салад:
        {props.order.orts.salad}, Бяслаг:{props.order.orts.cheese}, Үхрийн мах:
        {props.order.orts.meat}
      </p>
      <p>
        Хаяг: {props.order.hayag.name} |{props.order.hayag.city}|{" "}
        {props.order.hayag.street}
      </p>
      <p>Үнийн дүн: {props.order.dun}₮ </p>
    </div>
  );
};
export default Order;
