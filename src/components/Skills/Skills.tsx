"use client";

import { useRef, type MouseEvent } from "react";
import { useTranslations } from "next-intl";
import Reveal from "../Reveal/Reveal";
import { skillGroupKeys, skillGroupMeta, type SkillGroupKey } from "@/data/portfolio";
import styles from "./Skills.module.scss";

const accentClass: Record<"teal" | "magenta" | "yellow", string> = {
  teal: styles.tealCard,
  magenta: styles.magentaCard,
  yellow: styles.yellowCard,
};

function SkillCard({ groupKey, index }: { groupKey: SkillGroupKey; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const t = useTranslations(`Skills.groups.${groupKey}`);
  const meta = skillGroupMeta[groupKey];

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
        className={`${styles.card} ${accentClass[meta.accent]}`}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        data-cursor="hover"
      >
        <header className={styles.cardHead}>
          <span className={styles.glyph}>{meta.glyph}</span>
          <h3 className={styles.cardTitle}>{t("title")}</h3>
        </header>
        <ul className={styles.list}>
          {meta.itemKeys.map((itemKey) => (
            <li key={itemKey} className={styles.item}>
              <span className={styles.itemName}>{t(`items.${itemKey}.name`)}</span>
              <span className={styles.itemDetail}>{t(`items.${itemKey}.detail`)}</span>
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
}

export default function Skills() {
  const t = useTranslations("Skills");

  return (
    <section id="skills" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.head}>
          <Reveal>
            <span className={styles.eyebrow}>{t("eyebrow")}</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className={styles.title}>
              {t("titleLead")} <span className={styles.titleAccent}>{t("titleAccent")}</span> {t("titleTrail")}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className={styles.subtitle}>{t("subtitle")}</p>
          </Reveal>
        </div>

        <div className={styles.grid}>
          {skillGroupKeys.map((groupKey, idx) => (
            <SkillCard key={groupKey} groupKey={groupKey} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
