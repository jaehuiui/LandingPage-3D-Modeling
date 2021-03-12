import React from "react";
import { Container, CssBaseline, Typography } from "@material-ui/core";

function Product() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl">
        <Typography
          component="div"
          style={{ backgroundColor: "#F4F6C6", height: "100vh" }}
        >
          MEDIAR 가 나오면 좋겠어요
        </Typography>
      </Container>
    </React.Fragment>
  );
}

export default Product;
