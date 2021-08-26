import React, { useEffect, useState } from "react";
import router, { useRouter } from "next/router";
import Navigation from "../../components/Navigation";
import styles from "../../styles/ImageDetail.module.css";
import { searchSpecificImage } from "../../api/UnsplashImageDetail";
import styles2 from "../../styles/Home.module.css";
import ImageDetailCard from "../../components/ImageDetailCard";
import { useDispatch, useSelector } from "react-redux";

function ImageDetail() {
  const content = useSelector((state) => state);
  const { imageDetailData = [] } = content;
  const { loading, error, data } = imageDetailData;
  const router = useRouter();
  const { imageId } = router.query;
  const [imageDetailFromAPI, setImageDetailFromAPI] = useState();

  useEffect(() => {
    if (!imageId) {
      return;
    }
    async function fetchMyAPI() {
      try {
        let response = await searchSpecificImage(imageId);
        setImageDetailFromAPI(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchMyAPI();
  }, [imageId]);

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

      {/* src={data.src}
          alt_description={data.title}
          description={imageDetailFromAPI.description}
          city={imageDetailFromAPI.location.city}
          country={imageDetailFromAPI.location.country}
          locationName={imageDetailFromAPI.location.name} */}
      {!!imageDetailFromAPI ? (
        <ImageDetailCard
          src={imageDetailFromAPI.links.download}
          alt_description={imageDetailFromAPI.alt_description}
          description={imageDetailFromAPI.description}
          city={imageDetailFromAPI.location.city}
          country={imageDetailFromAPI.location.country}
          locationName={imageDetailFromAPI.location.name}
        />
      ) : !!data ? (
        <ImageDetailCard
          src={data.src}
          alt_description={data.title}
          description={"Fetching"}
          city={"Fetching"}
          country={"Fetching"}
          locationName={"Fetching"}
        />
      ) : (
        <ImageDetailCard
          src={"Fetching"}
          alt_description={"Fetching"}
          description={"Fetching"}
          city={"Fetching"}
          country={"Fetching"}
          locationName={"Fetching"}
        />
      )}
    </div>
  );
}

// export const getServerSideProps = async (context) => {
//   const { imageId } = context.query;
//   let response;
//   try {
//     response = await searchSpecificImage(imageId);
//   } catch (error) {
//     return {
//       props: {
//         imageData: [],
//       },
//     };
//   }
//   const { data } = response;
//   if (!data) {
//     return {
//       props: {
//         imageData: [],
//       },
//     };
//   }
//   return {
//     props: {
//       imageData: data,
//     },
//   };
// };

export default ImageDetail;
