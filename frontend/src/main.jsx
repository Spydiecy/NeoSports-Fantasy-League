import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {NextUIProvider} from '@nextui-org/react'

import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
        <NextUIProvider>
    <App />
    <Footer></Footer>
    </NextUIProvider>

  </StrictMode>,
)
  