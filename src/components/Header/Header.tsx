import Link from "next/link";
import styles from "./header.module.css";
import Image from "next/image";
import { IMAGES } from "./../../constants/images";
import { SignedIn, UserButton } from "@clerk/nextjs";
function Header() {
  return (
    <header className={styles.wrapper}>
      <nav>
        <ul>
          <li className={styles.globalLogo}>
            <Link href={"/"}>
              <Image
                src={IMAGES.logo}
                alt="ask developers logo"
                width={32}
                height={32}
              />
              <p>
                <span>wiki</span>
                <span>dev</span>
                <span>hub</span>
              </p>
            </Link>
          </li>
          <li>
            <Image
              src={IMAGES.searchInput}
              alt="search input icon"
              width={24}
              height={24}
            />
            <input
              type="text"
              name="global-search"
              id="global-search"
              placeholder="Search anything globally"
            />
          </li>
          <li>
            <p>
              <Image
                src="/../../assets/darkMode.svg"
                width={20}
                height={20}
                alt="dark mode icon"
              />
            </p>
            <p>
              <SignedIn>
                <UserButton afterSignOutUrl="/" />
              </SignedIn>
            </p>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
