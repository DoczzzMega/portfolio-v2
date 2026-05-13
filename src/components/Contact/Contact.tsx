"use client";

import { useTranslations } from "next-intl";
import Reveal from "../Reveal/Reveal";
import { profile } from "@/data/portfolio";
import styles from "./Contact.module.scss";

export default function Contact() {
  const t = useTranslations("Contact");
  const { contacts } = profile;
  const links = [
    {
      key: "email" as const,
      value: contacts.email,
      href: `mailto:${contacts.email}`,
    },
    {
      key: "telegram" as const,
      value: contacts.telegramHandle,
      href: contacts.telegram,
    },
    {
      key: "github" as const,
      value: contacts.githubHandle,
      href: contacts.github,
    },
  ];

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.container}>
        <Reveal>
          <div className={styles.shell}>
            <span className={styles.eyebrow}>{t("eyebrow")}</span>
            <h2 className={styles.title}>
              {t("titleLead")}
              <br />
              <span className={styles.titleAccent}>{t("titleAccent")}</span>{t("titleTrail")}
            </h2>
            <p className={styles.body}>{t("body")}</p>

            <div className={styles.actions}>
              {links.map((link) => (
                <a
                  key={link.key}
                  className={styles.linkCard}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  data-cursor="hover"
                >
                  <span className={styles.linkLabel}>// {t(`links.${link.key}`)}</span>
                  <span className={styles.linkValue}>{link.value}</span>
                </a>
              ))}
            </div>

            <div className={styles.footer}>
              <span>
                <span className={styles.dot} />
                {t("status")}
              </span>
              <span>
                {t("copyright", { year: new Date().getFullYear(), alias: profile.alias })}
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
