import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
// import './App.css'
import { Outlet } from 'react-router-dom'



function App() {

  return (
    <>
      <div className=" container" id="home">
            <Navbar/>
            <main>
                <Outlet />
            </main>
            <Footer/>
        </div>
    </>
  )
}

export default App
