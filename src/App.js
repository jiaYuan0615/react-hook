import './App.css';
import Product from './pages/Product';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Checkout from './pages/Checkout';
import Global from './layouts/Global';

export default function App(props) {
  return (
    <>
      <Routes>
        <Route path='home' element={<Home />} />
        <Route path='/' element={<Global />}>
          <Route path='product' element={<Product />} />
          <Route path='checkout' element={<Checkout />} />
        </Route>
      </Routes>
    </>
  );
}
