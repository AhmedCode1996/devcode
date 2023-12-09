"use client";
import React from "react";
import styles from "./HomeTags.module.css";

type PropTypes = {
  options: {
    id: number;
    name: string;
    value: string;
  }[];
};

function HomeTags({ options }: PropTypes) {
  const [active, setActive] = React.useState("");

  const activeClickHandler = (value: string) => {
    setActive(value);
  };
  return (
    <div className={styles.wrapper}>
      {options.map((option) => (
        <button
          key={option.id}
          onClick={() => activeClickHandler(option.value)}
          className={`btn ${active === option.value ? "btn-active" : ""}`}
        >
          {option.name}
        </button>
      ))}
    </div>
  );
}

export default HomeTags;
