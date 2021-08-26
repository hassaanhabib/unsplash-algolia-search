import React from "react";
import styles from "../styles/Home.module.css";

import ImageCard from "./ImageCard";

function ImageGrid(props) {
  const { results } = props;
  return (
    <div className={styles.grid}>
      {results.map((image) => (
        <ImageCard
          data={image}
          key={image.id}
          id={image.id}
          src={image.links.download}
          title={image.alt_description}
        />
      ))}
    </div>
  );
}

export default ImageGrid;
