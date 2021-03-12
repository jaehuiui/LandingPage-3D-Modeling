import React from "react";
import { Container, CssBaseline, Typography } from "@material-ui/core";

function Header() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl">
        <Typography
          component="div"
          style={{ backgroundColor: "#000000", height: "100vh" }}
        />
      </Container>
    </React.Fragment>
  );
}

export default Header;
