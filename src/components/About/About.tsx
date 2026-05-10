"use client";

import type { MouseEvent } from "react";
import Reveal from "../Reveal/Reveal";
import { profile } from "@/data/portfolio";
import styles from "./About.module.scss";

export default function About() {
  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--x", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--y", `${e.clientY - rect.top}px`);
  };

  return (
    <section id="about" className={styles.section}>
      <div className={styles.container}>
        <div>
          <Reveal>
            <span className={styles.eyebrow}>[01] · about</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className={styles.title}>
              I build between <span className={styles.accent}>Laravel</span>
              <br />and the browser.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className={styles.body}>{profile.description}</p>
          </Reveal>
        </div>

        <div className={styles.statsGrid}>
          {profile.stats.map((stat, idx) => (
            <Reveal key={stat.label} delay={0.05 * idx} y={24}>
              <div
                className={styles.statCard}
                onMouseMove={handleMove}
                data-cursor="hover"
              >
                <div className={styles.statValue}>{stat.value}</div>
                <div className={styles.statLabel}>{stat.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
