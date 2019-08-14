import React from 'react';
import ReactDOM from 'react-dom';
import App from './container/App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import * as serviceWorker from './serviceWorker';
import reducers from './reducers/index';

const store = createStore(reducers);

const app = 
(    
    <Provider store={store}> 
        <App /> 
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));

serviceWorker.unregister();