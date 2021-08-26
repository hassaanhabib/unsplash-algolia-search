import React, { useEffect, useState } from "react";
import router, { useRouter } from "next/router";
import Navigation from "../../components/Navigation";
import styles from "../../styles/ImageDetail.module.css";
import { searchSpecificImage } from "../../api/UnsplashImageDetail";
import styles2 from "../../styles/Home.module.css";
import ImageDetailCard from "../../components/ImageDetailCard";
import { useDispatch, useSelector } from "react-redux";

const isDataComplete = (data) => {
  const { links, alt_description, description, location } = data;
  return !!links && !!alt_description && !!description && !!location;
};

function ImageDetail(props) {
  const { imageData: imgData } = props;

  const content = useSelector((state) => state);
  const { imageDetailData } = content;
  const { data: rData } = imageDetailData;

  const router = useRouter();
  const { imageId } = router.query;

  const [loading, setLoadingState] = useState(
    !(imgData || isDataComplete(rData || {}))
  );
  const [imageDetailFromAPI, setImageDetailFromAPI] = useState(
    !!imgData ? imgData : !!rData ? rData : undefined
  );

  useEffect(() => {
    async function fetchMyAPI() {
      try {
        let response = await searchSpecificImage(imageId);
        setImageDetailFromAPI(response.data);
        setLoadingState(false);
      } catch (error) {
        console.log(error);
      }
    }
    if (!imageId && loading) {
      return;
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
      <ImageDetailCard loading={loading} data={imageDetailFromAPI} />
    </div>
  );
}

export const getServerSideProps = async (context) => {
  const isServerReq = (req) => !req.url.startsWith("/_next");

  if (!isServerReq(context.req)) {
    return {
      props: {},
    };
  }
  const { imageId } = context.query;
  let response;
  try {
    response = await searchSpecificImage(imageId);
  } catch (error) {
    return {
      props: {},
    };
  }
  const { data } = response;
  if (!data) {
    return {
      props: {},
    };
  }
  return {
    props: {
      imageData: data,
    },
  };
};

export default ImageDetail;
