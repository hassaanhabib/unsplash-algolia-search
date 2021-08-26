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
  const { id } = props;
  const { src } = props;
  const { title } = props;

  return (
    <div
      style={{
        height: 400,
        width: 500,
        margin: "15px 0px 25px 0",
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
            saveImageData(props, dispatch);
            router.push(`unsplash/imageDetail?imageId=${id}`);
          }}
          height="350%"
          width={450}
        />
      </LazyLoad>
    </div>
  );
}

export default ImageCard;
