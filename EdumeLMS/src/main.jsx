import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { AuthContextProvider } from './context/AuthContext.jsx'
//import axios from 'axios'
//import Cookies from 'js-cookie';

// axios.interceptors.request.use(function (config) {
//   const token = Cookies.get('token');
//   console.log('token', token);
//   config.headers.Authorization = `Bearer ${token}`;
//   return config;
// });

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
