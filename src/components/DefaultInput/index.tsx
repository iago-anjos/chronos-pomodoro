import styles from "./styles.module.css";

type inputProps = {
  id: string;
  labelText?: string;
} & React.ComponentProps<"input">;

export function DefaultInput({ type, id, labelText, ...props }: inputProps) {
  return (
    <>
      {labelText && <label htmlFor={id}>{labelText}</label>}
      <input id={id} type={type} {...props} className={styles.input} />
    </>
  );
}
