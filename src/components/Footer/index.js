import React from "react";
import { CssBaseline, Typography } from "@material-ui/core";

function Footer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Typography
        component="div"
        style={{ backgroundColor: "#C6E5F6", height: "100vh" }}
      >
        MEDIAR LAB Ongoing
      </Typography>
    </React.Fragment>
  );
}

export default Footer;
