import styles from "./Home.module.css";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import SchoolIcon from "@mui/icons-material/School";

export default function RightPanel() {
  return (
    <div className={styles.RightPanel}>
      <div className={styles.card}>
        <h2 className={styles.sectionTitle}>
          <BusinessCenterIcon className={styles.titleIcon} /> Work Experience
        </h2>

        <div className={styles.jobContainer}>
          <h5 className={styles.jobTitle}><b>Front End Developer / w3schools.com</b></h5>
          <h6 className={styles.date}>Jan 2015 - <span className={styles.tag}>Current</span></h6>
          <p>Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste.</p>
          <hr className={styles.hr} />
        </div>

        <div className={styles.jobContainer}>
          <h5 className={styles.jobTitle}><b>Web Developer / something.com</b></h5>
          <h6 className={styles.date}>Mar 2012 - Dec 2014</h6>
          <p>Consectetur adipisicing elit. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic.</p>
          <hr className={styles.hr} />
        </div>

        <div className={styles.jobContainer}>
          <h5 className={styles.jobTitle}><b>Graphic Designer / designsomething.com</b></h5>
          <h6 className={styles.date}>Jun 2010 - Mar 2012</h6>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
      </div>

      <div className={styles.card}>
        <h2 className={styles.sectionTitle}><SchoolIcon className={styles.titleIcon} /> Education</h2>

        <div className={styles.jobContainer}>
          <h5 className={styles.jobTitle}><b>W3Schools.com</b></h5>
          <h6 className={styles.date}>Forever</h6>
          <p>Web Development! All I need to know in one place</p>
          <hr className={styles.hr} />
        </div>

        <div className={styles.jobContainer}>
          <h5 className={styles.jobTitle}><b>London Business School</b></h5>
          <h6 className={styles.date}>2013 - 2015</h6>
          <p>Master Degree</p>
          <hr className={styles.hr} />
        </div>

        <div className={styles.jobContainer}>
          <h5 className={styles.jobTitle}><b>School of Coding</b></h5>
          <h6 className={styles.date}>2010 - 2013</h6>
          <p>Bachelor Degree</p>
        </div>
      </div>
    </div>
  );
}