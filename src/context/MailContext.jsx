import { createContext, useState } from "react";

export const mailContext = createContext();

const MailContext = ({ children }) => {
    const [isMailHovered, setIsMailHovered] = useState(false)
    return (
        <mailContext.Provider value={[isMailHovered, setIsMailHovered]}>
            {children}
        </mailContext.Provider>
    )
}

export default MailContext