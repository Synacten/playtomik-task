// eslint-disable-next-line no-use-before-define
import React from 'react';
import { FormLogin } from './FormLogin';
import './login.scss';

const Login = () => {
  const a = 'login page';
  return (
    <div className="login-component">
      <FormLogin />
    </div>
  );
};

export default Login;
