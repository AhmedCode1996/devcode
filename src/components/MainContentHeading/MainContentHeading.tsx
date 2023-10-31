import Link from "next/link";
import styles from "./MainContentHeading.module.css";

function MainContentHeading({ title, href, hrefTitle }: { title: string; href?: string; hrefTitle?: string }) {
  return (
    <article className={styles.wrapper}>
      <h3>{title}</h3>
      {href && <Link href={`/${href}`}>{hrefTitle}</Link>}
    </article>
  );
}

export default MainContentHeading;
