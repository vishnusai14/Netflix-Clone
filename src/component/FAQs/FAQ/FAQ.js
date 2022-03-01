import React from "react";
import classes from "./FAQ.module.css";
import { FaPlus } from "react-icons/fa";

class FAQ extends React.Component {
  render() {
    return (
      <>
        <div className={classes.faqContainer}>
          <div className={classes.question}>
            <h5>{this.props.question}</h5>
          </div>
          <div className={classes.addIcon}>
            <FaPlus />
          </div>
          <div
            className={`${classes.answer} ${
              this.props.open ? classes.open : ""
            } `}
          >
            <p>{this.props.answer}</p>
          </div>
        </div>
      </>
    );
  }
}

export default FAQ;
