import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cleanDetail, getDogById } from "../../redux/actions";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { Loading } from "../index";
import style from "./Detail.module.css"

function Detail() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { image, name, height, weight, temperaments, life_span } = useSelector(state => state.dogById);

  useEffect(() => {
    dispatch(getDogById(id));

    return () => dispatch(cleanDetail())

  }, [id]);

  const adaptStringEnd = (data) => {
    return data.replace(/\s+[A-Za-z]+$/, '');
  }

  return (
    <div>
      {name ? (
        <div className={style.detailContainer}>

              <h2>{name}</h2>
          <div className={style.detailImage}>
            <img src={image} alt={name} />
          </div>

          <div className={style.detailData}>
            <div className={style.detailDataText}>
              <h2>Height</h2>
              <h3>{adaptStringEnd(height)} cm</h3>
              <h2>Weight</h2>
              <h3>{adaptStringEnd(weight)} kg</h3>
              <h2>Life Span</h2>
              <h3>{adaptStringEnd(life_span)} years</h3>
            </div>

            <div className={style.detailDataTemp}>
              <h2>Temperaments</h2>
              {
                  temperaments?.map(temp => {
                    return <h3 key={temp}>{temp}</h3>
                  })
              }
            </div>

          </div>

        </div> )
      : ( <Loading /> )}
    </div>
  );
}

export default Detail;
