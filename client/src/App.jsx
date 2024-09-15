import './App.css'
import Footer from './Components/shared/Footer'
import Navbar from './Components/shared/Navbar'
import { Outlet } from "react-router-dom";

function App() {

  return (
    <div>
      <Navbar></Navbar>
      
      <Outlet />

      <Footer></Footer>
    </div>
  )
}

export default App
