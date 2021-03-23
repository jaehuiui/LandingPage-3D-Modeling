import { makeStyles } from "@material-ui/core";

export const headerStyles = makeStyles((theme) => ({
  container: {
    height: "100vh",
    width: "100vw",
    display: "flex",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "#000000",
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
    flex: 1,
    height: "20%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "#000000",
  },
  contentContainer: {
    flex: 8,
    height: "80%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#000000",
  },
  navBar: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "row",
  },
}));
