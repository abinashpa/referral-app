import React from "react";

import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import CssBaseline from "@mui/material/CssBaseline";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useHistory } from "react-router-dom";

import usersApi from "../apis/user";

const defaultTheme = createTheme();

const SignIn = ({ setIsLoggedIn }) => {
  const history = useHistory();

  const handleSubmit = async event => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const payload = {
      user: {
        email: data.get("email"),
        password: data.get("password"),
      },
    };
    const res = await usersApi.signIn(payload);
    if (res.status === 200) {
      setIsLoggedIn(true);
      history.push("/");
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          md={7}
          sm={4}
          xs={false}
          sx={{
            backgroundImage:
              "url(https://source.unsplash.com/random?wallpapers)",
            backgroundRepeat: "no-repeat",
            backgroundColor: t =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item square component={Paper} elevation={6} md={5} sm={8} xs={12}>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box
              noValidate
              component="form"
              sx={{ mt: 1 }}
              onSubmit={handleSubmit}
            >
              <TextField
                autoFocus
                fullWidth
                required
                autoComplete="email"
                id="email"
                label="Email Address"
                margin="normal"
                name="email"
              />
              <TextField
                fullWidth
                required
                autoComplete="current-password"
                id="password"
                label="Password"
                margin="normal"
                name="password"
                type="password"
              />
              <FormControlLabel
                control={<Checkbox color="primary" value="remember" />}
                label="Remember me"
              />
              <Button
                fullWidth
                sx={{ mt: 3, mb: 2 }}
                type="submit"
                variant="contained"
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item>
                  <Link href="/signup" variant="body2">
                    Don't have an account? Sign Up
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default SignIn;
