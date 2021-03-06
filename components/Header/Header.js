import Link from "next/link";

import Button from "../Button";
import Logo from "./Logo";

import styles from "./Header.module.css";

const Header = ({
  items = [
    ["/episoden", "Alle Episoden"],
    ["/unterstuetzen", "Unterstützen"],
  ],
}) => (
  <header className={styles.header}>
    <nav className={styles.inner}>
      <Link href={items[0][0]}>
        <a className={styles.item}>{items[0][1]}</a>
      </Link>

      <Link href="/">
        <a>
          <Logo />
        </a>
      </Link>

      <Button href={items[1][0]}>{items[1][1]}</Button>
    </nav>
  </header>
);

export default Header;
