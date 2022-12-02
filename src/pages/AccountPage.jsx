import React from 'react'

import Login from '../components/Login/Login';
import Dashboard from '../components/Dashboard/Dashboard';


const AccountPage = ({ state }) => {
  let account_state;

  if (state === "login") {
      account_state = <Login />;
  } else if (state === "dashboard") {
      account_state = <Dashboard />;
  }


  return (
    <>
      <div>
        hello world
      </div>
      <div>
        {account_state}
      </div>
    </>
  );

}

export default AccountPage