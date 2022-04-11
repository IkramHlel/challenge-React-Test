import { GET_CARDS,GET_POSSIBLE_AMOUNTS } from "../actions/types";

const initialState = {
    cards : [],
    possibleAmounts : [],
}

export const searchCardsReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_CARDS:
            return {...state,
            cards: action.payload
            }
        case GET_POSSIBLE_AMOUNTS:
            return {...state,
            possibleAmounts: action.payload}
        default: 
            return state;
    }
}