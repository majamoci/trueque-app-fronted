import React from 'react';
import { Typography } from '@material-ui/core';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      TruequeApp{" "}
      {/* <Link color="inherit" href="https://material-ui.com/">
      </Link>{' '} */}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default Copyright;