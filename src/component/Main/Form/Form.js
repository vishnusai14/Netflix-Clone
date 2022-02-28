import React from "react";
import classes from "./Form.module.css";
class Form extends React.Component {
  state = {
    email: "",
    errorVisible: true,
  };

  changeEmailHandler = (e) => {
    this.setState((prevState) => ({
      ...prevState,
      email: e.target.value,
    }));
  };
  render() {
    return (
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
            onChange={(e) => {
              this.changeEmailHandler(e);
            }}
            value={this.state.email}
            type="text"
          />
          <p
            className={`${classes.emailAddress} ${
              this.state.email.length === 0 ? classes.email : classes.emailUp
            }`}
          >
            Email address
          </p>
          <p>Email is Required</p>
        </div>
        <div className={classes.getStarted}>
          <button type="submit">Get Started</button>
        </div>
      </div>
    );
  }
}
export default Form;
