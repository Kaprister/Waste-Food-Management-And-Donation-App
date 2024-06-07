import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './assets/Styles/style.css'
import ContactUs from './Pages/ContactUs.jsx'
import AboutUs from './Pages/AboutUs.jsx'
import Register from './Pages/Register.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Pages/Home.jsx'



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
        {
            path: "/",
            element: <Home/>,
        },
        {
            path: "/contactUs",
            element: (
                <ContactUs/>
            ),
        },
        {
            path: "/aboutUs",
            element: (
                <AboutUs/>
            ),
        },
        {
            path: "/joinUs",
            element: (
                <Register/>
            ),
        },
    ],
},
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
