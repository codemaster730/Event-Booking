import { createStore, compose, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
// import { loadState, saveState } from './localStorage';
import rootReducer from "./reducers";
const middleware = [reduxThunk];

// const persistedState = loadState();
const store = createStore(
  rootReducer,
  // persistedState,
  compose(
    applyMiddleware(...middleware),
    (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()) ||
      compose
  )
);

// store.subscribe(() => {
//   saveState(store.getState());
// })

export default store;