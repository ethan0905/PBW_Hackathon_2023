import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";


const CreateContract = () => {
    const [formFields, setFormFields] = useState({
    email: "",
    amount: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    let errors = {};
    if (!formFields.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formFields.email)) {
      errors.email = "Email is invalid";
    }
    if (!formFields.amount) {
      errors.amount = "amount number is required";
    } else if (!/^[0-9]+$/.test(formFields.amount)) {
      errors.amount = "amount number is invalid";
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    if (validateForm()) {
      // Create object with form fields
      const formData = {
        email: formFields.email,
        amount: formFields.amount,
      };
      // Get existing data from local storage
      const existingData = localStorage.getItem("data");
      // If data exists, parse it as JSON
      const jsonData = existingData ? JSON.parse(existingData) : [];
      // Add new object to existing data
      jsonData.push(formData);
      // Store updated data in local storage
      localStorage.setItem("data", JSON.stringify(jsonData));
      setIsSubmitting(false);
      alert("Form submitted successfully!");
    } else {
      setIsSubmitting(false);
    }
  };
  
  const handleInputChange = (event) => {
    setFormFields({
      ...formFields,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        name="email"
        label="Email"
        value={formFields.email}
        onChange={handleInputChange}
        error={!!formErrors.email}
        helperText={formErrors.email}
        required
      />
      <br />
      <TextField
        name="amount"
        label="amount"
        value={formFields.amount}
        onChange={handleInputChange}
        error={!!formErrors.amount}
        helperText={formErrors.amount}
        required
      />
      <br />
      <Button type="submit" disabled={isSubmitting}>
        Submit
      </Button>
    </form>
  );
};

export default CreateContract;

