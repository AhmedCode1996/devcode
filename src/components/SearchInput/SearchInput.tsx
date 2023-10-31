import React from "react";
import { IMAGES } from "@/constants/images";
import Image from "next/image";

import styles from "./SearchInput.module.css";

function SearchInput({
  scope,
  placeholder,
}: {
  scope: "local" | "global";
  placeholder: string;
}) {
  return (
    <div className={styles.wrapper}>
      <Image
        src={IMAGES.searchInput}
        alt="search input icon"
        width={24}
        height={24}
      />
      <input
        type="text"
        name={`${scope}-search`}
        id={`${scope}-search`}
        placeholder={placeholder}
      />
    </div>
  );
}

export default SearchInput;
