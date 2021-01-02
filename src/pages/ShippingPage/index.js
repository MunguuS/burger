import React, { Component } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import Burger from "../../components/Burger";
import Button from "../../components/General/Button";
import ContactData from "../../components/ContactData";
import css from "./style.module.css";

class ShippingPage extends Component {
  cancelOrder = () => {
    this.props.history.goBack();
  };

  showContactData = () => {
    this.props.history.replace("/ship/contact");
  };

  render() {
    return (
      <div className={css.ShippingPage}>
        <p>
          <strong>Таны захиалгын дэлгэрэнгүй мэдээлэл</strong>
        </p>
        <p>
          <strong>Таны захиалгын дүн : {this.props.price}</strong>
        </p>
        <Burger />
        <Button
          clicked={this.cancelOrder}
          btnType="Danger"
          text="Захиалга цуцлах"
        />
        <Button
          clicked={this.showContactData}
          btnType="Success"
          text="Хүргэлтийн мэдээлэл оруулах"
        />

        <Route path="/ship/contact">
          <ContactData />
        </Route>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { price: state.burgerReducer.totalPrice };
};

export default connect(mapStateToProps)(ShippingPage);
