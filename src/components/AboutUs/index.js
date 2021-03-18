import React from "react";
import { CssBaseline, Grid, Container, Typography } from "@material-ui/core";
import { teamStyles } from "./style";
import KOO from "../../assets/image/KOO.png";
import LEE from "../../assets/image/LEE.png";
import OH from "../../assets/image/OH.png";
import PARK from "../../assets/image/PARK.png";

const members = [
  { name: "Koo Minhyung", profile: KOO },
  { name: "Lee Jaehee", profile: LEE },
  { name: "Oh Seunghyuk", profile: OH },
  { name: "Park Soojin", profile: PARK },
];

function AboutUs() {
  const classes = teamStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <div className="aboutTeam">
        <Container maxWidth="lg" className={classes.root}>
          <Container maxWidth="lg" className={classes.content}>
            <Container maxWidth="lg" className={classes.description}>
              <Typography
                component="h3"
                variant="h4"
                color="textPrimary"
                gutterBottom
              >
                about TEAM_
              </Typography>
              <Typography variant="h6" color="textSecondary" paragraph>
                2020.08~ : KAIKAI / KAIST, Daejeon <br /> 2021.01~ : Weebut /
                Seocho, Seoul
              </Typography>
            </Container>
            <Container maxWidth="lg" className={classes.members}>
              {members.map((member) => (
                <Grid
                  item
                  key={member}
                  xs={3}
                  container
                  className={classes.profile}
                >
                  <img
                    src={member.profile}
                    alt={member.name}
                    style={{ width: 200, height: 200 }}
                  />
                  <Typography
                    variant="h6"
                    color="textPrimary"
                    gutterBottom
                    className={classes.profileContent}
                  >
                    {member.name}
                  </Typography>
                </Grid>
              ))}
            </Container>
          </Container>
        </Container>
      </div>
    </React.Fragment>
  );
}

export default AboutUs;
