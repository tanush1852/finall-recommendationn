import styles from "./bottom-group.module.css";

const BottomGroup = () => {
  return (
    <footer className={styles.bottomGroup}>
      <div className={styles.rectangle} />
      <div className={styles.indeedx} />
      <div className={styles.bottomGroupInner}>
        <div className={styles.frameParent}>
          <div className={styles.frameGroup}>
            <div className={styles.optionsParent}>
              <div className={styles.options}>
                Legal     Cookies     Privacy Policy     Accessibility     Safety     Contact Us     Expand Your Preferences     Feedback
              </div>
              
            </div>
            
          </div>
          
        </div>
      </div>
    </footer>
  );
};

export default BottomGroup;
