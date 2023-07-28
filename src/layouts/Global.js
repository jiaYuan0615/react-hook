import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "./Global.scss"

export default function Global() {
  return (
    <div className="layout">
      <Header></Header>
      <div className="p-2 wrap">
        <Outlet />
      </div>
      <Footer></Footer>
    </div>
  )
}