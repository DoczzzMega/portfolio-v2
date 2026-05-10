"use client";

import Reveal from "../Reveal/Reveal";
import { projects, type Project } from "@/data/portfolio";
import styles from "./Projects.module.scss";

const accentClass: Record<Project["accent"], string> = {
  teal: styles.tealCard,
  magenta: styles.magentaCard,
  yellow: styles.yellowCard,
  green: styles.greenCard,
};

export default function Projects() {
  return (
    <section id="projects" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.head}>
          <div>
            <Reveal>
              <span className={styles.eyebrow}>[03] · projects</span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className={styles.title}>
                Selected <span className={styles.titleAccent}>work</span>.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <p className={styles.note}>
              // motion-driven UIs · Laravel APIs · self-hosted AI services
            </p>
          </Reveal>
        </div>

        <div className={styles.grid}>
          {projects.map((project, idx) => {
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
                  <span className={styles.cardTag}>{project.category}</span>
                  <span className={styles.cardIndex}>
                    {String(idx + 1).padStart(2, "0")}/{String(projects.length).padStart(2, "0")}
                  </span>
                </div>
                <h3 className={styles.cardTitle}>{project.title}</h3>
                <p className={styles.cardDescription}>{project.description}</p>
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
