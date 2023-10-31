"use client";
import React from "react";
import { motion } from "framer-motion";
import styles from "./ToggleMode.module.css";

function ToggleMode() {
  const [value, setValue] = React.useState(false);
  return (
    <div
      onClick={() => setValue(!value)}
      style={{ justifyContent: value ? "flex-end" : "flex-start" }}
      className={styles.wrapper}
    >
      <motion.div
        initial={false}
        transition={{
          type: "spring",
          stiffness: 250,
          damping: 15,
        }}
        layout={true}
        className={styles.child}
        style={{
          backgroundImage: `url(/assets/mode/${value ? "sun" : "moon"}.png)`,
        }}
      />
    </div>
  );
}

export default ToggleMode;
