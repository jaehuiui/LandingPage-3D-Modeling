import React from "react";
import { CssBaseline, Container, Typography, Link } from "@material-ui/core";
import { Model } from "./Modeling/model";
import { headerStyles } from "./style";
import WeebutLogoLight from "../../assets/logo/Weebut-light-192.png";

export default function Header() {
  const classes = headerStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <div className={classes.container}>
        <Model className={classes.canvas} />
        <Container className={classes.navContainer} maxWidth="lg">
          <div className={classes.navLogo}>
            <img
              src={WeebutLogoLight}
              alt={"Weebut"}
              className={classes.teamLogo}
            />
          </div>
          <div className={classes.navItemContainer}>
            <div className={classes.navItem}>
              <Typography
                className={classes.navText}
                component="h6"
                variant="h6"
              >
                <Link href="#" onClick={() => {}} color="inherit">
                  etc
                </Link>
              </Typography>
            </div>
            <div className={classes.navItem}>
              <Typography
                className={classes.navText}
                component="h6"
                variant="h6"
              >
                <Link href="#" onClick={() => {}} color="inherit">
                  Design
                </Link>
              </Typography>
            </div>
            <div className={classes.navItem}>
              <Typography
                className={classes.navText}
                component="h6"
                variant="h6"
              >
                <Link href="#" onClick={() => {}} color="inherit">
                  AI Research
                </Link>
              </Typography>
            </div>
            <div className={classes.navItem}>
              <Typography
                className={classes.navText}
                component="h6"
                variant="h6"
              >
                <Link href="#" onClick={() => {}} color="inherit">
                  Developer
                </Link>
              </Typography>
            </div>
            <div className={classes.navItem}>
              <Typography
                className={classes.navText}
                component="h6"
                variant="h6"
              >
                <Link href="#" onClick={() => {}} color="inherit">
                  Product
                </Link>
              </Typography>
            </div>
            <div className={classes.navItem}>
              <Typography
                className={classes.navText}
                component="h6"
                variant="h6"
              >
                <Link href="#" onClick={() => {}} color="inherit">
                  Who we are
                </Link>
              </Typography>
            </div>
          </div>
        </Container>
      </div>

      {/* <div className={classes.description}></div> */}
    </React.Fragment>
  );
}
