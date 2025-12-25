import {useContext} from "react";
import {ThemeContext} from "./ThemeContext.tsx";

export default function Page() {
    const {theme, toggleTheme} = useContext(ThemeContext);

  return (
    <div className={`wrapper ${theme}`}>
        <div className={`content ${theme}`}>
            <h1>Theming Challenge</h1>
            <p>Click button to change the theme</p>
            <button onClick={toggleTheme} className={theme}>Change Theme</button>
        </div>
    </div>
  );
}