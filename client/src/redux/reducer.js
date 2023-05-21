import { parseWeight } from "../utils/parseWeight";
import { CLEAN_DETAIL, FILTER_DOGS_BY_ORIGIN, FILTER_TEMPERAMENTS, GET_DOGS, GET_DOG_BY_ID, GET_DOG_BY_NAME, GET_TEMPERAMENTS, ORDER_ALPHABETIC, ORDER_WEIGHT, POST_DOG } from "./action-type";

const initialState = {
  allDogs: [], 
  allDogsFilter: [], // ES LA COPIA PARA PODER ORDENAR O FILTRAR
  dogById: {},
  dogsByTemp: [],
  dogsByOrigin: [],
  allTemperaments: [],
};

const rootReducer = (state = initialState, {type, payload}) => {

  switch(type){

    case GET_DOGS: {

      return {
        ...state,
        allDogs: payload,
        allDogsFilter: payload
      };
    };

    case GET_DOG_BY_NAME: {
      return {
        ...state,
        allDogs: payload,
      };
    };

    case GET_DOG_BY_ID: {
      return {
        ...state,
        dogById: payload,
      };
    };

    case CLEAN_DETAIL: {
      return {
        ...state,
        dogById: {},
      };
    };

    case GET_TEMPERAMENTS: {
      return {
        ...state,
        allTemperaments: payload,
      };
    };

    case POST_DOG: {
      return {
        ...state,
      };
    };

    case FILTER_TEMPERAMENTS: {
      const allDogsTemp = state.allDogsFilter;
      const filterByTemp = payload === "All"
      ? allDogsTemp
      : allDogsTemp.filter(dog => dog.temperaments.find (temp => temp === payload))

      return {
        ...state,
        allDogs: filterByTemp,
      };
    };

    case FILTER_DOGS_BY_ORIGIN: {
      const allDogsOrigin = state.allDogsFilter;
      const filterByOrigin = payload === "API"
      ? allDogsOrigin.filter(dog => !dog.createInDb)
      : allDogsOrigin.filter(dog => dog.createInDb)
      return {
        ...state,
        allDogs: payload === "All"
        ? allDogsOrigin
        : filterByOrigin,
      };
    };

    case ORDER_ALPHABETIC: {
      const allDogsName = state.allDogsFilter;
      const orderAlphabetic = payload === true
      ? allDogsName.sort((a,b) => {
        if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
        if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
        return 0;
        })
      : allDogsName.sort((a,b) => {
        if (a.name.toLowerCase() < b.name.toLowerCase()) return 1;
        if (a.name.toLowerCase() > b.name.toLowerCase()) return -1;
        return 0;
      })
      return {
        ...state,
        allDogs: orderAlphabetic
      };
    };

    case ORDER_WEIGHT: {
      const allDogsWeight = state.allDogsFilter;
      const orderWeight = payload === true
      ? allDogsWeight.sort((a,b) => {
        if (parseInt(a.weight) > parseInt(b.weight)) return 1;
        if (parseInt(a.weight) < parseInt(b.weight)) return -1;
        return 0;
        })
      : allDogsWeight.sort((a,b) => {
        if (parseInt(a.weight) < parseInt(b.weight)) return 1;
        if (parseInt(a.weight) > parseInt(b.weight)) return -1;
        return 0;
      })
      return {
        ...state,
        allDogs: orderWeight
      };
    };

    // case ORDER_WEIGHT: {
    //   const allDogsWeight = state.allDogsFilter;
    //   const orderWeight = payload === true
    //     ? allDogsWeight.sort((a, b) => {
    //         const weightA = parseWeight(a.weight);
    //         const weightB = parseWeight(b.weight);
    
    //         if (weightA.number === weightB.number) {
    //           return weightA.subNumber - weightB.subNumber;
    //         }
    
    //         return weightA.number - weightB.number;
    //       })
    //     : allDogsWeight.sort((a, b) => {
    //         const weightA = parseWeight(a.weight);
    //         const weightB = parseWeight(b.weight);
    
    //         if (weightA.number === weightB.number) {
    //           return weightB.subNumber - weightA.subNumber;
    //         }
    
    //         return weightB.number - weightA.number;
    //       });
    
    //   return {
    //     ...state,
    //     allDogs: orderWeight
    //   };
    // };

    default:
      return { ...state }
  }
}
export default rootReducer;