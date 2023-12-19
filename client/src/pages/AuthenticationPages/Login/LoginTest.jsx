// import React from 'react'
import LoginPage, { Username, Footer, Password,  Submit, Logo } from '@react-login-page/base';
import UserLogin from './UserLogin';
import { Link } from 'react-router-dom';
// TODO: Change the logo from here
// TODO: Change the styles as needed
import loginStyles from '../components/Login';

// TODO: This log in/sign up page has no functionality to add role. Please update that!
function LoginTest() {
  const { logEmail, logPassword, userLogin, logHandleEmailChange, logHandlePasswordChange } = UserLogin();
  return (
    <div style={{height: "100%"}}>
      <LoginPage style={loginStyles.css}>
        <Logo>
          <a href=""></a>
        </Logo>
        <Password label="Password" placeholder="Password" name="userPassword" value={logPassword} onChange={logHandlePasswordChange} />
        <Username label="Email" placeholder="Email" name="userEmail" value={logEmail} onChange={logHandleEmailChange} />
        <Submit keyname="submit" onClick={userLogin}></Submit>

        <Footer>
          <div>Not a student? <Link to={"/register/student"}>Sign up now!</Link></div>
          <div>Become a tutor? <Link to={"/register/tutor"}>Click here!</Link></div>
        </Footer>
      </LoginPage>

      
    </div>
  )
}

export default LoginTest