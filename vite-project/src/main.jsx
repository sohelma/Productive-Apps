import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import{BrowserRouter,Router,RouterProvider,Routes,}  from 'react-router'
import router from './Routes/Routes.jsx'

// const router = createBrowserRouter([
//   {
//     path: "/",
//   },
// ]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* data mode */}
    <RouterProvider router={router}/>

  </StrictMode>,
)
