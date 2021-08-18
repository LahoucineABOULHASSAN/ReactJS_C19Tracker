import { Container, Grid, Typography } from "@material-ui/core";
import Result from "../components/Result";
import { useStyles } from "../hooks/useStyles";
const Global = ({ global }) => {
  const classes = useStyles();

  const results = [
    {
      title: "Recovers",
      numbers: global.NewRecovered,
      global: global.TotalRecovered,
    },
    {
      title: "Cases",
      numbers: global.NewConfirmed,
      global: global.TotalConfirmed,
    },
    {
      title: "Deaths",
      numbers: global.NewDeaths,
      global: global.TotalDeaths,
    },
  ];
  return (
    <Container className={classes.mainContent}>
      <Typography
        className={classes.spacing + " heading"}
        variant="h5"
        component="h2"
        color="primary"
        align="center"
      >
        <strong>World Covid 19 today results</strong>
      </Typography>
      <Grid container spacing={2}>
        {results.map((res) => (
          <Grid item key={res.title} xs={12} sm={4}>
            <Result result={res} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Global;
