// useContext
// 1. create Context
// 2. Provider : _Context
// 3. Cusumer : useContext

import { createContext, useState } from "react";

const ParentContext = createContext();

function ParentProvider({ children }) {

    const [theme, setTheme] = useState('red');

    const handleWowTheme = () => {
        setTheme(theme === 'red' ? 'blue' : 'red')
    }

    const valueAll = {
        theme,
        handleWowTheme
    }

    return (
        <ParentContext.Provider value={valueAll}>
            {children}
        </ParentContext.Provider>
    )
}

export { ParentContext, ParentProvider }