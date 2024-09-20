
import './App.css'
import Footer from './Components/shared/Footer'
import Navbar from './Components/shared/Navbar'
import { Outlet } from "react-router-dom";
import { motion, useScroll, useSpring } from "framer-motion";


function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });



  return (
    <>
      <motion.div
        style={{
          scaleX: scaleX, // Animate scaling of an element as the page scrolls
          height: "10px",
          background: "red",
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          transformOrigin: 0,
          zIndex:10
        }}
      />
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
    </>
  )
}

export default App
