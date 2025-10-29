import LeftPanel from "./LeftPannel";
import RightPanel from "./RightPannel";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <div className={styles.home}>
      <LeftPanel />
      <div className={styles.RightPanel}>
      <RightPanel />
      <RightPanel />
      </div>
    </div>
  );
}