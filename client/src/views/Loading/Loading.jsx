import React from 'react';
import loadingImage from '../../assets/loading.gif';
import style from "./Loading.module.css"

function Loading () {

  return (
    <div className={style.loading}>
      <img src={loadingImage} alt="Loading..." />
    </div>
  );
};

export default Loading;