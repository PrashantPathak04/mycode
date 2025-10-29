import styles from "./Home.module.css";

export default function RightPanel() {
  return (
    <div className={styles.subPanel}>
      <h2>Right Panel</h2>
      <p>This is the right panel content.</p>
    </div>
  );
}