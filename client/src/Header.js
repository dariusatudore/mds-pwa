import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ChatIcon from "@material-ui/icons/Chat";
import ProfileIcon from "@material-ui/icons/Person";
import FireIcon from "@material-ui/icons/Whatshot";
import LogoutIcon from "@material-ui/icons/ExitToApp";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import "./Header.css";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
  },
  icon: {
    "&$selected": {
      color: "#faff69",
    },
  },
  selected: {},
});

function Header() {
  const classes = useStyles();
  // const [value, setValue] = React.useState(0);

  const [value, setValue] = React.useState("");
  const history = useHistory();

  const handleChange = (event, newValue) => {
    history.push(`/${newValue}`);
    setValue(newValue);
  };

  return (
    <div className="header">
      <BottomNavigation
        value={value}
        onChange={handleChange}
        className={classes.root}
      >
        <BottomNavigationAction
          value="swipe"
          classes={{ selected: classes.selected }}
          className={classes.icon}
          label="Swipe"
          icon={<FireIcon />}
        />
        <BottomNavigationAction
          value="chats"
          classes={{ selected: classes.selected }}
          className={classes.icon}
          label="Chats"
          icon={<ChatIcon />}
        />
        <BottomNavigationAction
          value="profile"
          classes={{ selected: classes.selected }}
          className={classes.icon}
          label="Profile"
          icon={<ProfileIcon />}
        />
        <BottomNavigationAction
          value="logout"
          classes={{ selected: classes.selected }}
          className={classes.icon}
          label="Logout"
          icon={<LogoutIcon />}
        />
      </BottomNavigation>
    </div>
  );
}

export default Header;
