import { createContext, useState } from "react"

export const journalContext = createContext();

const Journalcontext = ({ children }) => {
  const [isJournalHovered, setIsJournalHovered] = useState(false)
  return (
    <journalContext.Provider value={[isJournalHovered, setIsJournalHovered]}>
      {children}
    </journalContext.Provider>
  )
}

export default Journalcontext