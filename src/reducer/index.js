import { combineReducers } from "redux";
import { productsReducer } from './products';
import { cartReducer, cechoutReducer } from './cart';
import { userReducer } from './user';

export const reducers = combineReducers({
    products: productsReducer,
    cart: cartReducer,
    checkout: cechoutReducer,
    user: userReducer
})