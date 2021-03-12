import React from "react";
import { Container, CssBaseline, Typography } from "@material-ui/core";

function Project() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl">
        <Typography
          component="div"
          style={{ backgroundColor: "#C6E5F6", height: "100vh" }}
        >
          MEDIAR LAB Ongoing
        </Typography>
      </Container>
    </React.Fragment>
  );
}

export default Project;
