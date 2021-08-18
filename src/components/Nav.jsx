import { useState } from "react";
import { useStyles } from "../hooks/useStyles";
import { useHistory } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import PublicIcon from "@material-ui/icons/Public";
import HomeIcon from "@material-ui/icons/Home";
const Nav = () => {
  const [value, setValue] = useState(0);

  const history = useHistory();
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

  return (
    <Paper square className={classes.tab}>
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
