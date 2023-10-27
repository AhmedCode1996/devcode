import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stack Overflow Authentication",
};
const Layout = ({ children }: { children: React.ReactNode }) => (
  <div>{children}</div>
);
export default Layout;
