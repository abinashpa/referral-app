import * as React from "react";

import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

const NavBar = () => (
  <AppBar color="default" sx={{ backdropFilter: "blur(20px)" }}>
    <Toolbar variant="dense">
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
    </Toolbar>
  </AppBar>
);

export default NavBar;
