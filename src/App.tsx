import React from 'react';
import logo from './logo.svg';
import './App.css';
import Layout from './layout/layout';
import Navbar from './components/navbar';

function App() {
  return (
   <div className='app-container'>
     <Navbar/>
     <Layout/>
     </div>
  );
}

export default App;
