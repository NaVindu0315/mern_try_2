import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Userform from './userform';
import reportWebVitals from './reportWebVitals';
import Users from './user';
import Use
import {BrowserRouter, Routes, Route} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
  <BrowserRouter>
  <Routes>
    <Route path='/' element ={<App/>}/>
    <Route path='/userform' element={<Userform/>}/>
    <Route path='/user' element={<Users/>}/>
    <Route path='/UsersTable' element={<></>}/>
  </Routes>
  
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
