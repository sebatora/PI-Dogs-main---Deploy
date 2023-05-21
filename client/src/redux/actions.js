import { CLEAN_DETAIL, FILTER_DOGS_BY_ORIGIN, FILTER_TEMPERAMENTS, GET_DOGS, GET_DOG_BY_ID, GET_DOG_BY_NAME, GET_TEMPERAMENTS, ORDER_ALPHABETIC, ORDER_WEIGHT, POST_DOG } from "./action-type";
import axios from "axios";
const endpoint = "http://localhost:3001";


// Trae todos los perros
export const getDogs = () => {  
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`${endpoint}/dogs`)
      return dispatch({ type: GET_DOGS, payload: data });
    }
    catch (error) {
      return error.message;
    }
  };
};

// Trae los perros por ID
export const getDogById = (id) => {  
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`${endpoint}/dogs/${id}`)
      return dispatch({ type: GET_DOG_BY_ID, payload: data });
    }
    catch (error) {
      return error.message;
    }
  };
};

// Trae los perros por nombre
export const getDogByName = (name) => {  
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`${endpoint}/dogs?name=${name}`)
      return dispatch({ type: GET_DOG_BY_NAME, payload: data });
    }
    catch (error) {
      return error.message;
    }
  };
};

// Limpia el estado
export const cleanDetail = () => {  
  return {type: CLEAN_DETAIL}
};

// Trae los temperamentos
export const getTemperaments = () => {  
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`${endpoint}/temperaments`)
      return dispatch({ type: GET_TEMPERAMENTS, payload: data });
    }
    catch (error) {
      return error.message;
    }
  };
};

// Crea un nuevo perro
export const postDog = (newDog) => {  
  return async (dispatch) => {
    try {
      const { data } = await axios.post(`${endpoint}/dogs`, newDog)
      return dispatch({ type: POST_DOG, payload: data });
    }
    catch (error) {
      return error.message;
    }
  };
};

// Filtra por temperamento
export const filterByTemp = (temp) => {
  return { type: FILTER_TEMPERAMENTS, payload: temp };
};

// Filtra por origen
export const filterByOrigin = (origin) => {
  return { type: FILTER_DOGS_BY_ORIGIN, payload: origin };
};

// Ordena alfabeticamente
export const orderAlphabetic = (order) => {
  return { type: ORDER_ALPHABETIC, payload: order };
};

// Ordena por peso
export const orderWeight = (order) => {
  return { type: ORDER_WEIGHT, payload: order };
};
