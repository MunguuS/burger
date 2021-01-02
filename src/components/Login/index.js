import React, { Component } from "react";
import Button from "../../components/General/Button";
import css from "./style.module.css";
class LoginPage extends Component {
  state = {
    email: "",
    password: "",
  };

  changeEmail = (e) => {
    this.setState({ email: e.target.value });
  };

  changePassword = (e) => {
    this.setState({ password: e.target.value });
  };

  login = () => {
    alert("login ...");
  };
  render() {
    return (
      <div className={css.Login}>
        <input
          onChange={this.changeEmail}
          type="text"
          placeholder="Имэйл хаяг"
        />
        <input
          onChange={this.changePassword}
          type="password"
          placeholder="Нууц үг"
        />
        <Button text="Нэвтрэх" btnType="Success" clicked={this.login} />
      </div>
    );
  }
}

export default LoginPage;
