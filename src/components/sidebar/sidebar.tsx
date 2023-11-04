"use client";
import { useId, useState } from "react";
import { motion } from "framer-motion";
import styles from "./Sidebar.module.css";

import Image from "next/image";
import Link from "next/link";

import { SIDEBAR_DATA } from "../../constants/sidebar";

function Sidebar() {
  const [navBackDrop, setNavBackDrop] = useState(0);
  const layoutId = useId();
  return (
    <aside className={styles.wrapper}>
      <ul onMouseLeave={() => setNavBackDrop(1)}>
        {SIDEBAR_DATA.map((item) => (
          <motion.li
            onMouseEnter={() => setNavBackDrop(item.id)}
            key={item.id}
            style={{ zIndex: navBackDrop === item.id ? 1 : 2 }}
            layout
          >
            {navBackDrop === item.id && (
              <motion.div
                // whileHover={{ rotate: 2 }}
                // animate={{ rotateX: 180 }}
                initial={{ borderRadius: 16 }}
                className={styles.backdrop}
                transition={{
                  type: "spring",
                  stiffness: 60,
                  damping: 10,
                }}
                layoutId={layoutId}
              />
            )}
            <Image
              src={item.lightIcon}
              width={25}
              height={25}
              alt={`${item.title} icon`}
            />
            <Link href="#">{item.title}</Link>
          </motion.li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;
