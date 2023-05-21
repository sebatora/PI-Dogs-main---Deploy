import React from "react";
import { Link } from "react-router-dom";
import style from "./Dog.module.css"

function Dog({ id, image, name, temperaments, weight }) {
  return (
    <div className={style.dogContainer}>
      <Link to={`/detail/${id}`} className={style.dogLink}>
        <div className={style.dogName}>
          <h2>{name}</h2>
        </div>

          <img src={image} alt={name} />

        <div className={style.dogDetail}>
          <h4>Peso | {weight} kg</h4>
          <h4>Temperamentos</h4>
          <div className={style.dogTemperaments}>
            {
              temperaments?.map(temp => {
                return <div key={temp}>{temp}</div>
              })
            }
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Dog;
