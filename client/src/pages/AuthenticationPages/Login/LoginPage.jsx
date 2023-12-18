// import React from 'react'
import LoginPage, {
    Username,
    Footer,
    Password,
    Submit,
    Logo,
    Input,
} from "@react-login-page/base";
import { Link } from "react-router-dom";
import loginStyles from "../components/Login";
import { loginUser } from "../services/auth";
import { useAuth } from "../../../contexts/AuthContext";

function MAMLoginPage() {
    const { storeAuth } = useAuth();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const newData = Object.fromEntries(formData);
        const response = await loginUser(newData);
        console.log(response);
        if (!response) {
            alert("Login failed");
        }

        const { user, token } = response;
        await storeAuth({ newUser: user, newToken: token });

        alert("Login successful");
    };

    return (
        <div style={{ height: "100%" }}>
            <form onSubmit={handleSubmit} style={{ height: "100%" }}>
                <LoginPage style={loginStyles.css}>
                    <Logo>
                        <a href=""></a>
                    </Logo>
                    <Input
                        name="role"
                        keyname="role"
                        style={{ display: "none" }}
                    >
                        <select
                            label="Role"
                            placeholder="Role"
                            key="role"
                            name="role"
                            style={{ width: "100%" }}
                        >
                            <option value="student">Student</option>
                            <option value="tutor">Tutor</option>
                        </select>
                    </Input>

                    <Password
                        label="Password"
                        placeholder="Password"
                        name="password"
                    />
                    <Username label="Email" placeholder="Email" name="email" />
                    <Submit keyname="submit"></Submit>

                    <Footer>
                        <div>
                            Not a student?{" "}
                            <Link to={"/register/student"}>Sign up now!</Link>
                        </div>
                        <div>
                            Become a tutor?{" "}
                            <Link to={"/register/tutor"}>Click here!</Link>
                        </div>
                    </Footer>
                </LoginPage>
            </form>
        </div>
    );
}

export default MAMLoginPage;
