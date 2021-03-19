import { makeStyles } from "@material-ui/core";

export const teamStyles = makeStyles((theme) => ({
  root: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "#F3F1F0",
  },
  content: {
    padding: theme.spacing(12),
  },
  description: {
    display: "flex",
    flexDirection: "column",
  },
  members: {
    marginTop: 30,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  profile: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
  },
  profileImage: {
    padding: theme.spacing(2),
  },
  profileContent: {
    marginTop: 30,
  },
}));
