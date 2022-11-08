import { ReactNode } from "react";
import styles from "./submenu-group.module.css";

type SubmenuGroupProps = {
  name: string;
  children: ReactNode;
};

export const SubmenuGroup = (props: SubmenuGroupProps) => {
  return (
    <div className={styles.root} data-component="submenu-group">
      <span>{props.name}</span>
      <div>{props.children}</div>
    </div>
  );
};
