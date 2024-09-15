
import './App.css'
import Footer from './Components/shared/Footer'
import Navbar from './Components/shared/Navbar'
import { Outlet } from "react-router-dom";

function App() {


  return (
    <div className='bg-white text-black dark:bg-gray-900 dark:text-white '>
      <div className='flex flex-col min-h-screen max-w-6xl mx-auto'>
        <div className='flex-grow'>
          <Navbar></Navbar>
          <Outlet />
        </div>

        <div>
          <Footer></Footer>
        </div>
      </div>
    </div>
  )
}

export default App
