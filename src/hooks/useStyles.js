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
    spacing: {
      padding: theme.spacing(1),
    },
  };
});
