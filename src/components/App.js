import {createGlobalStyle} from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import UserContext from '../authContext';
import SignUp from './SignUp';
import Login from './Login';
import { useState } from 'react';


function App() {
  console.log('passou no app')
  const [token, setToken] = useState();

  return (
    <BrowserRouter>
      <UserContext.Provider value={{token, setToken}}>
        <GlobalStyle/>
        <Routes>
          <Route path='/sign-up' element={<SignUp/>}/>
          <Route path='/' element={<Login/>}/>
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
`
