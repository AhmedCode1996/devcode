import React from "react";
import styles from "./Tag.module.css";

function Tag({ id, name }: { id: number; name: string }) {
  return <div className={styles.wrapper}>{name}</div>;
}

export default Tag;
