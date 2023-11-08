import React from "react";
import styles from "./InputTag.module.css";

function InputTag({ item }: { item: string }) {
  return <li className={styles.wrapper}>{item}</li>;
}
export default InputTag;
