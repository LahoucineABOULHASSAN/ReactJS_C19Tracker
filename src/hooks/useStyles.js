import { makeStyles } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";

export const useStyles = makeStyles((theme) => {
  return {
    container: {
      padding: "2rem",
      background: grey[900],
    },
    header: {
      textTransform: "uppercase",
      wordSpacing: 5,
      letterSpacing: 5,
    },
    tab: {
      maxWidth: 500,
      margin: "1rem auto",
    },
    tabLink: {
      textTransform: "capitalize",
      fontSize: "18px",
      wordSpacing: 3,
      letterSpacing: 2,
      margin: "0 0.5rem",
    },
    link: {
      textTransform: "capitalize",
      wordSpacing: 5,
      letterSpacing: 5,
    },
    spacing: {
      padding: theme.spacing(1),
    },
  };
});
