"use client";

import Reveal from "../Reveal/Reveal";
import { profile } from "@/data/portfolio";
import styles from "./Contact.module.scss";

export default function Contact() {
  const { contacts } = profile;
  const links = [
    {
      label: "email",
      value: contacts.email,
      href: `mailto:${contacts.email}`,
    },
    {
      label: "telegram",
      value: contacts.telegramHandle,
      href: contacts.telegram,
    },
    {
      label: "github",
      value: contacts.githubHandle,
      href: contacts.github,
    },
  ];

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.container}>
        <Reveal>
          <div className={styles.shell}>
            <span className={styles.eyebrow}>[04] · contact</span>
            <h2 className={styles.title}>
              Let&apos;s build something
              <br />
              <span className={styles.titleAccent}>that lasts</span>.
            </h2>
            <p className={styles.body}>
              Open to fullstack work, AI integrations, and high-craft
              landing pages. Drop a line — I usually reply within a day.
            </p>

            <div className={styles.actions}>
              {links.map((link) => (
                <a
                  key={link.label}
                  className={styles.linkCard}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  data-cursor="hover"
                >
                  <span className={styles.linkLabel}>// {link.label}</span>
                  <span className={styles.linkValue}>{link.value}</span>
                </a>
              ))}
            </div>

            <div className={styles.footer}>
              <span>
                <span className={styles.dot} />
                status: online · accepting transmissions
              </span>
              <span>© {new Date().getFullYear()} {profile.alias}</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
