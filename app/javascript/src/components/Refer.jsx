import React, { useState } from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useHistory } from "react-router-dom";

import NavBar from "./Common/NavBar";

import referralApi from "../apis/referral";

const Refer = () => {
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async () => {
    const payload = {
      referral: {
        referred_to: email,
        message,
      },
    };
    const res = await referralApi.create(payload);

    if (res.status === 200) {
      history.push("/");
    }
  };

  return (
    <>
      <NavBar />
      <div className="small-container">
        <div className="card">
          <Typography gutterBottom variant="h6">
            Refer to your friends
          </Typography>
          <Box
            noValidate
            autoComplete="off"
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "50ch" },
            }}
          >
            <TextField
              id="referred_to"
              label="Email"
              variant="outlined"
              onChange={e => {
                setEmail(e.target.value);
              }}
            />
          </Box>
          <Box
            noValidate
            autoComplete="off"
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "50ch" },
            }}
          >
            <TextField
              id="message"
              label="Message"
              variant="outlined"
              onChange={e => {
                setMessage(e.target.value);
              }}
            />
          </Box>
          <Button variant="contained" onClick={handleSubmit}>
            Invite +
          </Button>
        </div>
      </div>
    </>
  );
};

export default Refer;
