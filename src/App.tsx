import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Layout from './layout/layout';

function App() {

  // const [isScorlled, setIsScorlled] = useState(false)  

  // useEffect(() => {
  //   document.body.addEventListener('scroll', () => {
  //  setIsScorlled(true)
  //   })
  //   return () => {
  //     document.removeEventListener('scroll', () => {
  //       setIsScorlled(false)
  //     })
  //   }
  // }, [])

  return (
   <div className='app-container' >
     <Layout />
     </div>
  );
}

export default App;
