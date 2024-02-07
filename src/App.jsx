import Header from "./components/Header/Header";
import Globalstyle from "./components/GlobalStyle/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { contexts } from "./components/Context/Context";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";

function App() {

  const { isDark, Themes } = contexts();

  useEffect(()=> {
    localStorage.setItem("isDark", JSON.stringify(isDark));
  },[isDark]);

  return (
    <ThemeProvider theme={!isDark ? Themes.light : Themes.dark}>
      <Globalstyle/>
      <Header/>
      <Outlet/>
    </ThemeProvider>
  )
}

export default App