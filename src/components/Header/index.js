import React, { Suspense } from "react";
import { CssBaseline, Typography } from "@material-ui/core";
import { Model } from "./Modeling/model";
import { headerStyles } from "./style";
import WeebutTextLogo from "../../assets/logo/Weebut-12.png";
import WeebutLogoLight from "../../assets/logo/Weebut-light-192.png";

export default function Header() {
  const classes = headerStyles();

  return (
    <React.Fragment>
      <div className={classes.container}>
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

        <Model />
        {/* <div className={classes.description}></div> */}
      </div>
    </React.Fragment>
  );
}
