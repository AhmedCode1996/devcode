"use client";
import React from "react";
import styles from "./SelectInput.module.css";

interface PropTypes {
  options: {
    id: number;
    name: string;
    value: string;
  }[];
  name: string;
}

function SelectInput({ options, name }: PropTypes) {
  return (
    <div className={styles.wrapper}>
      <select name={name} id={name}>
        {options.map((option) => (
          <option key={option.id} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SelectInput;
