import React, { useState } from "react";
import { createMuiTheme, CssBaseline, ThemeProvider } from "@material-ui/core";
import { Header } from "./components/Header";
import { MainBody } from "./components/MainBody";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const theme = createMuiTheme({
    palette: {
      type: `${isDarkMode ? "dark" : "light"}`,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <MainBody />
      <CssBaseline />
    </ThemeProvider>
  );
};

export default App;
