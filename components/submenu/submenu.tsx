import React, { ReactNode } from "react";
import styles from "./submenu.module.css";

type SubmenuProps = {
  children: ReactNode;
};

export const Submenu = (props: SubmenuProps) => {
  console.log(props);
  return (
    <section className={styles.root} data-component="submenu">
      {props.children}
    </section>
  );
};
