import React, { useEffect, useState } from "react";
import style from "./Filters.module.css";
import { useDispatch, useSelector } from "react-redux";
import { filterByOrigin, filterByTemp, orderAlphabetic, orderWeight } from "../../redux/actions";
import { Searchbar } from "../index";


function Filters({setCurrentPage}) {
  
  const dispatch = useDispatch();
  
  const [filteredDogs, setFilteredDogs] = useState([]);
  const { allDogs, allTemperaments, dogsByTemp, dogsByOrigin } = useSelector(state => state)

  useEffect(() => {
    const filteredDogs = allDogs.filter((dog) => {
      const originMatch = dogsByOrigin === '' || dog.origen === dogsByOrigin;
      const tempMatch = dogsByTemp === '' || dog.edad === dogsByTemp;

      return originMatch && tempMatch;
    });

    setFilteredDogs(filteredDogs);
  }, [allDogs, dogsByOrigin, dogsByTemp]);


  const handleFilterByTemp = (event) => {
    const temp = event.target.value;
    dispatch(filterByTemp(temp));
    setCurrentPage(1)
  };

  const handleFilterByOrigin = (event) => {
    const origin = event.target.value;
    dispatch(filterByOrigin(origin));
    setCurrentPage(1)
  };

  const [orderAlphabeticState, setOrderAlphabeticState] = useState(false)
  // const [auxAlphabetic, setAuxAlphabetic] = useState("")

  const handleOrderAlphabetic = () => {
    dispatch(orderAlphabetic(orderAlphabeticState))
    setCurrentPage(1)
    orderAlphabeticState ? setOrderAlphabeticState(false) : setOrderAlphabeticState(true)
    // setAuxAlphabetic(`Ordenar ${order}`)
  };

  const [orderWeightState, setOrderWeightState] = useState(false)
  // const [auxAlphabetic, setAuxAlphabetic] = useState("")

  const handleOrderWeight = () => {
    dispatch(orderWeight(orderWeightState))
    setCurrentPage(1)
    orderWeightState ? setOrderWeightState(false) : setOrderWeightState(true)
    // setAuxAlphabetic(`Ordenar ${order}`)
  };

  return (
    <nav className={style.filterContainer}>

      <div className={style.filterSearch}>
        <Searchbar />
      </div>

      {/* FILTRO POR TEMPERAMENTO */}
      <div className={style.filterTemperaments}>
        <select onChange={handleFilterByTemp}>
          <option value="All">Temperaments</option>
          {allTemperaments?.map((temp) => {
            return (
              <option key={temp.id} name={temp.id} value={temp.name}>
                {temp.name}
              </option>
            );
          })}
        </select>
      </div>

      {/* FILTRO POR ORIGEN */}
      <div className={style.filterCreated}>
        <legend>Source</legend>
        <input type="radio" name="filterOrigin" value="All" onClick={event => handleFilterByOrigin(event)}/>
        <label htmlFor="All">All</label>

        <input type="radio" name="filterOrigin" value="API" onClick={handleFilterByOrigin}/>
        <label htmlFor="API">API</label>

        <input type="radio" name="filterOrigin" value="Created" onClick={handleFilterByOrigin}/>
        <label htmlFor="Creados">Yours</label>
      </div>

      {/* ORDEN */}
      <div className={style.filterOrder}>

        {/* ORDEN ALFABETICO */}
        <div className={style.filterOrderAlphabetic} onClick={handleOrderAlphabetic}>
          {orderAlphabeticState ? "A-Z" : "Z-A"}
        </div>

        {/* ORDEN POR PESO */}
        <div className={style.filterOrderWeight} onClick={handleOrderWeight}>
          {orderWeightState ? "Weight +" : "Weight -"}
        </div>

      </div>
    </nav>
  );
}

export default Filters;
