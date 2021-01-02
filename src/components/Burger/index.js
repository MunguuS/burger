import React from "react";
import BurderIngredient from "../BurderIngredient";
import css from "./style.module.css";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

const Burder = (props) => {
  let content = [];

  const items = Object.entries(props.ingredients);
  items.map((el) => {
    for (let i = 0; i < el[1]; i++)
      content.push(<BurderIngredient key={`${el[0]}${i}`} type={el[0]} />);
  });

  if (content.length === 0)
    content = <p>Хачиртай талхны орцыг сонгоно уу ...</p>;

  return (
    <div className={css.Burger}>
      <BurderIngredient type="bread-top" />
      {content}
      <BurderIngredient type="bread-bottom" />
    </div>
  );
};

const mapStateToProps = (state) => {
  return { ingredients: state.burgerReducer.ingredients };
};

export default connect(mapStateToProps)(withRouter(Burder));
