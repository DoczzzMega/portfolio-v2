"use client";

import { motion } from "framer-motion";
import PerspectiveGrid from "../PerspectiveGrid/PerspectiveGrid";
import { profile } from "@/data/portfolio";
import styles from "./Hero.module.scss";

export default function Hero() {
  return (
    <section id="home" className={styles.section}>
      <PerspectiveGrid />

      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className={styles.kicker}
        >
          [00] · loading_identity.exe
        </motion.div>

        <h1 className={styles.heading}>
          <motion.span
            className={styles.line}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className={styles.muted}>I&apos;m </span>
            <span className={styles.glitch} data-text={profile.name}>
              {profile.name}
            </span>
            <span className={styles.cursor} aria-hidden="true" />
          </motion.span>

          <motion.span
            className={styles.line}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
          >
            a <span className={styles.accent}>fullstack</span>
          </motion.span>

          <motion.span
            className={styles.line}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            developer.
          </motion.span>
        </h1>

        <motion.p
          className={styles.tagline}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          className={styles.actions}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <a className={styles.cta} href="#projects" data-cursor="hover">
            view work
          </a>
          <a
            className={`${styles.cta} ${styles.ghost}`}
            href={`mailto:${profile.contacts.email}`}
            data-cursor="hover"
          >
            establish contact
          </a>
        </motion.div>
      </div>

      <div className={styles.badges}>
        <span className={styles.badge}>
          <span>lat 47.2°N</span>
          long 39.7°E
        </span>
        <span className={styles.badge}>
          <span>node://</span>
          {profile.alias}
        </span>
      </div>
    </section>
  );
}
