import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Button from "../General/Button";
import Spinner from "../General/Spinner";
import axios from "../../axios-orders";
import css from "./style.module.css";
import * as actions from "../../redux/actions/orderActions";
class ContactData extends Component {
  state = {
    name: null,
    city: null,
    street: null,
  };

  changeName = (e) => {
    this.setState({ name: e.target.value });
  };

  changeStreet = (e) => {
    this.setState({ street: e.target.value });
  };

  changeCity = (e) => {
    this.setState({ city: e.target.value });
  };

  componentDidUpdate() {
    if (
      this.props.newOrderStatus.finished &&
      this.props.newOrderStatus.error === null
    ) {
      this.props.history.replace("/orders");
    }
  }
  saveOrder = () => {
    const newOrder = {
      userId: this.props.userId,
      orts: this.props.ingredients,
      dun: this.props.price,
      hayag: {
        name: this.state.name,
        city: this.state.city,
        street: this.state.street,
      },
    };

    this.props.saveOrderAction(newOrder);
  };

  render() {
    return (
      <div className={css.ContactData}>
        Дүн : {this.props.price}₮
        <div>
          {this.props.newOrderStatus.error &&
            `Алдаа гарлаа :${this.props.newOrderStatus.error}`}
        </div>
        {this.props.newOrderStatus.saving ? (
          <Spinner />
        ) : (
          <div>
            <input
              onChange={this.changeName}
              type="text"
              name="name"
              placeholder="Таны нэр"
            />
            <input
              onChange={this.changeStreet}
              type="text"
              name="street"
              placeholder="Таны гэрийн хаяг"
            />
            <input
              onChange={this.changeCity}
              type="text"
              name="city"
              placeholder="Таны хот"
            />
            <Button text="Илгээх" btnType="Success" clicked={this.saveOrder} />
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ingredients: state.burgerReducer.ingredients,
    price: state.burgerReducer.totalPrice,
    newOrderStatus: state.orderReducer.newOrder,
    userId: state.signupReducer.userId,
  };
};

const mapDispachToProps = (dicpatch) => {
  return {
    saveOrderAction: (newOrder) => dicpatch(actions.saveOrder(newOrder)),
  };
};
export default connect(
  mapStateToProps,
  mapDispachToProps
)(withRouter(ContactData));
