import { HomePageFilters } from "@/constants/filterData";
import styles from "./page.module.css";
import { HomeTags, MainContentHeading, SearchInput, SelectInput } from "@/components";

export default function Home() {
  return (
    <main className={styles.wrapper}>
      <MainContentHeading
        title="all questions"
        href="ask-question"
        hrefTitle="Ask a Question"
      />
      <SearchInput scope="local" placeholder="search questions..." />
      <SelectInput options={HomePageFilters} name="ask-question" />
      <HomeTags options={HomePageFilters} />
    </main>
  );
}
