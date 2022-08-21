import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Panier } from './compenents/Panier';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Panier/>
  </React.StrictMode>
);

