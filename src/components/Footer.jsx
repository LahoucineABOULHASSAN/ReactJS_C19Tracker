import { Typography, Link } from "@material-ui/core";
import { useStyles } from "../hooks/useStyles";

const Footer = () => {
  const classes = useStyles();
  return (
    <footer className="flex flex-column">
      <Typography className={classes.link}>
        API from{" "}
        <Link href="https://covid19api.com" target="_blank" rel="noreferrer">
          covid19api.com
        </Link>
      </Typography>
      <Typography className={classes.spacing + " " + classes.link}>
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
    </footer>
  );
};

export default Footer;
