import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import { Header } from "./components/Header";

const theme = createMuiTheme({
  palette: {
    type: "dark",
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <div>Hello world</div>
    </ThemeProvider>
  );
};

export default App;
