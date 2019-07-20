import React from "react";
import AppHeader from "./components/AppHeader";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { Provider } from "react-redux";
import Store from "./redux/Store";

const theme = createMuiTheme({
  typography: {
    fontFamily: ["Lato"].join(",")
  }
});
function App() {
  return (
    <Provider store={Store}>
      <ThemeProvider theme={theme}>
        <div className="App">
          <AppHeader />
        </div>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
