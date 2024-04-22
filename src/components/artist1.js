import styles from "./artist1.module.css";

const Artist1 = ({ artistImage, lilBaby }) => {
  return (
    <div className={styles.artist1}>
      <div className={styles.rectangle} />
      <img
        className={styles.artistImageIcon}
        loading="lazy"
        alt=""
        src={artistImage}
      />
      <div className={styles.artistName}>
        <p className={styles.lilBaby}>{lilBaby}</p>
      </div>
    </div>
  );
};

export default Artist1;
