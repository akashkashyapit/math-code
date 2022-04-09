import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Header.module.css";

export default function Header() {
  return (
    <div className={styles.header}>
      <a href="#default" className={styles.logo}>
        <Image src="/logo.png" width={200} height={35}/>
      </a>
      <div className={styles.headerRight}>
        <a href="#contact">Service</a>
        <a href="#about">Contact</a>
      </div>
    </div>
  );
}
