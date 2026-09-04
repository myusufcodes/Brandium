import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Circlecontext from './context/Circlecontext.jsx'
import Journalcontext from './context/JournalContext.jsx'
import FooterContext from './context/FooterContext.jsx'
import MailContext from './context/MailContext.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Circlecontext>
      <Journalcontext>
        <FooterContext>
          <MailContext>
            <App />
          </MailContext>
        </FooterContext>
      </Journalcontext>
    </Circlecontext>
  </StrictMode>,
)
