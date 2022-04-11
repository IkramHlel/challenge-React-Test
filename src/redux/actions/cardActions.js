import { GET_CARDS, GET_POSSIBLE_AMOUNTS } from './types';
import axios from 'axios';

export const getCards = (shopId, amount) => {
    const token = 'tokenTest123';
    return async (dispatch,getState) => {
      await axios.get(`http://localhost:3000/shop/${shopId}/search-combination`,
        {headers: {
          Authorization: `${token}`,
          'Content-Type': 'application/json',
        },
        params: {
          amount: amount
        }
        })
        .then(response => {
          let responseData = response.data;
          dispatch({ type: GET_CARDS, payload: responseData });
          if (responseData.equal === undefined){
            let possibleAmounts = [];
            if(responseData.ceil !== undefined) 
              possibleAmounts.push({label: 'ceil', value: responseData.ceil.value});
            if(responseData.floor !== undefined) 
              possibleAmounts.push({label: 'floor', value: responseData.floor.value});
            dispatch({ type: GET_POSSIBLE_AMOUNTS, payload: possibleAmounts });
          }
        })
        .catch(error => {
          console.log('-----ERROR WHILE GETTING CARDS-----', error);
        });
    };
  };