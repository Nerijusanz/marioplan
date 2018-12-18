import {createStore,applyMiddleware,compose } from 'redux';
import thunk from 'redux-thunk';

//----------firebase--------------
import firebaseConfig from '../config/firebaseConfig';
import { getFirestore,reduxFirestore } from 'redux-firestore';
import { getFirebase,reactReduxFirebase } from 'react-redux-firebase';
//-----------------------------------------------

import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers/rootReducer';


// --------REDUX-STORE--------

const initialState = {};

// middlewares array list
const middleware = [
            thunk.withExtraArgument({getFirebase,getFirestore})
        ];

const store = createStore(
    rootReducer,
    initialState,
    compose(
        (process.env.REACT_APP_NODE_ENV !== 'production') ? composeWithDevTools(applyMiddleware(...middleware)) : applyMiddleware(...middleware),
        reduxFirestore(firebaseConfig), //redux firestore connection
        reactReduxFirebase(
            firebaseConfig,
            {
                useFirestoreForProfile: true,
                userProfile:'users',    //colection 'users'
                attachAuthIsReady: true
            }
        )  // react-redux-firebase connection
    ),
);

// get redux store initials state
//console.log(store.getState());
export default store;