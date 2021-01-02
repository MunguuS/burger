import React, { Component } from "react";

import Burger from "../../components/Burger";
import Modal from "../../components/General/Modal";
import BuildControls from "../../components/BuildControls";
import OrderSummary from "../../components/OrderSummary";
import axios from "../../axios-orders";
import Spinner from "../../components/General/Spinner";
import * as actions from "../../redux/actions/burgerActions";

class BurgerPage extends Component {
  state = {
    confirmOrder: false,
  };

  continueOrder = () => {
    this.props.history.push("/ship");
    // this.closeConfirmModal();
  };

  showConfirmModal = () => {
    this.setState({ confirmOrder: true });
  };

  closeConfirmModal = () => {
    this.setState({ confirmOrder: false });
  };

  render() {
    return (
      <div>
        <Modal
          closeConfirmModal={this.closeConfirmModal}
          show={this.state.confirmOrder}
        >
          {this.state.loading ? (
            <Spinner />
          ) : (
            <OrderSummary
              onCancel={this.closeConfirmModal}
              onContinue={this.continueOrder}
            />
          )}
        </Modal>
        <Burger />
        <BuildControls
          showConfirmModal={this.showConfirmModal}
          ortsHasah={this.props.burgerOrtHas}
          ortsNemeh={this.props.burgerOrtNem}
        />
      </div>
    );
  }
}

export default BurgerPage;
