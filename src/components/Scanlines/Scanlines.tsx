import styles from "./Scanlines.module.scss";

export default function Scanlines() {
  return (
    <>
      <div className={styles.noise} aria-hidden="true" />
      <div className={styles.scanlines} aria-hidden="true" />
      <div className={styles.vignette} aria-hidden="true" />
    </>
  );
}
