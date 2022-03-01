import React from "react";
import classes from "./LineBreak.module.css";
class LineBreak extends React.Component {
  render() {
    return (
      <div className={classes.wrapper}>
        <div className={classes.lineBreak}></div>
      </div>
    );
  }
}

export default LineBreak;
