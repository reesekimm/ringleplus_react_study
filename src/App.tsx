import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import Review from "Pages/Review";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "Styles/theme";
import "Styles/styles.scss";

const App: React.FC = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Review />
    </ThemeProvider>
  </Provider>
);

export default App;
