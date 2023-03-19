import React from "react";
import { Link } from "react-router-dom";
import { TextField, Button, FormGroup } from "@mui/material"
import CreateContract from '../createcontract/CreateContract';
import "../../assets/css/summary/summary.css";
import { useNavigate } from "react-router-dom";

const Summary = () => {
    const navigate = useNavigate();
    return (
        <div className="bg-form">
            <form className="form-body">
                <div>
                    <div className="form-summary">
                        <div className="label-contract">
                            <h1>Summary</h1>
                            <h4>Check out your informations
                                before paying</h4>
                        </div>
                     <div className="label-summary-form">
                        <label>Project Name</label>
                        <hr></hr>
                        <p className="label-summary-form">Front-end service</p>
                    </div>
                    <div className="label-summary-form">
                        <label>Name of the freelancer</label>
                        <hr></hr>
                        <p className="label-summary-form">Ethan S.</p>
                    </div>
                    <div className="label-summary-form">
                        <label>File to attach</label>
                        <hr></hr>
                    </div>
                    <div className="upload-btn-wrapper">
                        <label className="btn-upload">File 1</label>
                        <input type="file" />
                        <label className="btn-download">Download</label>
                        <input type="file" />
                    </div>
                    <div className="label-summary-form">Amount To Recieve</div>
                    <p align="left">$ 2000</p>
                    <button className="btn" onClick={navigate("/dashboard")}>Validate</button>
                    <button className="btn_decline" onClick={navigate("/dashboard")}>Decline</button>
                </div>
                </div>
            </form>
        </div>
    );
    }
export default Summary;