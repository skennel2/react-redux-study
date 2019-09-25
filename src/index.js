import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'mobx-react';
import * as serviceWorker from './serviceWorker';
import Store from './store';

const store = new Store(); // 스토어 인스턴스를 만들고
const app = 
(    
    <Provider store={store}> 
        <App /> 
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));

serviceWorker.unregister();