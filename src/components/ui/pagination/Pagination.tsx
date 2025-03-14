import React, { FC } from "react";
import styles from "./Pagination.module.css";
type Props={
    currentPage:number
    totalPages:number
    onPageChange:(val:number)=>void
}

const Pagination:FC<Props> = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className={styles.paginationContainer}>
      <button
        className={styles.button}
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Prev
      </button>

      {[...Array(totalPages)].map((_, index) => (
        <button
          key={index + 1}
          className={`${styles.button} ${currentPage === index + 1 ? styles.active : ""}`}
          onClick={() => onPageChange(index + 1)}
        >
          {index + 1}
        </button>
      ))}

      <button
        className={styles.button}
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
