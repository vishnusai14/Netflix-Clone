import React from "react";
import Feature from "./Feature/Feature";
import classes from "./Features.module.css";
import TV from "../../assets/tv.png";
import St from "../../assets/st.jpg";
import DownloadGif from "../../assets/download-icon.gif";
import BoxShoot from "../../assets/boxshot.png";
import TVVideo from "../../assets/video-tv-in-0819.m4v";
import DevicePileIn from "../../assets/device-pile-in.png";
import Children from "../../assets/children.png";
import DevicePileInVideo from "../../assets/video-devices-in.m4v";
import LineBreak from "../LineBreak/LineBreak";
class Features extends React.Component {
  render() {
    return (
      <>
        <div className={classes.wrapper}>
          <Feature
            title="Enjoy on your TV."
            description="Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more."
          >
            <img className={classes.tvImg} src={TV} alt="TV" />
            <div className={classes.videoContainer}>
              <video
                className={classes.tvVideo}
                src={TVVideo}
                autoPlay
                loop
                muted
                playsInline
              />
            </div>
          </Feature>
          <LineBreak />
          <Feature
            title="Download your shows to watch offline."
            description="Save your favourites easily and always have something to watch."
          >
            <img className={classes.tvImg} src={St} alt="Stranger Things" />
            <div className={classes.imgBoxShootContainer}>
              <div>
                <img
                  className={classes.imgBoxShoot}
                  src={BoxShoot}
                  alt="BoxShoot"
                />
              </div>
              <div className={classes.boxShootTitle}>
                <h4>Stranger Things</h4>
                <h5>Downloading...</h5>
              </div>
              <div className={classes.downloadContainer}>
                <img
                  className={classes.download}
                  src={DownloadGif}
                  alt="Download"
                />
              </div>
            </div>
          </Feature>
          <LineBreak />
          <Feature
            title="Watch everywhere."
            description="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."
          >
            <img
              className={classes.devicePileInImage}
              src={DevicePileIn}
              alt="Device-Pile-In"
            />
            <div className={classes.devicePileInVideoContainer}>
              <video
                className={classes.devicePileInVideo}
                src={DevicePileInVideo}
                autoPlay
                loop
                muted
                playsInline
              />
            </div>
          </Feature>
          <Feature
            title="Create profiles for children."
            description="Send children on adventures with their favourite characters in a space made just for them—free with your membership."
          >
            <img className={classes.tvImg} src={Children} alt="Children" />
          </Feature>
          <LineBreak />
          <LineBreak />
        </div>
      </>
    );
  }
}

export default Features;
