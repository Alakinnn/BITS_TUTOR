// import React from 'react'
import LoginPage, { Username, Password, TitleSignup, TitleLogin, Submit, Title, Logo } from '@react-login-page/page8';
import UserLogin from './UserLogin';
// TODO: Change the logo from here
import LoginLogo from 'react-login-page/logo';
// TODO: Change the styles as needed
import loginStyles from '../components/Login';
import UserRegister from '../Register/UserRegister';

// TODO: This log in/sign up page has no functionality to add role. Please update that!
function LoginTest() {
  const { logUsername, logPassword, userLogin, logHandleUsernameChange, logHandlePasswordChange } = UserLogin();
  const { regPassword, regEmail, regUsername, userRegister, regHandelPasswordChange, regHandelEmailChange, regHandelUsernameChange } = UserRegister();
  return (
    <div style={{height: "100%"}}>
      <LoginPage style={loginStyles.css}>
        <Title />
        <TitleSignup>Sign Up</TitleSignup>
        <TitleLogin>Log In</TitleLogin>
        <Logo>
          <LoginLogo />
        </Logo>
        <Password label="Password" placeholder="Password" name="userPassword" value={logPassword} onChange={logHandlePasswordChange} />
        <Username label="Username" placeholder="Username" name="userUserName" value={logUsername} onChange={logHandleUsernameChange} />

        <Submit keyname="submit" onClick={userLogin}></Submit>


        <Username panel="signup" label="E-mail" placeholder="E-mail" name="e-mail" value={regEmail} onChange={regHandelEmailChange} />
        <Password panel="signup" label="Password" placeholder="Password" name="password" value={regPassword} onChange={regHandelPasswordChange} />
        <Password panel="signup" label="Confirm Password" placeholder="Confirm Password" name="confirm-password" />
        {/* To add Username, I have to put it at the bottom which is rediculous or else it is going to show Email instead */}
        <Username panel="signup" label="Username" placeholder="Username" name="username" value={regUsername} onChange={regHandelUsernameChange} />
        <Submit panel="signup" keyname="signup-submit" onClick={userRegister}>
          Sign Up
        </Submit>
      </LoginPage>
    </div>
  )
}

export default LoginTest