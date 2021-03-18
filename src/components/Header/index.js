import React, { Suspense } from "react";
import { CssBaseline, Typography } from "@material-ui/core";
import { Canvas } from "react-three-fiber";
import { GroundPlane, BackDrop, Model } from "./Modeling/model";
import { KeyLight, FillLight, RimLight } from "./Modeling/light";
import { headerStyles } from "./style";
import WeebutLogo from "../../assets/logo/Weebut-light-192.png";

export default function Header() {
  const classes = headerStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <div className={classes.container}>
        <div className={classes.headerContainer}>
          <img src={WeebutLogo} alt={"Weebut"} className={classes.teamLogo} />
          <Typography component="h3" variant="h4" className={classes.teamName}>
            Weebut
          </Typography>
        </div>
        <div className={classes.contentContainer}>
          <div className={classes.model}>
            <Canvas
              camera={{ fov: 18, position: [9, 2, 8] }}
              className={classes.contentContainer}
            >
              <KeyLight />
              <FillLight />
              <RimLight />
              <Suspense fallback={null}>
                <Model />
              </Suspense>
            </Canvas>
          </div>
          <div className={classes.description}></div>
        </div>
      </div>
    </React.Fragment>
  );
}
