import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import CreateContract from '../createcontract/CreateContract';
import "../../assets/css/login/login.css"

const Login = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div className="bg-login">
                <div className="box-start">
                    <div className="box-start-div">
                        <div className="title_start">
                            <h2>Login</h2>
                            <p>Enter your email address and we will send you a link to access to your personal area.</p>
                        </div>
                        <button className="btn" onClick={() => navigate("/dashboard")}>Continue with your email</button>
                        <button className="btn-wallet" onClick={() => navigate("/dashboard")}>Continue with your wallet</button>
                    </div>
                </div>
            </div>
        </div>
    );
    }
export default Login;