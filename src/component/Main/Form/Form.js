import React from "react";
import classes from "./Form.module.css";
import { ValidateEmail } from "../../../Helper/Helper";
import { FaAngleRight } from "react-icons/fa";
class Form extends React.Component {
  emailRef = React.createRef();
  state = {
    email: "",
    focused: false,
    isEmailValid: true,
  };

  clickHandler = () => {
    this.emailRef.current.focus();
    this.setState((prevState) => ({
      ...prevState,
      focused: true,
    }));
  };

  blurHandler = () => {
    console.log("Bluring Clicked");
    this.setState((prevState) => ({
      ...prevState,
      focused: false,
    }));
  };

  changeEmailHandler = (e) => {
    let isEmailValid = ValidateEmail(e.target.value);
    this.setState((prevState) => ({
      ...prevState,
      email: e.target.value,
      isEmailValid: isEmailValid,
    }));
  };
  render() {
    return (
      <div className={classes.wrapper}>
        <div className={classes.container}>
          <div className={`${classes.text} ${classes.bigText}`}>
            <h3>Unlimited moies, TV shows and more.</h3>
          </div>
          <div className={`${classes.text} ${classes.smallText}`}>
            <p>Watch anywhere. Cancel anytime</p>
          </div>
          <div className={`${classes.text} ${classes.smallText}`}>
            <p>
              Ready to watch? Enter your email to create or restart your
              membership.
            </p>
          </div>
          <div className={classes.emailInput}>
            <input
              ref={this.emailRef}
              onBlur={() => {
                this.blurHandler();
              }}
              onChange={(e) => {
                this.changeEmailHandler(e);
              }}
              value={this.state.email}
              type="text"
              className={!this.state.isEmailValid ? classes.errorInput : ""}
            />
            <p
              onClick={() => {
                this.clickHandler();
              }}
              className={`${classes.emailAddress} ${
                this.state.email.length !== 0 || this.state.focused
                  ? classes.emailUp
                  : classes.email
              } }`}
            >
              Email address
            </p>
            {!this.state.isEmailValid && (
              <p className={classes.errorText}>
                Please enter a valid email address.
              </p>
            )}
          </div>
          <div className={classes.getStarted}>
            <div className={classes.getStartedArrow}>
              <FaAngleRight />
            </div>

            <button className={classes.getStartedButton} type="submit">
              Get Started
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default Form;
