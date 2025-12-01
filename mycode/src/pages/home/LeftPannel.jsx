import styles from "./Home.module.css";

import profileImage from "../../asset/profile.jpeg";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import HomeIcon from "@mui/icons-material/Home";
import EmailIcon from "@mui/icons-material/Email";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import SettingsIcon from "@mui/icons-material/Settings";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[200],
    ...theme.applyStyles("dark", {
      backgroundColor: theme.palette.grey[800],
    }),
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: "#1976d2",
    ...theme.applyStyles("dark", {
      backgroundColor: "#1976d2",
    }),
  },
}));

export default function LeftPannel() {
  return (
    <aside className={styles.leftPanel}>
      <img
        src={profileImage}
        alt="Prashant Pathak"
        className={styles.profileImage}
        style={{ width: "100%", height: "350px", verticalAlign: "middle" }}
      />
      <h2 className={styles.name}>Prashant Pathak</h2>

      <div className={styles.role}>
        <BusinessCenterIcon
          color="primary"
          className={styles.icon}
          titleAccess="Job Role Icon"
          aria-label="job-role"
        />
        <span>Full Stack Developer • MERN</span>
      </div>

      <div className={styles.role}>
        <HomeIcon
          color="primary"
          className={styles.icon}
          titleAccess="Location Icon"
          aria-label="location"
        />
        <span>Uttam Nagar, New Delhi,110059</span>
      </div>
      <div className={styles.role}>
        <EmailIcon
          color="primary"
          className={styles.icon}
          titleAccess="Email Icon"
          aria-label="email"
        />
        <a href="mailto:pathakarun.04@gmail.com">pathakarun.04@gmail.com</a>
      </div>
      <div className={styles.role}>
        <PhoneAndroidIcon
          color="primary"
          className={styles.icon}
          titleAccess="Phone Icon"
          aria-label="phone"
        />
        <span>+91 8448339958</span>
      </div>
      <div className={styles.divider} />
      <div className={styles.role}>
        <SettingsIcon
          color="primary"
          className={styles.icon}
          titleAccess="Settings Icon"
          aria-label="settings"
        />
        <span className={styles.skills}>Skills</span>
      </div>
      <Box sx={{ width: 420 }} style={{ margin: "1rem" }}>
        <Typography id="input-slider">React JS</Typography>
        <BorderLinearProgress variant="determinate" value={70} />
      </Box>
    </aside>
  );
}
