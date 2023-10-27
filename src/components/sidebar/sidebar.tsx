import styles from "./sidebar.module.css";

import Image from "next/image";
import Link from "next/link";

import { SIDEBAR_DATA } from "./../../constants/sidebar";

function sidebar() {
  return (
    <aside className={styles.wrapper}>
      <ul>
        {SIDEBAR_DATA.map((item) => (
          <li key={item.id}>
            <Image
              src={item.icon}
              width={25}
              height={25}
              alt={`${item.title} icon`}
            />
            <Link href="#">{item.title}</Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default sidebar;
