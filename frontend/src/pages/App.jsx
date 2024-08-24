import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";

export default function App() {

  return (
    <div>
      <Header />
      < Outlet />
    </div>
  )
}

