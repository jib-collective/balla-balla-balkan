import cn from "classnames";
import Link from "next/link";

import Stack from "../Stack";

import { usePlayer } from "../../store/player";

import styles from "./Footer.module.css";

const Footer = ({ marginTop = true, items = [] }) => {
  const { episode } = usePlayer();

  return (
    <footer
      className={cn(
        styles.footer,
        { [styles.withMarginTop]: marginTop },
        { [styles.withPlayer]: Object.keys(episode).length !== 0 }
      )}
    >
      <Stack tagName="nav" direction="horizontal" className={styles.nav}>
        {items.map(([href, label]) => (
          <Link href={href}>
            <a className={styles.item}>{label}</a>
          </Link>
        ))}
      </Stack>
    </footer>
  );
};

export default Footer;
