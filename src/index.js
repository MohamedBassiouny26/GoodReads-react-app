import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import Books from './pages/books/books'
import Navbar from './componenets/navbar/navbar';

import { BrowserRouter, Route, Switch } from 'react-router-dom'

import '../node_modules/bootstrap/dist/css/bootstrap.css';
import BookDetails from './pages/bookDetails/bookDetails';
ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <Navbar />
      <Switch>
        <Route path='/books/:id' component={BookDetails} />
        <Route path='/books' component={Books} />
      </Switch>
      {/* <Books /> */}
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
