import styles from "./PerspectiveGrid.module.scss";

export default function PerspectiveGrid() {
  return (
    <div className={styles.wrapper} aria-hidden="true">
      <div className={styles.sun} />
      <div className={styles.horizon} />
      <div className={styles.floor} />
    </div>
  );
}
