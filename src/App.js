import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import 'primeicons/primeicons.css';
import { Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import _ from 'lodash';

import './App.css';
import Product from './pages/Product';
import Home from './pages/Home';
import ShoppingCart from './pages/ShoppingCart'
import Checkout from './pages/Checkout';
import Global from './layouts/Global';
import menu from './route'
import Auth from './layouts/Auth';
import { Toast } from "primereact/toast";

export default function App() {
  const toast = useRef(null);
  const { pathname } = useLocation();
  const [currentRoute] = _.compact(pathname.split('/'))
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    if (currentRoute) {
      const item = menu.filter(x => x.route == currentRoute);
      document.title = item.length ? item[0].name : 'React'
    }
  }, [pathname])

  const goToRoute = (path, callback) => {
    dispatch({
      type: 'PUSH_GoToRoute',
      navigate,
      path,
      callback
    })
  }

  return (
    <>
      <Toast ref={toast} />
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="/" element={<Global goToRoute={goToRoute} />}>
          <Route path="product" element={<Product />} />
          <Route path="shopping-cart" element={<ShoppingCart />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="checkout" element={<Checkout />} />
          <Route
            path="/"
            element={<Navigate to="/product" replace />}
          />
        </Route>
        <Route
          path="/auth"
          element={
            <Auth
              goToRoute={goToRoute}
              toast={toast}
            />}
        >
        </Route>
      </Routes>
    </>
  );
}
