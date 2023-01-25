import {createGlobalStyle} from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import UserContext from '../authContext';
import SignUp from './SignUp';

const [token, setToken] = useState('');

function App() {
  return (
    <BrowserRouter>
      <UserContext.Provider value={{token, setToken}}>
        <GlobalStyle/>
        <Routes>
          <Route path='/sign-up' element={SignUp}/>
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
