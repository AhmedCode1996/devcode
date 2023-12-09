import React from "react";
import Image from "next/image";

import styles from "./SearchInput.module.css";
import { SelectInput } from "..";

function SearchInput({
  scope,
  placeholder,
  options,
  name: searchInputName
}: {
  scope: "local" | "global";
  placeholder: string;
  options: {
    id: number, name: string, value: string
  }[];
  name: string;
}) {
  return (
    <div className={styles.wrapper}>
      <Image
        src={"/assets/icons/search.svg"}
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
      <SelectInput options={options} searchInputName={searchInputName} />
    </div>
  );
}

export default SearchInput;
