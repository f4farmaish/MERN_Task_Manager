import { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
// import { Provider } from './usercontext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   

    <BrowserRouter>
     {/* <Provider> */}
       <App />
{/* </Provider> */}
   
    </BrowserRouter>
    
  </StrictMode>,
)
