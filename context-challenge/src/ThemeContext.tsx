import {createContext} from "react";

export const LIGHT = 'light';
export const DARK = 'dark';

export interface ThemeContextProps {
    theme: string;
    toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextProps>({
    theme: LIGHT,
    toggleTheme: () => {},
})