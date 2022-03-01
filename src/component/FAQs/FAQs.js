import React from "react";
import FAQ from "./FAQ/FAQ";
import classes from "./FAQs.module.css";
class FAQs extends React.Component {
  render() {
    return (
      <div className={classes.wraper}>
        <div className={classes.faqContainer}>
          <div className={classes.title}>
            <h3>Frequently Asked Questions</h3>
          </div>
          <FAQ
            open={true}
            question="What is Netflix?"
            answer="Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices."
          />
          <FAQ
            question="What is Netflix?"
            answer="Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices."
          />
        </div>
      </div>
    );
  }
}

export default FAQs;
