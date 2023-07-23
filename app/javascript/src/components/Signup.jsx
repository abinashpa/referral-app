import React from "react";

import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Logger from "js-logger";
import { useHistory } from "react-router-dom";

import usersApi from "../apis/user";

const defaultTheme = createTheme();

const SignUp = () => {
  Logger.useDefaults();
  const history = useHistory();

  const handleSubmit = async event => {
    try {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      const payload = {
        user: {
          first_name: data.get("firstName"),
          last_name: data.get("lastName"),
          email: data.get("email"),
          password: data.get("password"),
        },
      };
      const res = await usersApi.signUp(payload);

      if (res.status === 200) {
        history.push("/signin");
      }
    } catch (err) {
      Logger.error(err);
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            noValidate
            component="form"
            sx={{ mt: 3 }}
            onSubmit={handleSubmit}
          >
            <Grid container spacing={2}>
              <Grid item sm={6} xs={12}>
                <TextField
                  autoFocus
                  fullWidth
                  required
                  autoComplete="given-name"
                  id="firstName"
                  label="First Name"
                  name="firstName"
                />
              </Grid>
              <Grid item sm={6} xs={12}>
                <TextField
                  fullWidth
                  required
                  autoComplete="family-name"
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  required
                  autoComplete="email"
                  id="email"
                  label="Email Address"
                  name="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  required
                  autoComplete="new-password"
                  id="password"
                  label="Password"
                  name="password"
                  type="password"
                />
              </Grid>
            </Grid>
            <Button
              fullWidth
              sx={{ mt: 3, mb: 2 }}
              type="submit"
              variant="contained"
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/signin" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default SignUp;
