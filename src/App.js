import './App.css';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import 'primeicons/primeicons.css';
import { Route, Routes } from 'react-router-dom';
import Product from './pages/Product';
import Home from './pages/Home';
import Checkout from './pages/Checkout';
import Global from './layouts/Global';

export default function App() {
  return (
    <Routes>
      <Route path="home" element={<Home />} />
      <Route path="/" element={<Global />}>
        <Route path="product" element={<Product />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
}
