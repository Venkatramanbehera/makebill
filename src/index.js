import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'

import { BrowserRouter}  from 'react-router-dom'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore';
import { asyncUserInformation, isLogin } from './actions/userAction';
import { asyncGetCustomers } from './actions/customersAction';

const store = configureStore()

console.log(store.getState());

store.subscribe(() => {
    console.log(store.getState());
})

if(localStorage.getItem('token')){
    store.dispatch(isLogin(true))
    store.dispatch(asyncUserInformation())
    store.dispatch(asyncGetCustomers())
}

ReactDOM.render(
    <BrowserRouter>
        <Provider store={ store }>
            <App/>
        </Provider>
    </BrowserRouter>
    , document.getElementById('root')
)