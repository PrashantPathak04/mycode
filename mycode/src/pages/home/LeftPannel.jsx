import styles from "./Home.module.css";

import profileImage from "../../asset/profile.jpeg";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import HomeIcon from "@mui/icons-material/Home";
import EmailIcon from "@mui/icons-material/Email";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import SettingsIcon from "@mui/icons-material/Settings";

export default function LeftPannel() {
  return (
    <aside className={styles.leftPanel}>
      <div className={styles.card}>
        <div className={styles.displayContainer}>
          <img
            src={profileImage}
            alt="Prashant Pathak"
            className={styles.avatar}
          />
          <div className={styles.displayBottomLeft}>
            <h2 className={styles.name}>Prashant Pathak</h2>
          </div>
        </div>
        <div className={styles.cardInner}>
          <p className={styles.role}>
            <BusinessCenterIcon className={styles.icon} titleAccess="Job Role Icon" aria-label="job-role"/>
            <span>Full Stack Developer • MERN</span>
          </p>

          <p className={styles.role}>
            <HomeIcon className={styles.icon} titleAccess="Location Icon" aria-label="location"/>
            <span>Uttam Nagar, New Delhi, 110059</span>
          </p>

          <p className={styles.role}>
            <EmailIcon className={styles.icon} titleAccess="Email Icon" aria-label="email"/>
            <a href="mailto:pathakarun.04@gmail.com">pathakarun.04@gmail.com</a>
          </p>

          <p className={styles.role}>
            <PhoneAndroidIcon className={styles.icon} titleAccess="Phone Icon" aria-label="phone"/>
            <span>+91 8448339958</span>
          </p>

          <hr className={styles.hr} />

          <p className={styles.large}><b>Skills</b></p>

          <p> React Native, React JS, Redux, JavaScript</p>
          <div className={styles.progressOuter}>
            <div className={styles.progressInner} style={{ width: '80%' }}>70%</div>
          </div>

          <p>Node JS, Express JS, Python</p>
          <div className={styles.progressOuter}>
            <div className={styles.progressInner} style={{ width: '80%' }}>80%</div>
          </div>

          <p>AI</p>
          <div className={styles.progressOuter}>
            <div className={styles.progressInner} style={{ width: '50%' }}>75%</div>
          </div>

          <p> MongoDB, SQL, NOSQL</p>
          <div className={styles.progressOuter}>
            <div className={styles.progressInner} style={{ width: '50%' }}>50%</div>
          </div>

          <br />

          <p className={styles.large}><b>Languages</b></p>
          <p>English</p>
          <div className={styles.progressOuter}>
            <div className={styles.progressInner} style={{ width: '90%' }} />
          </div>

          <p>Hindi</p>
          <div className={styles.progressOuter}>
            <div className={styles.progressInner} style={{ width: '90%' }} />
          </div>

        </div>
      </div>
    </aside>
  );
}
