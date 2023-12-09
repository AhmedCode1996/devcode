"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./RightSidebar.module.css";
import { motion } from "framer-motion";
import { RIGHT_SIDEBAR_DATA } from "./../../constants/rightSidebar";
import { IMAGES } from "@/constants/images";

function RightSidebar() {
  const [navBackDrop, setNavBackDrop] = React.useState(false);
  const layoutId = React.useId();
  return (
    <aside className={styles.wrapper}>
      <h3>top questions</h3>
      <ul onMouseLeave={() => setNavBackDrop(1)}>
        {RIGHT_SIDEBAR_DATA.map((item) => (
          <motion.li
            onMouseEnter={() => setNavBackDrop(item.id)}
            key={item.id}
            style={{ zIndex: navBackDrop === item.id ? 1 : 2 }}
            layout
          >
            <Link href="#">
              {navBackDrop === item.id && (
                <motion.span
                  className={styles.backdrop}
                  initial={{ borderRadius: 16 }}
                  transition={{ type: "spring", stiffness: 60, damping: 10 }}
                  layoutId={layoutId}
                />
              )}
              <p>
                {item.title}
              </p>
              <Image
                src={"/assets/icons/chevron-right.svg"}
                width={25}
                height={25}
                alt={`${item.title} icon`}
              />
            </Link>
          </motion.li>
        ))}
      </ul>
    </aside>
  );
}

export default RightSidebar;
