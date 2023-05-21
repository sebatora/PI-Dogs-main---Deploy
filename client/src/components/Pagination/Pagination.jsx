import React from "react";
import style from "./Pagination.module.css"
import prev from "../../assets/prev.png"
import next from "../../assets/next.png"

function Pagination({ totalDogs, dogsPerPage, currentPage, setCurrentPage }) {

  const totalPages = Math.ceil(totalDogs / dogsPerPage);

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }
  
  // Specific page - Setea el estado a la pagina que le pasamos
  const pagination = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  // Prev page
  const prevHandler = () => {
    if (currentPage > 1) pagination(currentPage - 1);
  };

  // Next page
  const nextHandler = () => {
    if (currentPage < totalPages) pagination(currentPage + 1);
  };



  return (
    <nav className={style.paginationContainer}>
      <ul className={style.ul}>

        <li className={style.li}>
          <button className={style.paginationBtnPrev} onClick={prevHandler}>
            <img src={prev} alt="Prev"/>
          </button>
        </li>

        {pageNumbers?.map((page) => (
          <li className={style.li} key={page}>
            <button className={(page === currentPage ? style.paginationBtnActive : style.paginationBtn)} onClick={() => pagination(page)}>
              {page}
            </button>
          </li>
        ))}

        <li className={style.li}>
          <button className={style.paginationBtnNext} onClick={nextHandler}>
            <img src={next} alt="Next"/>
          </button>
        </li>

      </ul>
    </nav>
  );
}

export default Pagination;
