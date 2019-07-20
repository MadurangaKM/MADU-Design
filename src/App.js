import React from 'react';
import AppHeader from './components/AppHeader';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Lato',
    ].join(','),
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <AppHeader/>
    </div>
    </ThemeProvider>
  );
}

export default App;
