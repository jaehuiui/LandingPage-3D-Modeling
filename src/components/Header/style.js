import { makeStyles } from "@material-ui/core";

export const headerStyles = makeStyles((theme) => ({
  container: {
    zIndex: 1,
    height: "100vh",
    width: "100vw",
    display: "flex",
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#000000",
  },
  canvas: {
    height: "100vh",
    width: "100vw",
    position: "absolute",
    zIndex: 2,
  },
  headerContainer: {
    flex: 3.5,
    height: "100%",
    width: "35%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#F3F1F0",
  },
  logoContainer: {
    flex: 1,
    height: "20%",
    width: "100%",
    display: "flex",
    flexDirection: "row",
  },
  descriptionContianer: {
    flex: 9,
    width: "100%",
    height: "80%",
    display: "flex",
    flexDirection: "column",
    padding: theme.spacing(6),
    justifyContent: "center",
  },

  description: {
    flex: 4,
    width: "40%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  model: {
    flex: 6,
    width: "60%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  teamLogo: {
    width: "150px",
    height: "150px",
  },
  textLogo: {
    marginBottom: "300px",
  },
  navContainer: {
    position: "absolute",
    zIndex: 3,
    flex: 1.5,
    height: "15%",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "center",
    backgroundColor: "transparent",
  },
  navBar: {
    display: "flex",
    flexDirection: "row",
    alignSelf: "center",
  },
  navLogo: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignSelf: "center",
  },
  navItemContainer: {
    flex: 8,
    display: "flex",
    flexDirection: "row-reverse",
    alignSelf: "center",
  },
  navItem: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginLeft: theme.spacing(6),
  },
  navText: {
    color: "#FFFFFF",
  },
}));
