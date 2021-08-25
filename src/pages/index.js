import Navigation from "../components/Navigation";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="page-container">
      <Navigation />
      <div className={styles.main}>
        <h1>NextJs Project - Unsplash Algolia Search</h1>
        <h3>Search you favourite images</h3>
      </div>
    </div>
  );
}
