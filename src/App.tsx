import React from "react";
import Review from "Pages/Review";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "Styles/theme";
import "Styles/styles.scss";

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <Review />
  </ThemeProvider>
);

export default App;
