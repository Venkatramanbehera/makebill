import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'

import { BrowserRouter}  from 'react-router-dom'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore';

const store = configureStore()

console.log(store.getState());

store.subscribe(() => {
    console.log(store.getState());
})

ReactDOM.render(
    <BrowserRouter>
        <Provider store={ store }>
            <App/>
        </Provider>
    </BrowserRouter>
    , document.getElementById('root')
)