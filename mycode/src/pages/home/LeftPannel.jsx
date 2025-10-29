import styles from "./Home.module.css";

import profileImage from "../../asset/profile.jpeg";
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import HomeIcon from '@mui/icons-material/Home';

export default function LeftPannel() {
  return (
    <div className={styles.leftPanel}>
      <img
        src={profileImage}
        alt="Prashant Pathak"
        style={{ width: "100%", height: "70%", verticalAlign: "middle" }}
      />
      <h2 className={styles.name}>Prashant Pathak</h2>
     <div className={styles.role}>
        <BusinessCenterIcon
          color="primary"
          className={styles.icon}
          titleAccess="Job Role Icon"
          label="Full Stack Developer ! MERN Stack"
        /> Full Stack Developer ! MERN Stack
        <><HomeIcon color="primary" className={styles.icon} titleAccess="Location Icon" /> Uttam Nagar, New Delhi,110059</>
      </div>
    </div>
  );
}