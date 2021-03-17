import { makeStyles } from "@material-ui/core";

export const headerStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    display: "flex",
    flex: 10,
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "#121212",
  },
  upperContainer: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  lowerContainer: {
    flex: 9,
  },
  teamLogo: {
    height: 130,
    width: 130,
  },
  teamName: {
    color: "#FFFFFF",
  },
}));
