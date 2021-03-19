import { makeStyles } from "@material-ui/core";

export const headerStyles = makeStyles((theme) => ({
  container: {
    height: "100vh",
    width: "100vw",
    display: "flex",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "#F3EEE5",
  },
  headerContainer: {
    flex: 1,
    height: "10%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  contentContainer: {
    flex: 9,
    height: "90%",
    display: "flex",
    flexDirection: "row",
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
    height: 130,
    width: 130,
  },
  teamName: {
    color: "#000000",
  },
}));
