import { useState } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { Button } from 'primereact/button';

import Footer from "../components/Footer";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import "./Global.scss"

export default function Global() {
  const { isMoblie } = useSelector(state => state.global)
  const [visible, setVisible] = useState();

  return (
    <div className="layout relative">
      <Header></Header>
      <Button
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
      <Sidebar display={visible}></Sidebar>
      <div className={`p-2 wrap ${!visible ? 'expand' : ''}`}>
        <Outlet />
      </div>
      <Footer></Footer>
    </div>
  )
}