import React from 'react';
import { Button } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

const AuthNav = () => {
  return (
    <>
      <Button color="inherit" component={NavLink} exact to="/register">
        Registration
      </Button>
      <Button color="inherit" component={NavLink} exact to="/login">
        Login
      </Button>
    </>
  );
};

export default AuthNav;
