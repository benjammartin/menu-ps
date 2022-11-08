import { ReactNode, SyntheticEvent, useState } from "react";
import styles from "./underline-link.module.css";

type UnderlineLinkProps = {
  name: string;
  children: ReactNode;
};

export const UnderlineLink = ({ name, children }: UnderlineLinkProps) => {
  const [open, setOpen] = useState(false);
  const ToggleOn = (e: SyntheticEvent) => {
    setOpen(true);
  };
  const ToggleOff = (e: SyntheticEvent) => {
    setOpen(false);
  };
  return (
    <div className={styles.root}>
      <span>{name}</span>
      <div>{children}</div>
    </div>
  );
};
