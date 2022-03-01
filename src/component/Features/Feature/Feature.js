import React from "react";
import classes from "./Feature.module.css";
class Feature extends React.Component {
  render() {
    return (
      <div className={classes.featureContainer}>
        <div className={classes.title}>
          <h3>{this.props.title}</h3>
        </div>
        <div className={classes.description}>{this.props.description}</div>
        <div className={classes.imageContainer}>
          <div>{this.props.children}</div>
        </div>
      </div>
    );
  }
}

export default Feature;
