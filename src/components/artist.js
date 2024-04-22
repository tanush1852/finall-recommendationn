import { useMemo } from "react";
import styles from "./artist.module.css";

const Artist = ({ artistImage, artistName, propWidth }) => {
  const artistNameStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className={styles.artist2}>
      <div className={styles.rectangle} />
      <img
        className={styles.artistImageIcon}
        loading="lazy"
        alt=""
        src={artistImage}
      />
      <div className={styles.artistName} style={artistNameStyle}>
        {artistName}
      </div>
    </div>
  );
};

export default Artist;
