/*import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';
export default function configureStore (initialState = {}) {
    return createStore(rootReducer, initialState, applyMiddleware(thunk));
}*/

import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from './reducers/rootReducer';

const middleWare = [];

middleWare.push(thunk);

const loggerMiddleware = createLogger({
    predicate: () => process.env.NODE_ENV === 'development'
});
middleWare.push(loggerMiddleware);

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
          // Specify extensions options like name, actionsBlacklist, actionsCreators, serialize...
      }) :
      compose;

const enhancer = composeEnhancers(
    applyMiddleware(...middleWare)
    // other store enhancers if any
);

/*const store = createStore(
    rootReducer,
    {},
    compose(applyMiddleware(...middleWare))
);*/
const store = createStore(rootReducer, {}, enhancer);

export default store;
