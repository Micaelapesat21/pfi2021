import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { LocalizationProvider } from '@material-ui/pickers';
import DateFnsUtils from '@material-ui/pickers/adapter/date-fns';
import esLocale from "date-fns/locale/es";

const localeMap = {
  es: esLocale,
};


ReactDOM.render(
  <LocalizationProvider dateAdapter={DateFnsUtils} locale={localeMap.es}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </LocalizationProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

