import { ReactNode } from "react";
import styles from "./root.module.css";

type RootProps = {
  children: ReactNode;
};

export const Root = (props: RootProps) => {
  return <div className={styles.root}>{props.children}</div>;
};
