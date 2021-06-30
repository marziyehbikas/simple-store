import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { getAllProducts } from "../action/products";
import { reducers } from './../reducer/index';

export const store = createStore(
    reducers,
    compose(applyMiddleware(thunk))
)

//initilize 
store.dispatch(getAllProducts())



// subscribe
store.subscribe(() => console.log('STORE VALUES', store.getState()))