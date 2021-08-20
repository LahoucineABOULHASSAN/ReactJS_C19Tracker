import {
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Grid,
  Avatar,
} from "@material-ui/core";
import { useStyles } from "../../hooks/useStyles";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const Country = ({ country }) => {
  const classes = useStyles();

  const headCol = (
    <div>
      <Typography variant="h6" className={classes.marginingB}>
        {" - "}
      </Typography>
      <Typography variant="h6" className={classes.marginingB}>
        {" "}
        New:{" "}
      </Typography>
      <Typography variant="h6" className={classes.marginingB}>
        {" "}
        Total:{" "}
      </Typography>
    </div>
  );
  const recoversCol = (
    <div>
      <Typography variant="h6" color="primary" className={classes.marginingB}>
        Recovers
      </Typography>
      <div>
        <span className="unhide">New: </span>
        <Typography variant="h6" className={classes.marginingB}>
          {country.NewRecovered.toLocaleString()}
        </Typography>
      </div>
      <div>
        <span className="unhide">Total: </span>
        <Typography variant="h6" className={classes.marginingB}>
          {country.TotalRecovered.toLocaleString()}
        </Typography>
      </div>
    </div>
  );
  const casesCol = (
    <div>
      <Typography variant="h6" color="primary" className={classes.marginingB}>
        Cases
      </Typography>
      <div>
        <span className="unhide">New: </span>
        <Typography variant="h6" className={classes.marginingB}>
          {country.NewConfirmed.toLocaleString()}
        </Typography>
      </div>
      <div>
        <span className="unhide">Total: </span>
        <Typography variant="h6" className={classes.marginingB}>
          {country.TotalConfirmed.toLocaleString()}
        </Typography>
      </div>
    </div>
  );
  const deathsCol = (
    <div>
      <Typography variant="h6" color="primary" className={classes.marginingB}>
        Deaths
      </Typography>
      <div>
        <span className="unhide">New: </span>
        <Typography variant="h6" className={classes.marginingB}>
          {country.NewDeaths.toLocaleString()}
        </Typography>
      </div>
      <div>
        <span className="unhide">Total: </span>
        <Typography variant="h6" className={classes.marginingB}>
          {country.TotalDeaths.toLocaleString()}
        </Typography>
      </div>
    </div>
  );

  return (
    <Accordion className="elem-country">
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Avatar variant="square" className={classes.small + " avatar-country"}>
          {country.CountryCode}
        </Avatar>
        <Typography variant="h6" className={classes.tabLink} color="secondary">
          {country.Country}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Grid container spacing={3}>
          <Grid item xs={4} sm={3} className="unhide-2">
            {headCol}
          </Grid>
          <Grid item xs={4} sm={3}>
            {recoversCol}
          </Grid>
          <Grid item xs={4} sm={3}>
            {casesCol}
          </Grid>
          <Grid item xs={4} sm={3}>
            {deathsCol}
          </Grid>
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
};

export default Country;
