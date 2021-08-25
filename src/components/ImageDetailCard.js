import React from "react";
import styles2 from "../styles/Home.module.css";
import styles from "../styles/ImageDetail.module.css";

function ImageDetailCard(props) {
  const { src } = props;
  const { alt_description } = props;
  const { description } = props;
  const { city } = props;
  const { country } = props;
  const { locationName } = props;
  return (
    <>
      <div className={styles2.card}>
        <h2>{alt_description}</h2>
        <img className={styles.logo} src={src} height="auto" width="100%" />
        <p>Description: {description}</p>
        <p>City: {city}</p>
        <p>Country: {country}</p>
        <p>Name: {locationName}</p>
      </div>
    </>
  );
}

export default ImageDetailCard;
