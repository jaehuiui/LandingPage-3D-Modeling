import React from "react";
import { CssBaseline, Container, Grid } from "@material-ui/core";

import Header from "../Header";
import Navigation from "../Navigation";
import Product from "../Product";
import Project from "../Project";
import Team from "../Team";
import Work from "../Work";

const sections = [
  { title: "Product", url: "#" },
  { title: "Project", url: "#" },
  { title: "about TEAM", url: "#" },
  { title: "How We Work", url: "#" },
];

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Navigation title="Navigation" sections={sections} />
        <Header />
        <Team />
        <Work />
        <Product />
        <Project />
      </Container>
    </React.Fragment>
  );
}

export default App;
