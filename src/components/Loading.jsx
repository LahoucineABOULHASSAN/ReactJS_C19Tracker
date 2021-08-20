import { CircularProgress, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    width: "80%",
    display: "flex",
    margin: "2rem auto",
    alignItems: "center",
    flexDirection: "column",
  },
  typo: {
    color: "#252525",
    marginBottom: "2rem",
  },
});

const Loading = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography
        variant="h4"
        component="h2"
        className={classes.typo}
        align="center"
      >
        Loading Data ...
      </Typography>
      <CircularProgress size="8rem" thickness={1.5} />
    </div>
  );
};
export default Loading;
