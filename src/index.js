import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

//---------redux--------------------
import { Provider } from 'react-redux';
import store from './redux/store';
//------------------------------------

import './assets/main.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

store.firebaseAuthIsReady.then(()=>{
    //important note: check store.js addded => attachAuthIsReady: true;
    //don`t render the DOM until firebase auth is ready
    ReactDOM.render(
        <Router>
            <Provider store={store}>
                <App />
            </Provider>
        </Router>, 
    document.getElementById('root'));
    
    serviceWorker.unregister();
});


