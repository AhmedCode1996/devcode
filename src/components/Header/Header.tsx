import Link from "next/link";
import styles from "./header.module.css";
import Image from "next/image";
import { ICONS } from "./../../assets/index";
function Header() {
  return (
    <header className={styles.wrapper}>
      <nav>
        <ul>
          <li>
            <Link href={"/"}>
              <Image
                src={ICONS.logo}
                alt="ask developers logo"
                width={32}
                height={32}
              />
              <p>
                <span>dev</span>
                <span>code</span>
              </p>
            </Link>
          </li>
          <li>
            <Image
              src={ICONS.searchIcon}
              alt="search input icon"
              width={24}
              height={24}
            />
            <input type="text" name="global-search" id="global-search" />
          </li>
          <li>
            <p>
              <Image
                src={ICONS.darkMode}
                width={20}
                height={20}
                alt="dark mode icon"
              />
            </p>
            <p>profile</p>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
