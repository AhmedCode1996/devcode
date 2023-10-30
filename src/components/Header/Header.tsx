import Link from "next/link";
import { ToggleMode } from "./../";
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
                <span>Wiki</span>
                <span>Dev</span>
                <span>Hub</span>
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
            <div>
              <ToggleMode />
            </div>
            <div>
              <SignedIn>
                <UserButton afterSignOutUrl="/" />
              </SignedIn>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
