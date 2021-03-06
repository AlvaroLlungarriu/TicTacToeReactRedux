import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Game from './containers/containers';//Game es la clase principal y lo contiene todo
import createStore from './store';
//import reducers from './reducers';

import * as serviceWorker from './serviceWorker';

import './index.css';

ReactDOM.render((
    <Provider store={createStore}>
        <Game />
    </Provider>
), document.getElementById('root'));
//Solo puede haber un ReactDOM, siempre ponemos la clase principal que en este caso es Game

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
