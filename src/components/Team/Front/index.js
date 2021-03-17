import React from "react";
import { CssBaseline, Typography } from "@material-ui/core";

function Front() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Typography
        component="div"
        style={{ backgroundColor: "#F6CFC6", height: "100vh" }}
      >
        FE Team
      </Typography>
    </React.Fragment>
  );
}

export default Front;
