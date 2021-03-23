import React, { Suspense } from "react";
import { CssBaseline, Container, Typography, Grid } from "@material-ui/core";
import { Model } from "./Modeling/model";
import { headerStyles } from "./style";
import WeebutTextLogo from "../../assets/logo/Weebut-12.png";
import WeebutLogoLight from "../../assets/logo/Weebut-light-192.png";

export default function Header() {
  const classes = headerStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      {/* <div className={classes.headerContainer}>
        <div className={classes.logoContainer}>
        <img
            src={WeebutLogoDark}
            alt={"Weebut"}
            className={classes.teamLogo}
          />
        </div>
        <div className={classes.descriptionContianer}>
        <img
            src={WeebutTextLogo}
            alt={"Weebut"}
            className={classes.textLogo}
          />
        </div>
      </div> */}

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
                etc
              </Typography>
            </div>
            <div className={classes.navItem}>
              <Typography
                className={classes.navText}
                component="h6"
                variant="h6"
              >
                Design
              </Typography>
            </div>
            <div className={classes.navItem}>
              <Typography
                className={classes.navText}
                component="h6"
                variant="h6"
              >
                AI Research
              </Typography>
            </div>
            <div className={classes.navItem}>
              <Typography
                className={classes.navText}
                component="h6"
                variant="h6"
              >
                Developer
              </Typography>
            </div>
            <div className={classes.navItem}>
              <Typography
                className={classes.navText}
                component="h6"
                variant="h6"
              >
                Product
              </Typography>
            </div>
            <div className={classes.navItem}>
              <Typography
                className={classes.navText}
                component="h6"
                variant="h6"
              >
                Who we are
              </Typography>
            </div>
          </div>
        </Container>
      </div>

      {/* <div className={classes.description}></div> */}
    </React.Fragment>
  );
}
