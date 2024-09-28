/* eslint-disable no-unused-vars */
import React from 'react';
import Header from './Header';
import { Route,Routes } from 'react-router-dom';
import LoginPage from './Components/LoginPage';
import Layout from './Layout';

function App(){
  
  return(
    <Routes>
      <Route path='/' element={<Layout/>}>

      <Route path='/login' index element={<LoginPage/>}/>
      </Route>
    </Routes>
  )
}

export default App