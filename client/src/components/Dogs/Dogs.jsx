import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Dog, Filters, Pagination, Searchbar } from '../index';
import style from "./Dogs.module.css"


function Dogs() {

  const {allDogs} = useSelector((state) => state);

  // Paginado

  const totalDogs = allDogs.length;
  const dogsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);
  const indexLast = currentPage * dogsPerPage;
  const indexFirst = indexLast - dogsPerPage;
  const currentDogs = allDogs.slice(indexFirst, indexLast);

  return (
    <div className={style.dogsContainer}>

      <Filters
        setCurrentPage={setCurrentPage}
      />

      <div className={style.dogsCard}>
        {currentDogs.map(
          ({ id, image, name, temperaments, weight }) => {
            return (
              <Dog 
                key={id}
                id={id}
                image={image}
                name={name}
                temperaments={temperaments}
                weight={weight}
              />
            );
          }
        )}
      </div>

      <div className={style.dogsPagination}>
        <Pagination 
          totalDogs={totalDogs}
          dogsPerPage={dogsPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>

    </div>
  )
}

export default Dogs