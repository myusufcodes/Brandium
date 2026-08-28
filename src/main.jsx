import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Circlecontext from './context/Circlecontext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Circlecontext>
      <App />
    </Circlecontext>
  </StrictMode>,
)
