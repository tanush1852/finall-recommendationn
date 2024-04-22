import styles from "./top-group.module.css";

const TopGroup = () => {
  return (
    <header className={styles.topGroup}>
      <div className={styles.rectangle} />
      <div className={styles.topGroupInner}>
        <div className={styles.logoParent}>
          <img
            className={styles.logoIcon}
            loading="lazy"
            alt=""
            src="/logo@2x.png"
          />
          <div className={styles.titleWrapper}>
            <h2 className={styles.title}>
              AMUZE : Tailoring the Perfect Songs for Every Soul
            </h2>
          </div>
        </div>
      </div>
      <div className={styles.loremIpsumDolorSitAmetCon} />
    </header>
  );
};

export default TopGroup;
