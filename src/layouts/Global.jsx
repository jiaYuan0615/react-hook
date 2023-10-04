import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Button } from 'primereact/button';
import { useDispatch, useSelector } from "react-redux";

import Footer from "../components/Footer";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import "./Global.scss"
import config from "../config";

export default function Global({ goToRoute, toast }) {
  const dispatch = useDispatch()
  const { auth } = useSelector((state) => state.auth)
  const [visible, setVisible] = useState();

  useEffect(() => {
    dispatch({ type: 'GET_AuthInfo' })
  }, [])

  return (
    <div className="layout relative">
      <Header
        goToRoute={goToRoute}
        toast={toast}
        auth={auth}
      />
      <Button
        title='面板'
        text
        icon="pi pi-bars"
        size="large"
        style={{
          color: 'aliceblue',
          position: 'absolute',
          left: '.5rem',
          top: '.25rem',
          zIndex: '999'
        }}
        onClick={() => setVisible(!visible)}
      />
      <Sidebar
        display={visible}
        goToRoute={goToRoute}
      />
      <div
        className={`p-2 wrap ${!visible ? 'expand' : ''}`}
      >
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}