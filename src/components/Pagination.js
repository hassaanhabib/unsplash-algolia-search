import React from "react";
import styles2 from "../styles/Unsplash.module.css";
import router from "next/router";

function Pagination(props) {
  const { pageNumber } = props;
  const { keywords } = props;
  const { totalPages } = props;
  return (
    <>
      <div className={styles2.paginator}>
        <div
          onClick={() => {
            if (pageNumber > 1) {
              router
                .push(`/unsplash?keywords=${keywords}&page=${pageNumber - 1}`)
                .then(() => window.scrollTo(0, 0));
            }
          }}
          className={pageNumber === 1 ? styles2.disabled : styles2.active}
        >
          Previous Page
        </div>
        <div>#{pageNumber}</div>
        <div
          onClick={() => {
            if (pageNumber < totalPages) {
              router
                .push(`/unsplash?keywords=${keywords}&page=${pageNumber + 1}`)
                .then(() => window.scrollTo(0, 0));
            }
          }}
          className={
            pageNumber === totalPages ? styles2.disabled : styles2.active
          }
        >
          Next Page
        </div>
      </div>
    </>
  );
}

export default Pagination;
