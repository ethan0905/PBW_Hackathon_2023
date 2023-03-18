import React from "react";

const CreateContract = () => {
    return (
        <div>
            <form>
                <h1>Create your contract</h1>
                <h4>Fill in the form with additional files, submit and send the paylink</h4>
                <label>Project Name</label>
                <input type="text"/>
                <label>Name of the freelancer</label>
                <input type="text"/>
                <label>File to attach</label>
                <input type="file"/>
                <label>Amount to pay</label>
                <input type="text"/>
                <button></button>
            </form>
        </div>
    );
    }
export default CreateContract;