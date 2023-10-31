import styles from "./header.module.css";
import Link from "next/link";
import Image from "next/image";
import { SignedIn, UserButton } from "@clerk/nextjs";

import { IMAGES } from "./../../constants/images";
import { SearchInput, ToggleMode } from "@/components";
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
            <SearchInput
              scope="global"
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
