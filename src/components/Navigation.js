import React from "react";
import { useRouter } from "next/router";
import styles from "../styles/Navigation.module.css";

function Navigation() {
  const router = useRouter();
  return (
    <div className={styles.main}>
      <div onClick={() => router.push("/")}>Home</div>
      <div onClick={() => router.push("/search")}>Unsplash Algolia Search</div>
      <div
        onClick={() =>
          (window.location.href =
            "https://www.linkedin.com/in/hassaan-habib-a5000720a/")
        }
      >
        Linked In
      </div>
    </div>
  );
}
export default Navigation;
