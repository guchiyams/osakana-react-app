import React from 'react'

import Login from '../components/Login/Login';
import Dashboard from '../components/Dashboard/Dashboard';
import Register from '../components/Register/Register'

const AccountPage = ({ state }) => {
  let account_state;

  if (state === "login") {
    account_state = <Login />;
  } else if (state === "dashboard") {
    account_state = <Dashboard />;
  } else if (state === "register") (
    account_state = <Register />
  )

  return (
    <>
      {account_state}
    </>
  );

}

export default AccountPage