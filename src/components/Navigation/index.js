import React from "react";
import PropTypes from "prop-types";
import { Toolbar, Link, Button } from "@material-ui/core";
import { navigationStyles } from "./style";
import WeebutLogo from "../../image/logo/Weebut-dark-192.png";

function Navigation(props) {
  const classes = navigationStyles();
  const { sections, title } = props;

  return (
    <div className="NavigationBar">
      <Toolbar
        position="sticky"
        component="nav"
        variant="dense"
        className={classes.toolbarSecondary}
      >
        <Button>
          <img
            src={WeebutLogo}
            alt={"Weebut"}
            style={{ width: 100, height: 100 }}
          />
        </Button>
        {sections.map((section) => (
          <Link
            color="inherit"
            noWrap
            key={section.title}
            variant="body2"
            href={section.url}
            className={classes.toolbarLink}
          >
            {section.title}
          </Link>
        ))}
      </Toolbar>
    </div>
  );
}

Navigation.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
};

export default Navigation;
