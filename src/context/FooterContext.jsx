import { createContext, useState } from "react";

export const footerContext = createContext();

const FooterContext = ({ children }) => {
    const [footerEntered, setFooterEntered] = useState(false)
    return (
        <footerContext.Provider value={[footerEntered, setFooterEntered]}>
            {children}
        </footerContext.Provider>
    )
}

export default FooterContext