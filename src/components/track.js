/*import { useMemo } from "react";
import styles from "./track.module.css";

const Track = ({
  albumCover,
  dripTooHardLilB,
  lilBabyGunna,
  propPadding,
  propWidth,
  propWidth1,
  propFlex,
}) => {
  const track1Style = useMemo(() => {
    return {
      padding: propPadding,
      width: propWidth,
    };
  }, [propPadding, propWidth]);

  const titleAndArtistContainerStyle = useMemo(() => {
    return {
      width: propWidth1,
      flex: propFlex,
    };
  }, [propWidth1, propFlex]);

  return (
    <div className={styles.track1} style={track1Style}>
      <img className={styles.rectangleIcon} alt="" src="/rectangle.svg" />
      <img
        className={styles.albumCoverIcon}
        loading="lazy"
        alt=""
        src={albumCover}
      />
      <div
        className={styles.titleAndArtistContainer}
        style={titleAndArtistContainerStyle}
      >
        <p className={styles.dripTooHard}>{dripTooHardLilB}</p>
        <p className={styles.lilBabyGunna}>{lilBabyGunna}</p>
      </div>
    </div>
  );
};

export default Track;*/


import React, { useMemo } from "react";
import styles from "./track.module.css";

const Track = ({
  albumCover,
  dripTooHardLilB,
  lilBabyGunna,
  propPadding,
  propWidth,
  propWidth1,
  propFlex,
}) => {
  const track1Style = useMemo(() => {
    return {
      padding: propPadding,
      width: propWidth,
    };
  }, [propPadding, propWidth]);

  const titleAndArtistContainerStyle = useMemo(() => {
    return {
      width: propWidth1,
      flex: propFlex,
    };
  }, [propWidth1, propFlex]);

  return (
    <div className={styles.track1} style={track1Style}>
      <img className={styles.rectangleIcon} alt="" src="/rectangle.svg" />
      <img
        className={styles.albumCoverIcon}
        loading="lazy"
        alt=""
        src={albumCover}
      />
      <div
        className={styles.titleAndArtistContainer}
        style={titleAndArtistContainerStyle}
      >
        <p className={styles.dripTooHard}>{dripTooHardLilB}</p>
        <p className={styles.lilBabyGunna}>{lilBabyGunna}</p>
      </div>
    </div>
  );
};

export default Track;
