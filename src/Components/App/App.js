import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../Login/Login';
import Menu from '../Menu/Menu';
import Register from '../Register/Registet';
import Recive from '../Recive/Recive';
import Pay from '../Pay/Pay';
import TokenContext from '../Context/TokenContext'
import { useState } from 'react';

function App() {
  const [token, setToken] = useState('')

  return (
    <BrowserRouter>
      <TokenContext.Provider value={{ token, setToken }}>
        <Routes>

          <Route path='/' element={<Login />} />
          <Route path='/cadastro' element={<Register />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/entrada' element={<Recive />} />
          <Route path='/saida' element={<Pay />} />

        </Routes>
      </TokenContext.Provider>
    </BrowserRouter>
  );
}

export default App;
