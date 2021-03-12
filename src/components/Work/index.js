import React from "react";
import { Container, CssBaseline, Typography } from "@material-ui/core";

function Work() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl">
        <Typography
          component="div"
          style={{ backgroundColor: "#F6CFC6", height: "100vh" }}
        >
          논문을 열심히 읽고 있어요
        </Typography>
      </Container>
    </React.Fragment>
  );
}

export default Work;
