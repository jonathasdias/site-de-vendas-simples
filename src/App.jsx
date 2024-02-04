import Header from "./components/Header/Header";
import Globalstyle from "./components/GlobalStyle/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { contexts } from "./components/Contexts/Context";
import { Outlet } from "react-router-dom";

function App() {

  const { isDark, Themes } = contexts();

  return (
    <ThemeProvider theme={!isDark ? Themes.light : Themes.dark }>
      <Globalstyle/>
      <Header/>
      <Outlet/>
    </ThemeProvider>
  )
}

export default App