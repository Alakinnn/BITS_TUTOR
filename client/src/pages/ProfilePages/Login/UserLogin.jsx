import { useState } from 'react';
import axios from 'axios';

const UserLogin = () => {
  const [logUsername, setUsername] = useState('');
  const [logPassword, setPassword] = useState('');

  const userLogin = async () => {
    try {
      const response = await axios.post(`http://139.59.105.114/api/v1/auth/login`, {
        username: logUsername,
        password: logPassword,
      });
      console.log(response.status);
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  const logHandleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const logHandlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return {
    logUsername,
    logPassword,
    userLogin,
    logHandleUsernameChange,
    logHandlePasswordChange,
  };
};

export default UserLogin;
