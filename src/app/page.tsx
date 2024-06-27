import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { Header } from "./header/Header";
import { Main } from "./main/Main";
import { Footer } from "./footer/Footer";

export default function Home() {
  return (
    <main className={styles.main}>
        <Header/>
        <Main/>
        <Footer/>
    </main>
  );
}
