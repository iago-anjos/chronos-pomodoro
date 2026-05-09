import type React from "react";
import styles from "./styles.module.css";

type MainFormProps = {
  children: React.ReactNode;
};

export function MainForm({ children }: MainFormProps) {
  return (
    <form className={styles.form} action="">
      <div className={styles.formRow}>{children}</div>
    </form>
  );
}
