import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stack Overflow Authentication",
};
const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <div>{children}</div>
);
export default RootLayout;
