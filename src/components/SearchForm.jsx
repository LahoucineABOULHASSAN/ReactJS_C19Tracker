import { TextField, IconButton, InputAdornment } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import { useStyles } from "../hooks/useStyles";
import SearchIcon from "@material-ui/icons/Search";
const SearchForm = ({ handleFilter, countries }) => {
  const classes = useStyles();

  const input = (params) => {
    return (
      <TextField
        {...params}
        label="Search Your Country"
        variant="outlined"
        onChange={(event) => handleFilter(event.target.value)}
        InputProps={{
          ...params.InputProps,
          type: "search",
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                type="submit"
                className={classes.iconButton}
                aria-label="search"
              >
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    );
  };

  return (
    <div>
      <form
        className={classes.form}
        onSubmit={(event) => event.preventDefault()}
      >
        <Autocomplete
          className={classes.input}
          freeSolo
          id="search"
          disableClearable
          options={countries.map((country) => country.Country)}
          renderInput={(params) => input(params)}
          onChange={(event, value) => handleFilter(value)}
        />
      </form>
    </div>
  );
};

export default SearchForm;
