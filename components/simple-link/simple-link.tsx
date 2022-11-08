import { ReactNode, SyntheticEvent, useState } from "react";
import styles from "./simple-link.module.css";

type SimpleLinkProps = {
  name: string;
  children: ReactNode;
};

export const SimpleLink = ({ name, children }: SimpleLinkProps) => {
  const [open, setOpen] = useState(false);
  const ToggleOn = (e: SyntheticEvent) => {
    setOpen(true);
  };
  const ToggleOff = (e: SyntheticEvent) => {
    setOpen(false);
  };
  return (
    <div
      onMouseEnter={ToggleOn}
      onMouseLeave={ToggleOff}
      className={styles.root}
    >
      <span>{name}</span>
      <div style={{ visibility: open ? "visible" : "hidden" }}>{children}</div>
    </div>
  );
};
