import { Box, makeStyles, Typography } from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";

const useStyles = makeStyles({
  root: {
    width: "80%",
    display: "flex",
    padding: "2rem",
    margin: "2rem auto",
    borderRadius: "10px",
    alignItems: "center",
    background: red[100],
    flexDirection: "column",
  },
  error: {
    display: "flex",
    alignItems: "center",
    marginBottom: "2rem",
  },
  alert: {
    fontSize: "4rem",
    marginRight: "1rem",
  },
});

const Error = ({ error }) => {
  const classes = useStyles();

  return (
    <Box className={classes.root} color="text.primary">
      <Typography
        variant="h3"
        component="h2"
        className={classes.error}
        color="error"
      >
        <ErrorOutlineIcon className={classes.alert} color="error" /> Error
      </Typography>
      <Typography variant="h5">{error}</Typography>
    </Box>
  );
};
export default Error;
