import React from "react";
import { CssBaseline, Container, Grid } from "@material-ui/core";

import Header from "../Header";
import AboutUs from "../AboutUs";
import Manager from "../Team/Manager";
import Front from "../Team/Front";
import Back from "../Team/Back";
import AI from "../Team/AI";
import Footer from "../Footer";

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Header />
      <AboutUs />
      <Manager />
      <Front />
      <Back />
      <AI />
      <Footer />
    </React.Fragment>
  );
}

export default App;
