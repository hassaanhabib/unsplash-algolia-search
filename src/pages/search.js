import Head from "next/head";
import Image from "next/image";
import Navigation from "../components/Navigation";
import SearchBox from "../components/SearchBox";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="page-container">
      <Navigation />
      <div className={styles.container}>
        <h2>Unsplash Algolia Search</h2>
        <SearchBox />
      </div>
    </div>
  );
}
