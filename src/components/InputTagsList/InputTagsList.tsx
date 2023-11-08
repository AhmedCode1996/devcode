import React from "react";
import { InputTag } from "..";
import styles from './InputTagsList.module.css'

function InputTagsList({ data }: { data: string[] }) {
  return (
    <ul className={styles.wrapper}>
      {data.map((item, index) => (
        <InputTag key={index} item={item} />
      ))}
    </ul>
  );
}

export default InputTagsList;
