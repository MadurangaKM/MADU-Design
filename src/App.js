import React, { useRef } from "react";
import AppHeader from "./components/AppHeader";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { Provider } from "react-redux";
import Store from "./redux/Store";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import AboutMe from "./components/AboutMe";
import ContactMe from "./components/ContactMe";

const scrollToRef = ref =>
  window.scrollTo({ top: ref.current.offsetTop, behavior: "smooth" });
const theme = createMuiTheme({
  typography: {
    fontFamily: ["Lato"].join(",")
  }
});
function App() {
  const myRef = useRef(null);
  const myRefAbout = useRef(null);
  const myRefContact = useRef(null);
  return (
    <Provider store={Store}>
      <ThemeProvider theme={theme}>
        <div className="App">
          <AppHeader
            onChangePortfolio={() => scrollToRef(myRef)}
            onChangeAbout={() => scrollToRef(myRefAbout)}
            onChangeContact={() => scrollToRef(myRefContact)}
          />
          <Hero onChangeContact={() => scrollToRef(myRefContact)} />
          <div ref={myRef}>
            <Portfolio />
          </div>
          <div ref={myRefAbout}>
            <AboutMe />
          </div>
          <div ref={myRefContact}>
            <ContactMe />
          </div>
        </div>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
