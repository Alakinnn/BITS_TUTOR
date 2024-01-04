import { useState } from 'react';
import axios from 'axios';

const UserRegister = () => {
  const [regUsername, setUsername] = useState('');
  const [regPassword, setPassword] = useState('');
  const [regEmail, setEmail] = useState('');
  const userRegister = async () => {
    try {
      const response = await axios.post(`http://139.59.105.114/api/v1/auth/register`, {
        username: regUsername,
        email: regEmail,
        password: regPassword,
      });
      console.log(response.status);
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  const regHandelUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const regHandelPasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const regHandelEmailChange = (event) => {
    setEmail(event.target.value);
  };

  return {
    regPassword,
    regEmail,
    userRegister,
    regHandelUsernameChange,
    regHandelPasswordChange,
    regHandelEmailChange
  };
};

export default UserRegister;
