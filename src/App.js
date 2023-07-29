import './App.css';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import 'primeicons/primeicons.css';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Product from './pages/Product';
import Home from './pages/Home';
import ShoppingCart from './pages/ShoppingCart'
import Checkout from './pages/Checkout';
import Global from './layouts/Global';
import _ from 'lodash';
import { useEffect } from 'react';
import menu from './route'

export default function App() {
  const { pathname } = useLocation();
  const [currentRoute] = _.compact(pathname.split('/'))

  useEffect(() => {
    if (currentRoute) {
      const item = menu.filter(x => x.route == currentRoute);
      document.title = item.length ? item[0].name : 'React'
    }
  }, [pathname])

  return (
    <Routes>
      <Route path="home" element={<Home />} />
      <Route path="/" element={<Global />}>
        <Route path="product" element={<Product />} />
        <Route path="shopping-cart" element={<ShoppingCart />} />
        <Route path="checkout" element={<Checkout />} />
        <Route
          path="/"
          element={<Navigate to="/product" replace />}
        />
      </Route>
    </Routes>
  );
}
