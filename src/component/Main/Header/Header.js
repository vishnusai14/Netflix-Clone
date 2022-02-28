import React from "react";
import classes from "./Header.module.css";
import NetflixLogo from "../../../assets/netflix-logo.png";
import { FaGlobe } from "react-icons/fa";
class Header extends React.Component {
  render() {
    return (
      <div className={classes.header}>
        <div className={classes.title}>
          <img className={classes.logo} src={NetflixLogo} alt="netflix-logo" />
        </div>
        <div className={classes.headerSide}>
          <div className={classes.inputContainer}>
            <div className={classes.globe}>
              <FaGlobe />
            </div>
            <select
              className={classes.languageSelect}
              id="language"
              name="language"
            >
              <option value="english">English</option>
              <option value="tamil">தமிழ்</option>
            </select>
          </div>
          <div className={classes.buttonContainer}>
            <button className={classes.signInButton} type="submit">
              Sign In
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
