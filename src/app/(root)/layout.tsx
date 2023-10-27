import React from "react";
import styles from "./layout.module.css";

import { Header, Sidebar } from "./../../components";
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className={styles.wrapper}>
      <Header />
      <Sidebar />
      {children}
      <div>Rest of content</div>
    </section>
  );
};

export default Layout;
