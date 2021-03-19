import React, { Suspense } from "react";
import { CssBaseline } from "@material-ui/core";
import { Model } from "./Modeling/model";
import { headerStyles } from "./style";
import WeebutLogoLight from "../../assets/logo/Weebut-light-192.png";
import WeebutLogoDark from "../../assets/logo/Weebut-dark-192.png";

export default function Header() {
  const classes = headerStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      {/* <div className={classes.container}> */}
      {/* <div className={classes.headerContainer}>
          <img
            src={WeebutLogoDark}
            alt={"Weebut"}
            className={classes.teamLogo}
          />
          <Typography component="h3" variant="h4" className={classes.teamName}>
            Weebut
          </Typography>
        </div> */}
      {/* <div className={classes.contentContainer}> */}
      <div className={classes.container}>
        <Model />
      </div>
      {/* <div className={classes.description}></div> */}
      {/* </div> */}
      {/* </div> */}
    </React.Fragment>
  );
}
