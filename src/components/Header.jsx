import { Container, Typography } from "@material-ui/core";
import { useStyles } from "../hooks/useStyles";

const Header = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Typography
        className={classes.spacing + " " + classes.header}
        variant="h3"
        component="h1"
        color="primary"
        align="center"
      >
        C19 Tracker
      </Typography>
      <Typography className={classes.spacing} align="center" variant="h6">
        Stay home, Stay safe
      </Typography>
      <Typography
        className={classes.spacing + " " + classes.link}
        variant="body2"
        align="center"
        component="h4"
      >
        {new Date().toDateString()}
      </Typography>
    </Container>
  );
};

export default Header;
