import { makeStyles } from "@material-ui/core";

export const teamStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
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
