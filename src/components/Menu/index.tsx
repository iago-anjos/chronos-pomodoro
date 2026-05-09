import {
  HistoryIcon,
  HouseIcon,
  MoonIcon,
  SettingsIcon,
  SunIcon,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";

type availableThemes = "dark" | "light";

export function Menu() {
  const [theme, setTheme] = useState<availableThemes>(() => {
    const storageTheme = localStorage.getItem(
      "theme",
    ) as availableThemes | null;
    return storageTheme ?? "dark";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  function handleThemeChange(event: React.MouseEvent) {
    event.preventDefault();

    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  }

  const nextThemeIcon = {
    dark: <SunIcon />,
    light: <MoonIcon />,
  };
  // const nextThemeIcon = theme === "dark" ? <SunIcon /> : <MoonIcon />;
  const nextThemeLabel =
    theme === "dark" ? "Mudar para tema claro" : "Mudar para tema escuro";

  return (
    <nav className={styles.menu}>
      <a
        href="#"
        className={styles.menuLink}
        aria-label="Ir para Home"
        title="Ir para Home"
      >
        <HouseIcon />
      </a>
      <a
        href="#"
        className={styles.menuLink}
        aria-label="Ver Histórico"
        title="Ver Histórico"
      >
        <HistoryIcon />
      </a>
      <a
        href="#"
        className={styles.menuLink}
        aria-label="Configurações"
        title="Configurações"
      >
        <SettingsIcon />
      </a>
      <a
        href="#"
        className={styles.menuLink}
        aria-label={nextThemeLabel}
        title={nextThemeLabel}
        onClick={handleThemeChange}
      >
        {nextThemeIcon[theme]}
      </a>
    </nav>
  );
}
