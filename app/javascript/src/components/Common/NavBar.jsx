import * as React from "react";

import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Logger from "js-logger";
import { Link } from "react-router-dom";

import usersApi from "../../apis/user";

const NavBar = () => {
  const handleSignout = async () => {
    try {
      await usersApi.signOut();
      localStorage.clear();
    } catch (err) {
      Logger.error(err);
    } finally {
      localStorage.clear();
      window.location.href = "/";
    }
  };

  return (
    <AppBar color="default" sx={{ backdropFilter: "blur(20px)" }}>
      <Toolbar variant="dense">
        <div className="flex space-between">
          <div>
            <Link style={{ textDecoration: "none" }} to="/">
              <IconButton color="inherit">
                <DashboardIcon />
                <Typography color="inherit" component="div" variant="h6">
                  Dashboard
                </Typography>
              </IconButton>
            </Link>
            <Link style={{ textDecoration: "none" }} to="/refer">
              <IconButton color="inherit">
                <PersonAddIcon />
                <Typography color="inherit" component="div" variant="h6">
                  Refer
                </Typography>
              </IconButton>
            </Link>
          </div>
          {/* make the button smaller */}
          <Button
            className="sign-out-button"
            color="error"
            variant="outlined"
            onClick={handleSignout}
          >
            Sign Out
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
