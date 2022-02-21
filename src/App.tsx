import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Layout from './layout/layout';
import { useLocation } from 'react-router-dom';



function App() {

  return (
    <div className='app-container' >
      <Layout />
    </div>
  );
}

export default App;
