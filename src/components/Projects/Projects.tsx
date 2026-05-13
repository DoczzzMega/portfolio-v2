"use client";

import { useTranslations } from "next-intl";
import Reveal from "../Reveal/Reveal";
import { projectMetas, type ProjectMeta } from "@/data/portfolio";
import styles from "./Projects.module.scss";

const accentClass: Record<ProjectMeta["accent"], string> = {
  teal: styles.tealCard,
  magenta: styles.magentaCard,
  yellow: styles.yellowCard,
  green: styles.greenCard,
};

export default function Projects() {
  const t = useTranslations("Projects");

  return (
    <section id="projects" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.head}>
          <div>
            <Reveal>
              <span className={styles.eyebrow}>{t("eyebrow")}</span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className={styles.title}>
                {t("titleLead")} <span className={styles.titleAccent}>{t("titleAccent")}</span>{t("titleTrail")}
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <p className={styles.note}>{t("note")}</p>
          </Reveal>
        </div>

        <div className={styles.grid}>
          {projectMetas.map((project, idx) => {
            const featured = idx === 0 || idx === 3;
            return (
              <Reveal
                key={project.id}
                delay={idx * 0.08}
                y={32}
                className={`${styles.card} ${accentClass[project.accent]} ${
                  featured ? styles.feature : ""
                }`}
              >
                <div className={styles.cardHead}>
                  <span className={styles.cardTag}>
                    {t(`categories.${project.category}`)}
                  </span>
                  <span className={styles.cardIndex}>
                    {String(idx + 1).padStart(2, "0")}/
                    {String(projectMetas.length).padStart(2, "0")}
                  </span>
                </div>
                <h3 className={styles.cardTitle}>
                  {t(`items.${project.id}.title`)}
                </h3>
                <p className={styles.cardDescription}>
                  {t(`items.${project.id}.description`)}
                </p>
                {(project.live || project.source) && (
                  <div className={styles.cardLinks}>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.cardLink}
                        data-cursor="hover"
                      >
                        <span>{t("live")}</span>
                        <span className={styles.linkArrow}>↗</span>
                      </a>
                    )}
                    {project.source && (
                      <a
                        href={project.source}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.cardLink}
                        data-cursor="hover"
                      >
                        <span>{t("source")}</span>
                        <span className={styles.linkArrow}>↗</span>
                      </a>
                    )}
                  </div>
                )}
                <div className={styles.stack}>
                  {project.stack.map((tech) => (
                    <span key={tech} className={styles.chip}>
                      {tech}
                    </span>
                  ))}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
