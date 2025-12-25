import { createContext, useState} from "react";

const LIGHT = 'light';
const DARK = 'dark';

interface ThemeContextProps {
    theme: string;
    toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextProps>({
    theme: LIGHT,
    toggleTheme: () => {},
})

export default function ThemeContextProvider({children}: {children: React.ReactNode}) {
    const [theme, setTheme] = useState<string>(LIGHT);

    const handleToggleTheme = () => {
        console.log(theme);
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