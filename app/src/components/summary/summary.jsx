import React from "react";
import { Link } from "react-router-dom";
import { TextField, Button, FormGroup } from "@mui/material"
import CreateContract from '../createcontract/CreateContract';

const Summary = () => {
    return (
        <div>
            <FormGroup/>
            <h1>Summary</h1>
            <h4>Check out your informations before paying</h4>
            <label>Project Name</label>
            <TextField id="outlined-basic" label="Name" variant="outlined" />
            <label>Name of the freelancer</label>
            <TextField id="outlined-basic" label="Ethan S." variant="outlined" />
            <label>Files To Attach</label>
            <input type="file" />
            <label>Amount To Recieve</label>
            <p>$ 2000</p>
            <Button variant="contained" color="success">Validate</Button>
            <Button variant="outlined" >Decline</Button>
        </div>
    );
    }
export default Summary;