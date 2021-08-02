import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import Books from './pages/books/books'
import Navbar from './componenets/navbar/navbar';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <Books />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
