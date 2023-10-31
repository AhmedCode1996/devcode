import React from "react";
import styles from "./layout.module.css";

import { Header, RightSidebar, Sidebar } from "./../../components";
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className={styles.wrapper}>
      <Header />
      <Sidebar />
      {children}
      <RightSidebar />
    </section>
  );
};

export default Layout;
