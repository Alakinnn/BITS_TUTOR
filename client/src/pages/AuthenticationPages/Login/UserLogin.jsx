import { useState } from 'react';
import axios from 'axios';

const UserLogin = () => {
  const [logEmail, setEmail] = useState('');
  const [logPassword, setPassword] = useState('');

  const userLogin = async () => {
    try {
      const response = await axios.post(`http://139.59.105.114/api/v1/auth/login`, {
        Email: logEmail,
        password: logPassword,
      });
      console.log(response.status);
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  const logHandleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const logHandlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return {
    logEmail,
    logPassword,
    userLogin,
    logHandleEmailChange,
    logHandlePasswordChange,
  };
};

export default UserLogin;
