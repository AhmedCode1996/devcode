"use client";
import React from "react";
import styles from "./HomeTags.module.css";

interface PropTypes {
  options: {
    id: number;
    name: string;
    value: string;
  }[];
}

function HomeTags({ options }: PropTypes) {
  const [active, setActive] = React.useState("");

  const clickHandler = (value: string) => {
    setActive(value);
  };
  return (
    <div className={styles.wrapper}>
      {options.map((option) => (
        <button
          className={active === option.value ? styles.active : styles.nonActive}
          key={option.id}
          onClick={() => clickHandler(option.value)}
        >
          {option.name}
        </button>
      ))}
    </div>
  );
}

export default HomeTags;
