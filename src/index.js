import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import * as serviceWorker from './serviceWorker';
import reducers from './reducers/index';
import thunk from 'redux-thunk';

const store = createStore(reducers, applyMiddleware(thunk));

const app = 
(    
    <Provider store={store}> 
        <App /> 
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));

serviceWorker.unregister();