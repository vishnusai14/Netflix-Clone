import React from "react";
import Form from "./Form/Form";
import Header from "./Header/Header";
import classes from "./Main.module.css";
class Main extends React.Component {
  render() {
    return (
      <div className={classes.main}>
        <Header />
        <Form />
      </div>
    );
  }
}

export default Main;
