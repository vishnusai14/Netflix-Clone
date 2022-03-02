import React from "react";
import classes from "./Feature.module.css";
class Feature extends React.Component {
  render() {
    return (
      <div
        className={`${this.props.even ? classes.even : ""} ${
          classes.featureContainer
        }`}
      >
        <div className={classes.words}>
          <div className={classes.title}>
            <h3>{this.props.title}</h3>
          </div>
          <div className={classes.description}>{this.props.description}</div>
        </div>

        <div className={classes.imageContainer}>
          <div>{this.props.children}</div>
        </div>
      </div>
    );
  }
}

export default Feature;
