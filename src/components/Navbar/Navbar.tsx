"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { navItemKeys, navItemGlyphs, profile } from "@/data/portfolio";
import { LangSwitcher, LangSwitcherMobile } from "../LangSwitcher/LangSwitcher";
import styles from "./Navbar.module.scss";

export default function Navbar() {
  const [active, setActive] = useState<string>("home");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const t = useTranslations("Nav");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navItemKeys
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-40% 0px -45% 0px", threshold: [0, 0.25, 0.5, 1] },
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <>
      <motion.nav
        className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
      >
        <a className={styles.brand} href="#home" data-cursor="hover" onClick={closeMenu}>
          <span className={styles.dot} />
          <span className={styles.alias}>{profile.alias}</span>
          <span className={styles.brandSuffix}>::v2</span>
        </a>

        <ul className={styles.list}>
          {navItemKeys.map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`${styles.link} ${active === id ? styles.active : ""}`}
                data-cursor="hover"
              >
                <small>{navItemGlyphs[id]}</small>
                {t(id)}
              </a>
            </li>
          ))}
        </ul>

        <div className={styles.tail}>
          <div className={styles.langWrap}>
            <LangSwitcher />
          </div>
          <a
            className={styles.cta}
            href={`mailto:${profile.contacts.email}`}
            data-cursor="hover"
          >
            {t("ping")}
          </a>

          <button
            type="button"
            className={`${styles.burger} ${open ? styles.open : ""}`}
            aria-label={open ? t("menuClose") : t("menuOpen")}
            aria-expanded={open}
            onClick={() => setOpen((prev) => !prev)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            className={styles.overlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            role="dialog"
            aria-modal="true"
          >
            <div className={styles.mobileInner}>
              <ul className={styles.mobileList}>
                {navItemKeys.map((id, idx) => (
                  <motion.li
                    key={id}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <a
                      href={`#${id}`}
                      className={`${styles.mobileLink} ${
                        active === id ? styles.active : ""
                      }`}
                      onClick={closeMenu}
                    >
                      <small>{navItemGlyphs[id]}</small>
                      {t(id)}
                    </a>
                  </motion.li>
                ))}
                <motion.li
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
                >
                  <a
                    href={`mailto:${profile.contacts.email}`}
                    className={styles.mobilePing}
                    onClick={closeMenu}
                  >
                    {t("ping")}
                  </a>
                </motion.li>
              </ul>
              <LangSwitcherMobile onSelect={closeMenu} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
