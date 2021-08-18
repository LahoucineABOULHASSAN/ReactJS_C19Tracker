import { Typography, makeStyles } from "@material-ui/core";
import { red, green, yellow } from "@material-ui/core/colors";
import Paper from "@material-ui/core/Paper";

const getBG = (category) => {
  if (category === "Recovers") return green[200];
  if (category === "Cases") return yellow[200];
  if (category === "Deaths") return red[200];
  return green[500];
};

const useStyles = makeStyles({
  paper: {
    background: (result) => getBG(result.title),
    padding: "1rem",
  },
  title: {
    color: "#252525",
    marginBottom: "0.75rem",
  },
  typography: {
    textTransform: "capitalize",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: "0.45rem",
  },
});

const Result = ({ result }) => {
  const classes = useStyles(result);

  return (
    <Paper elevation={3} className={classes.paper}>
      <Typography
        variant="h6"
        align="center"
        color="primary"
        className={classes.title}
      >
        {result.title}
      </Typography>
      <Typography variant="body1" align="center" className={classes.typography}>
        <strong>new: </strong> {result.numbers}
      </Typography>
      <Typography variant="body1" align="center" className={classes.typography}>
        <strong>total: </strong> {result.global}
      </Typography>
    </Paper>
  );
};

export default Result;
