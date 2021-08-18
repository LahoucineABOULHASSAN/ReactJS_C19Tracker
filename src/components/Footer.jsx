import { Container, Typography, Link } from "@material-ui/core";
import { useStyles } from "../hooks/useStyles";

const Footer = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Typography className={classes.link} align="center">
        API from{" "}
        <Link href="https://covid19api.com" target="_blank" rel="noreferrer">
          covid19api.com
        </Link>
      </Typography>
      <Typography
        className={classes.spacing + " " + classes.link}
        align="center"
      >
        Copyright &copy; {new Date().getFullYear()}
        <span> || </span>
        <strong>
          <Link
            href="https://aboulhassan.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
            Lahoucine Aboulhassan
          </Link>
        </strong>
      </Typography>
    </Container>
  );
};

export default Footer;
