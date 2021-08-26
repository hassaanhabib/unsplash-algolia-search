import React, { useState } from "react";
import styles from "../styles/Home.module.css";
import LazyLoad from "react-lazyload";
import router from "next/router";
import { saveImageData } from "../actions/UnsplashImageDetailAction";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";

import ContentLoader from "react-content-loader";

const myLoader = ({ src, width, quality }) => {
  return `https://unsplash.com/photos/hkWB8PN_8MU/download`;
};

function ImageCard(props) {
  const dispatch = useDispatch();
  const { id, data, src, title } = props;
  const { links, description } = data;

  return (
    <div
      style={{
        height: 400,
        width: 500,
        margin: "15px 10px 25px 10px",
        cursor: "pointer",
      }}
      className={styles.card}
    >
      <LazyLoad height={400}>
        <Image
          loader={() => src}
          blurDataURL={"07-loader.gif"}
          placeholder="blur"
          src={src}
          title={title}
          alt={title}
          onClick={() => {
            saveImageData(data, dispatch);
            router.push(`unsplash/imageDetail?imageId=${id}`);
          }}
          height="400"
          width="500"
        />
      </LazyLoad>
    </div>
  );
}

export default ImageCard;
