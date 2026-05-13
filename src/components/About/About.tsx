"use client";

import type { MouseEvent } from "react";
import { useTranslations } from "next-intl";
import Reveal from "../Reveal/Reveal";
import { statKeys, statValues } from "@/data/portfolio";
import styles from "./About.module.scss";

export default function About() {
  const t = useTranslations("About");

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
            <span className={styles.eyebrow}>{t("eyebrow")}</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className={styles.title}>
              {t("titleLead")} <span className={styles.accent}>{t("titleAccent")}</span>
              <br />
              {t("titleTrail")}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className={styles.body}>{t("body")}</p>
          </Reveal>
        </div>

        <div className={styles.statsGrid}>
          {statKeys.map((key, idx) => (
            <Reveal key={key} delay={0.05 * idx} y={24}>
              <div
                className={styles.statCard}
                onMouseMove={handleMove}
                data-cursor="hover"
              >
                <div className={styles.statValue}>{statValues[key]}</div>
                <div className={styles.statLabel}>{t(`stats.${key}`)}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
