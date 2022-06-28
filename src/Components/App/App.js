import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../Login/Login';
import Menu from '../Menu/Menu';
import Register from '../Register/Registet';
import Recive from '../Recive/Recive';
import Pay from '../Pay/Pay';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/cadastro' element={<Register />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/entrada' element={<Recive />} />
        <Route path='/saida' element={<Pay />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
