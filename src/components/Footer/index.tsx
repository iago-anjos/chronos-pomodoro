import type React from "react";
import styles from "./styles.module.css";

type footerProps = {
  children: React.ReactNode;
};

export function Footer({ children }: footerProps) {
  return <footer className={styles.footer}>{children}</footer>;
}
