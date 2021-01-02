import React from "react";
import { connect } from "react-redux";

import Button from "../General/Button";

const OrderSummary = (props) => {
  return (
    <div>
      <h3>Таны захиалга</h3>
      <p>Таны сонгосон орцууд: </p>
      <ul>
        {Object.keys(props.ingredients).map((el) => (
          <li key={el}>
            {props.ingredientNames[el]} : {props.ingredients[el]}
          </li>
        ))}
      </ul>
      <p>
        <strong>Захиалгын дүн: {props.price} төгрөг</strong>
      </p>
      <p>Цаашаа үргэлжүүлэх үү?</p>
      <Button text="Татгалзах" btnType="Danger" clicked={props.onCancel} />
      <Button text="Үргэжлүүлэх" btnType="Success" clicked={props.onContinue} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    ingredientNames: state.burgerReducer.ingredientNames,
    ingredients: state.burgerReducer.ingredients,
    price: state.burgerReducer.totalPrice,
  };
};
export default connect(mapStateToProps)(OrderSummary);
