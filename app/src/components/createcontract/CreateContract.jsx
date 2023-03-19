import { width } from "@mui/system";
import React from "react";
import "../../assets/css/create_contract/formContract.css";

const CreateContract = () => {
  return (
    <div className="bg-form">
      <form className="form-body">
        <div className="form-contract">
          <div className="form-contract">
            <div className="label-contract-form">
              <h1>Create your contract</h1>
              <h4>
                Fill in the form with additional files, submit and send the
                paylink
              </h4>
            </div>

            <div className="label-contract-form">
              <label>Project Name</label>
              <hr></hr>
              <input className="select-box" type="text" />
            </div>
            <div className="label-contract-form">
              <label>Name of the freelancer</label>
              <hr></hr>
              <input className="select-box" type="text" />
            </div>
            <div className="label-contract-form">
              <label>File to attach</label>
              <hr></hr>
            </div>
            <div className="upload-btn-wrapper">
              <label className="btn-upload">Upload</label>
              <input type="file" />
            </div>
            <div className="label-contract-form">
              <label>Amount to pay</label>
              <hr></hr>
              <input className="select-box" type="text" />
            </div>
            <div className="label-contract-form">
              <button className="btn">Create Contract</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateContract;
