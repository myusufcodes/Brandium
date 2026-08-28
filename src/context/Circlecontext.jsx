import { createContext, useState } from "react"

export const circleContext = createContext()
const Circlecontext = ({children}) => {
    const [isHovered, setIsHovered] = useState(false)
  return (
    <circleContext.Provider value={[isHovered, setIsHovered]}>
        {children}
    </circleContext.Provider>
  )
}

export default Circlecontext