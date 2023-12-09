import React from "react";
import styles from "./QuestionCard.module.css";
import { QuestionProps } from "@/constants/questions";
import { Tags } from "..";
import Image from "next/image";
import { timeAgo } from "./../../utils/utils";

function QuestionCard({
  id,
  title,
  tags,
  author: { id: authorId, name: authorName, picture: authorPicture },
  upvotes,
  views,
  answers,
  createdAt,
}: QuestionProps) {
  return (
    <div className={styles.wrapper}>
      <h2>{title}</h2>
      <Tags tags={tags} />
      <div className={styles.questionDetails}>
        <div className={styles.leftSide}>
          <Image
            src={authorPicture}
            width={20}
            height={20}
            alt="question owner avatar"
          />
          <h3 className={styles.authorTitle}>{authorName}</h3>
          <p className={styles.date}>{`asked ${timeAgo(createdAt)}`}</p>
        </div>
        <div className={styles.rightSide}>
          <p className={styles.vote}>
            <Image
              src={"/assets/questionCard/thumpup.svg"}
              width={16}
              height={16}
              alt="thumpup vote icon"
            />
            <span className=" text-blue-600">{`${upvotes} vote`}</span>
          </p>
          <p className={styles.answers}>
            <Image
              src={"/assets/questionCard/answer.svg"}
              width={16}
              height={16}
              alt="answer icon"
            />
            <span>{`${answers.length} answers`}</span>
          </p>
          <p className={styles.views}>
            <Image
              src={"/assets/questionCard/view.svg"}
              width={16}
              height={16}
              alt="view icon"
            />
            <span>{`${views} views`}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default QuestionCard;
