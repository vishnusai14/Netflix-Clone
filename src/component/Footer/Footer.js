import React from "react";
import classes from "./Footer.module.css";
import { FaGlobe } from "react-icons/fa";
class Footer extends React.Component {
  render() {
    return (
      <div className={classes.wrapper}>
        <div>
          <p>Questions? Call 000-800-040-1843</p>
        </div>
        <div className={classes.container}>
          <div>
            <span>FAQ</span>
          </div>
          <div>
            <span>Help Center</span>
          </div>
          <div>
            <span>Account</span>
          </div>
          <div>
            <span>Media Center</span>
          </div>
          <div>
            <span>Investor Relations</span>
          </div>
          <div>
            <span>Jobs</span>
          </div>
          <div>
            <span>Ways to Watch</span>
          </div>
          <div>
            <span>Terms of Use</span>
          </div>
          <div>
            <span>Privacy</span>
          </div>
          <div>
            <span>Cookie Preferences</span>
          </div>
          <div>
            <span>Corporate Information</span>
          </div>
          <div>
            <span>Contact Us</span>
          </div>
          <div>
            <span>Speed Test</span>
          </div>
          <div>
            <span>Legal Notices</span>
          </div>
          <div>
            <span>Only on Netflix</span>
          </div>
        </div>
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
      </div>
    );
  }
}

export default Footer;
