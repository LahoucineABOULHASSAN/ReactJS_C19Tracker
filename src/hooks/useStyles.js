import { makeStyles } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";

export const useStyles = makeStyles((theme) => {
  return {
    container: {
      padding: "2rem",
      background: grey[900],
    },
    mainContent: {
      width: "100%",
      padding: "0 4rem",
    },
    header: {
      textTransform: "uppercase",
      wordSpacing: 5,
      letterSpacing: 5,
    },
    tab: {
      maxWidth: 500,
      margin: "0.5rem auto",
      marginBottom: "2rem",
    },
    countries: {
      margin: "2rem 0",
    },
    tabLink: {
      textTransform: "capitalize",
      fontSize: "18px",
      wordSpacing: 3,
      letterSpacing: 2,
      margin: "0 0.5rem",
      display: "flex",
      alignItems: "center",
    },
    link: {
      textTransform: "capitalize",
      wordSpacing: 5,
      letterSpacing: 5,
    },
    form: {
      display: "flex",
      alignItems: "center",
      minWidth: 400,
      width: "75%",
      margin: "0 auto",
    },
    iconButton: {
      padding: 10,
    },
    input: {
      flex: 1,
    },
    spacing: {
      padding: theme.spacing(1),
    },
    marginingB: {
      marginBottom: "0.75rem",
    },
    small: {
      marginRight: "1rem",
      fontSize: "18px",
      width: theme.spacing(5),
      height: theme.spacing(4),
    },
  };
});
