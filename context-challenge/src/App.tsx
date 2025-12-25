import './App.css'
import Page from "./Page.tsx";
import ThemeContextProvider from "./ThemeContextProvider.tsx";

function App() {

  return (
    <ThemeContextProvider>
      <Page/>
    </ThemeContextProvider>
  )
}

export default App
