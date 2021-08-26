import React from "react";
import styles2 from "../styles/Home.module.css";
import styles from "../styles/ImageDetail.module.css";

function ImageDetailCard(props) {
  const { data = {} } = props;
  const { links = {}, alt_description, description, location = {} } = data;
  const { city, country, name } = location;
  const { download } = links;

  return (
    <>
      <div className={styles2.card}>
        {alt_description && <h2>{alt_description}</h2>}
        {download && (
          <img
            className={styles.logo}
            src={download}
            height="auto"
            width="100%"
          />
        )}
        {description && <p>Description: {description}</p>}
        {city && <p>City: {city}</p>}
        {country && <p>Country: {country}</p>}
        {name && <p>Name: {name}</p>}
      </div>
    </>
  );
}

export default ImageDetailCard;
