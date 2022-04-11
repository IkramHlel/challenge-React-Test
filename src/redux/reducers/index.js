import { combineReducers } from "redux";
import {searchCardsReducer} from './searchCardsReducer';

const rootReducer = combineReducers({
    cardsReducer: searchCardsReducer,
});
export default rootReducer;