import React from "react";
import classes from "./FAQ.module.css";
import { FaPlus } from "react-icons/fa";

class FAQ extends React.Component {
  answerRef = React.createRef();
  state = {
    open: false,
  };
  openAnswer = () => {
    let alreadyOpenQuesElement = document.getElementsByClassName(classes.open);
    if (Array.from(alreadyOpenQuesElement).length !== 0) {
      // console.log(alreadyOpenQuesElement[0].classList);
      alreadyOpenQuesElement[0].classList.replace(classes.open, classes.close);
      // alreadyOpenQuesElement[0].classList.add(classes.close);
    }
    console.log(this.answerRef);
    this.props.moveNextQuestion(
      this.props.currentQuestionNumber,
      !this.state.open,
      this.answerRef
    );
    this.setState((prevState) => ({
      ...prevState,
      open: !prevState.open,
    }));
  };
  render() {
    console.log(this.props);
    return (
      <>
        <div
          onClick={() => {
            this.openAnswer();
          }}
          style={{ ...this.props.style }}
          className={`${classes.faqContainer}`}
        >
          <div className={classes.question}>
            <h5>{this.props.question}</h5>
          </div>
          <div
            className={`${classes.addIcon} ${
              this.state.open ? classes.iconClose : classes.iconNotClose
            }`}
          >
            <FaPlus />
          </div>
          <div
            ref={this.answerRef}
            className={`${classes.answer} ${
              this.state.open ? classes.open : classes.close
            } `}
            style={{ ...this.props.answerStyle }}
          >
            <p>{this.props.answer}</p>
            <br />
            {this.props.answer2 && <p>{this.props.answer2}</p>}
          </div>
        </div>
      </>
    );
  }
}

export default FAQ;
