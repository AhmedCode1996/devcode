import styles from "./page.module.css";
import { HomePageFilters } from "@/constants/filterData";
import { HomeQuestions, HomeTags, MainContentHeading, SearchInput } from "@/components";
export default function Home() {
  return (
    <main className={styles.wrapper}>
      <MainContentHeading
        title="all questions"
        href="ask-question"
        hrefTitle="Ask a Question"
      />
      <SearchInput options={HomePageFilters} name="ask-question" scope="local" placeholder="search questions..." />
      {/* <SelectInput options={HomePageFilters} name="ask-question" /> */}
      <HomeTags options={HomePageFilters} />
      <HomeQuestions />
    </main>
  );
}
