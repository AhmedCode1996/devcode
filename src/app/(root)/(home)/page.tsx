import styles from "./page.module.css";
import { HomePageFilters } from "@/constants/filterData";
import {
  HomeQuestions,
  HomeTags,
  MainContentHeading,
  SearchInput,
} from "@/components";
export default function Home() {
  return (
    <main className={`${styles.wrapper} bg-slate-950`}>
      <MainContentHeading
        title="all questions"
        href="ask-question"
        hrefTitle="Ask a Question"
      />
      <SearchInput
        options={HomePageFilters}
        name="ask-question"
        scope="local"
        placeholder="search questions..."
      />
      <HomeTags options={HomePageFilters} />
      <HomeQuestions />
    </main>
  );
}
