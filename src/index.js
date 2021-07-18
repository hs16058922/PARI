import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import './Styles/styles.scss';
import { Provider } from 'react-redux';
import AppRouter from './Router/AppRouter';
import configureStore from './Store/configureStore';

const store = configureStore();

const handlechange = () => {
  console.log(store.getState());
}


store.subscribe(handlechange);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppRouter />
    </Provider>,
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
