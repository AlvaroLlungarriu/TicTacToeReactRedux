import React from 'react';
import ReactDOM from 'react-dom';

import Game from './components/Game';//Game es la clase principal y lo contiene todo
import * as serviceWorker from './serviceWorker';

import './index.css';

ReactDOM.render(<Game />, document.getElementById('root'));//Solo puede haber un ReactDOM, siempre ponemos la clase principal que en este caso es Game

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
