import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// BrowserRouter import
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  // 최상위 컴포넌트 App 감싸주기 -> 안에들어간 모든 컴포넌트에 페이징이 적용될 수 있음
  <BrowserRouter> 
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
