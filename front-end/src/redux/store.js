
import { legacy_createStore } from 'redux'
import { appReducer } from './reducer'




export const store = legacy_createStore(appReducer);


console.log(store.getState());

store.subscribe(() => {
    console.log(store.getState());
});