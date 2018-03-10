import React from 'react';
import ReactDOM from 'react-dom';
import {applyMiddleware,createStore} from 'redux';
import {Provider} from 'react-redux';
import logger from 'redux-logger';
import promise from 'redux-promise'

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import reducers from './reducers/index';

// step - 1 npm install -save-dev redux-logger
// step - 2 import logger from 'redux-logger'
// step - 3 import {applyMiddleware,createStore} from 'redux';

// step - 4
const middleware = applyMiddleware(promise,logger);
const store = createStore(reducers,middleware);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
