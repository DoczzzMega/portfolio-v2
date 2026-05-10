"use client";

import { useRef, type MouseEvent } from "react";
import Reveal from "../Reveal/Reveal";
import { skillGroups, type SkillGroup } from "@/data/portfolio";
import styles from "./Skills.module.scss";

const accentClass: Record<SkillGroup["accent"], string> = {
  teal: styles.tealCard,
  magenta: styles.magentaCard,
  yellow: styles.yellowCard,
};

function SkillCard({ group, index }: { group: SkillGroup; index: number }) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `rotateY(${px * 8}deg) rotateX(${-py * 8}deg) translateZ(0)`;
  };

  const handleLeave = () => {
    const el = ref.current;
    if (el) el.style.transform = "rotateY(0) rotateX(0)";
  };

  return (
    <Reveal delay={index * 0.08} y={28}>
      <div
        ref={ref}
        className={`${styles.card} ${accentClass[group.accent]}`}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        data-cursor="hover"
      >
        <header className={styles.cardHead}>
          <span className={styles.glyph}>{group.glyph}</span>
          <h3 className={styles.cardTitle}>{group.title}</h3>
        </header>
        <ul className={styles.list}>
          {group.items.map((item) => (
            <li key={item.name} className={styles.item}>
              <span className={styles.itemName}>{item.name}</span>
              <span className={styles.itemDetail}>{item.detail}</span>
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
}

export default function Skills() {
  return (
    <section id="skills" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.head}>
          <Reveal>
            <span className={styles.eyebrow}>[02] · stack</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className={styles.title}>
              The <span className={styles.titleAccent}>tools</span> I run.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className={styles.subtitle}>
              // chosen for shipping fast and keeping production calm
            </p>
          </Reveal>
        </div>

        <div className={styles.grid}>
          {skillGroups.map((group, idx) => (
            <SkillCard key={group.id} group={group} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
