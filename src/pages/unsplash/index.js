import React from "react";
import Navigation from "../../components/Navigation";
import styles from "../../styles/Home.module.css";
import SearchBox from "../../components/SearchBox";
import { searchImages } from "../../api/Unsplash";
import ImageGrid from "../../components/ImageGrid";
import Pagination from "../../components/Pagination";

function UnsplashSearchHome({ pageNumber, imageData, keywords, totalPages }) {
  console.log(imageData);
  const { results = [] } = imageData;
  return (
    <div>
      <Navigation />
      <div className={styles.container}>
        <h2>Unsplash Algolia Search</h2>
        <SearchBox keywords={keywords} />
        <ImageGrid results={results} />
        <Pagination
          pageNumber={pageNumber}
          keywords={keywords}
          totalPages={totalPages}
        />
      </div>
    </div>
  );
}

export const getServerSideProps = async (context) => {
  const { page } = context.query;
  const { keywords } = context.query;
  const response = await searchImages(keywords, page);
  const { data } = response;
  const { total_pages } = data;
  if (!page || page < 1 || page > total_pages) {
    return {
      props: {
        pageNumber: 1,
        imageData: [],
        keywords: keywords,
        totalPages: total_pages,
      },
    };
  }
  return {
    props: {
      pageNumber: Number.parseInt(page),
      imageData: data,
      keywords: keywords,
      totalPages: total_pages,
    },
  };
};

export default UnsplashSearchHome;
