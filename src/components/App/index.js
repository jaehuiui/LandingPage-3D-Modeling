import React from "react";
import { CssBaseline, Container, Grid } from "@material-ui/core";

import Header from "../Header";
import AboutUs from "../AboutUs";
import Team from "../Team";
import Footer from "../Footer";

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Header />
      <AboutUs />
      <Team />
      <Footer />
    </React.Fragment>
  );
}

export default App;
