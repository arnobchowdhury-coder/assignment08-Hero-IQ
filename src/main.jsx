import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router";
import './index.css'
import App from './App.jsx'
import NavBar from './Components/NavBar/NavBar.jsx';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <NavBar></NavBar>
    </BrowserRouter>,
  </StrictMode>,
)
