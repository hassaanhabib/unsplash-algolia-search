import React from "react";
import router from "next/router";
import Navigation from "../../components/Navigation";
import styles from "../../styles/ImageDetail.module.css";
import { searchSpecificImage } from "../../api/UnsplashImageDetail";
import styles2 from "../../styles/Home.module.css";
import ImageDetailCard from "../../components/ImageDetailCard";

function ImageDetail(response) {
  console.log(response);
  const { imageData } = response;

  return (
    <div className={styles2.container}>
      <Navigation />
      <div
        className={styles.goBack}
        onClick={() => {
          router.back();
        }}
      >
        Go Back
      </div>
      <ImageDetailCard
        src={imageData.links.download}
        alt_description={imageData.alt_description}
        description={imageData.description}
        city={imageData.location.city}
        country={imageData.location.country}
        locationName={imageData.location.name}
      />
    </div>
  );
}

export const getServerSideProps = async (context) => {
  const { imageId } = context.query;
  let response;
  try {
    response = await searchSpecificImage(imageId);
  } catch (error) {
    return {
      props: {
        imageData: [],
      },
    };
  }
  const { data } = response;
  if (!data) {
    return {
      props: {
        imageData: [],
      },
    };
  }
  return {
    props: {
      imageData: data,
    },
  };
};

export default ImageDetail;
