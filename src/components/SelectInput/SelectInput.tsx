"use client";
import React from "react";
import styles from "./SelectInput.module.css";

interface PropTypes {
  options: {
    id: number;
    name: string;
    value: string;
  }[];
  searchInputName: string;
}

function SelectInput({ options, searchInputName }: PropTypes) {
  return (
    <div className={styles.wrapper}>
      <select name={searchInputName} id={searchInputName}>
        {options?.map((option) => (
          <option key={option.id} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SelectInput;
