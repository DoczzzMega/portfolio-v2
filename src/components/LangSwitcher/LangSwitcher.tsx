"use client";

import { useEffect, useRef, useState, useTransition } from "react";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing, localeLabels, type Locale } from "@/i18n/routing";
import styles from "./LangSwitcher.module.scss";

export function LangSwitcher() {
  const [open, setOpen] = useState(false);
  const [, startTransition] = useTransition();
  const wrapperRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale() as Locale;
  const t = useTranslations("Nav");

  const handleSelect = (next: Locale) => {
    setOpen(false);
    if (next === locale) return;
    startTransition(() => {
      router.replace(pathname, { locale: next });
    });
  };

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    window.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div className={styles.wrapper} ref={wrapperRef}>
      <button
        type="button"
        className={`${styles.toggle} ${open ? styles.open : ""}`}
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={t("switchLanguage")}
        data-cursor="hover"
      >
        {localeLabels[locale].code}
        <span className={styles.arrow}>▾</span>
      </button>
      {open && (
        <ul className={styles.dropdown} role="listbox">
          {routing.locales.map((l) => (
            <li key={l}>
              <button
                type="button"
                className={`${styles.option} ${l === locale ? styles.current : ""}`}
                onClick={() => handleSelect(l)}
                role="option"
                aria-selected={l === locale}
                data-cursor="hover"
              >
                <span>{localeLabels[l].native}</span>
                <small>{localeLabels[l].code}</small>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export function LangSwitcherMobile({ onSelect }: { onSelect?: () => void }) {
  const [, startTransition] = useTransition();
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale() as Locale;

  const handleSelect = (next: Locale) => {
    if (next === locale) {
      onSelect?.();
      return;
    }
    startTransition(() => {
      router.replace(pathname, { locale: next });
    });
    onSelect?.();
  };

  return (
    <div className={styles.mobileGrid}>
      {routing.locales.map((l) => (
        <button
          key={l}
          type="button"
          className={`${styles.mobileOption} ${l === locale ? styles.current : ""}`}
          onClick={() => handleSelect(l)}
        >
          {localeLabels[l].code}
          <small>{localeLabels[l].native}</small>
        </button>
      ))}
    </div>
  );
}
