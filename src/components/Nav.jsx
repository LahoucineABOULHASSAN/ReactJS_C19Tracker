import { useState, useEffect } from "react";
import { useStyles } from "../hooks/useStyles";
import { Paper, Tabs, Tab } from "@material-ui/core";
import { useHistory, useLocation } from "react-router-dom";

import PublicIcon from "@material-ui/icons/Public";
import HomeIcon from "@material-ui/icons/Home";

const Nav = () => {
  const [value, setValue] = useState(0);

  const history = useHistory();
  const location = useLocation();
  const classes = useStyles();
  const menu = [
    {
      path: "/",
      text: "Global Results",
      icon: <PublicIcon fontSize="large" />,
    },
    {
      path: "/countries",
      text: "Select Country",
      icon: <HomeIcon fontSize="large" />,
    },
  ];

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  useEffect(
    () => setValue(location.pathname === "/" ? 0 : 1),
    [location.pathname]
  );
  return (
    <Paper square className={classes.tab} elevation={0}>
      <Tabs
        centered
        value={value}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChange}
      >
        {menu.map((item) => (
          <Tab
            className={classes.tabLink}
            key={item.text}
            icon={item.icon}
            label={item.text}
            onClick={() => history.push(item.path)}
          ></Tab>
        ))}
      </Tabs>
    </Paper>
  );
};
export default Nav;
