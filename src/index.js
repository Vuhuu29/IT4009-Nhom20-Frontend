import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//redux
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/index';
//redux saga
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/index';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}> 
    <App />
  </Provider>
);
//Component provider cung cấp khả năng truy cập store cho bất kỳ component nào trong nó
reportWebVitals();
