import styles from "./page.module.css";
import { MainContentHeading } from "@/components";

export default function Home() {
  return (
    <main className={styles.wrapper}>
      <MainContentHeading
        title="all questions"
        href="ask-question"
        hrefTitle="Ask a Question"
      />
    </main>
  );
}
