import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/main.less';
import { Provider } from 'react-redux';
import store from './store';
import Application from './Application';

ReactDOM.render(
    <Provider store={store}>
        <Application />
    </Provider>,
    document.getElementById('root')
);
