import { useState} from "react";
import {DARK, LIGHT, ThemeContext, type ThemeContextProps} from "./ThemeContext.tsx";

export default function ThemeContextProvider({children}: {children: React.ReactNode}) {
    const [theme, setTheme] = useState<string>(LIGHT);

    const handleToggleTheme = () => {
        setTheme(previousState => previousState === LIGHT ? DARK : LIGHT);
    };

    const contextValue: ThemeContextProps = {
        theme,
        toggleTheme: handleToggleTheme,
    }

    return (
        <ThemeContext.Provider value={contextValue}>
            {children}
        </ThemeContext.Provider>
    )
}