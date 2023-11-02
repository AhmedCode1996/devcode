import React from "react";

import { QUESTIONS } from "@/constants/questions";
import styles from "./HomeQuestions.module.css";
import { QuestionCard } from "..";

function HomeQuestions() {
  return (
    <div className={styles.wrapper}>
      {QUESTIONS.map((question) => (
        <QuestionCard key={question.id} {...question} />
      ))}
    </div>
  );
}

export default HomeQuestions;
