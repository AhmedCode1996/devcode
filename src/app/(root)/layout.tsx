import React from "react";
import styles from "./layout.module.css";

import { Header, RightSidebar, Sidebar } from "./../../components";
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className={styles.wrapper}>
      <Header />
      <div className={styles.sidebarSection}>
        <Sidebar />
      </div>
      {children}
      <div className={styles.rightSidebarSection}>
        <RightSidebar />
      </div>
    </section>
  );
};

export default Layout;
