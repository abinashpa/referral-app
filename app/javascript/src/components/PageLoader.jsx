import React from "react";

import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

const PageLoader = () => (
  <Box sx={{ display: "flex" }}>
    <CircularProgress />
  </Box>
);

export default PageLoader;
