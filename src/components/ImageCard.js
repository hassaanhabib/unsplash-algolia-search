import React from "react";
import styles from "../styles/Home.module.css";
import LazyLoad from "react-lazyload";
import router from "next/router";

function ImageCard(props) {
  const { id } = props;
  const { src } = props;
  const { title } = props;

  return (
    <div style={{ height: 400, width: 500, margin: "15px 0px 25px 0" }}>
      <LazyLoad height={400}>
        <img
          src={src}
          title={title}
          alt={title}
          onClick={() => {
            router.push(`unsplash/imageDetail?imageId=${id}`);
          }}
          height={400}
          width="auto"
          className={styles.card}
        />
      </LazyLoad>
    </div>
  );
}

export default ImageCard;
