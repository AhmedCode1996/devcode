import React from "react";
import styles from "./Tags.module.css";
import { Tag } from "..";

type TagObject = {
  id: number;
  name: string
}
type TagsProps = {
  tags: TagObject[]
}
function Tags({ tags }: TagsProps) {
  return (
    <div className={styles.wrapper}>
      {tags.map((tag) => (
        <Tag key={tag.id} {...tag} />
      ))}
    </div>
  );
}

export default Tags;
