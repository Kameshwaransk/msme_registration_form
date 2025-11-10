import React, { useState } from "react";
import "./App.css";

function App() {
  const details = {
    enterpriseName: "",
    udyamNumber: "",
    enterpriseType: "",
    businessType: "",
    district: "",
    taluka: "",
    address: "",
    ownerName: "",
    mobileNumber: "",
    emailId: "",
    userName: "",
    password: "",
    confirmPassword: "",
  };
  const [form, setForm] = useState(details);
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const handleChange = (event) => {   
    const { name, value } = event.target;

    if (errors?.[name]) {
      setErrors((prev) => {
        const { [name]: _, ...rest } = prev;
        return rest;
      });
    }

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const validate = () => {
    const err = {};
    const required = [
      "enterpriseName",
      "udyamNumber",
      "enterpriseType",
      "businessType",
      "district",
      "address",
      "ownerName",
      "mobileNumber",
      "emailId",
      "userName",
      "password",
      "confirmPassword",
    ];
    required.forEach((field) => {
      if (!form[field].trim()) {
        err[field] = "This field is Required";
      }
    });
    if (form.emailId && !/\S+@\S+\.\S+/.test(form.emailId)) {
      err.emailId = "Invalid Email Format";
    }
    if (form.mobileNumber && !/^\d{10}$/.test(form.mobileNumber)) {
      err.mobileNumber = "Mobile number must be 10 digits";
    }
    if (form.udyamNumber && !form.udyamNumber.startsWith("UDYAM-", 0)) {
      err.udyamNumber = "Udyam Registration Number must be start with UDYAM-";
    }
    if (
      form.password &&
      form.confirmPassword &&
      form.password !== form.confirmPassword
    ) {
      err.confirmPassword = "Password do not match";
    }
    if (Object.keys(err).length === 0) {
      return true;
    } else {
      setErrors(err);
      return false;
    }
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // setForm(details);
      e.target.reset()
      setSuccess(true);
    }
  };

  return (
    <div className="form-container">
      <h2>MSME Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Enterprise Details</legend>

          <div className="input-box">
            <input
              type="text"
              name="enterpriseName"
              // value={form.enterpriseName}
              onChange={handleChange}
            />
            <span>Enterprise Name</span>
            {errors.enterpriseName && (
              <small className="error-msg">{errors.enterpriseName}</small>
            )}
          </div>

          <div className="input-box">
            <input
              type="text"
              name="udyamNumber"
              // value={form.udyamNumber}
              onChange={handleChange}
            />
            <span>Udyam Registration Number</span>
            {errors.udyamNumber && (
              <small className="error-msg">{errors.udyamNumber}</small>
            )}
          </div>

          <div className="input-box">
            <select
              // value={form.enterpriseType}
              name="enterpriseType"
              onChange={handleChange}
              defaultValue=""
            >
              <option value="" disabled hidden></option>
              <option value="Micro">Micro</option>
              <option value="Small">Small</option>
              <option value="Medium">Medium</option>
            </select>
            <span>Enterprise Type</span>
            {errors.enterpriseType && (
              <small className="error-msg">{errors.enterpriseType}</small>
            )}
          </div>

          <div className="input-box">
            <select
              name="businessType"
              // value={form.businessType}
              onChange={handleChange}
              defaultValue=""
            >
              <option value="" disabled hidden></option>
              <option value="Manufacturing">Manufacturing</option>
              <option value="Service">Service</option>
            </select>
            <span>Business Type</span>
            {errors.businessType && (
              <small className="error-msg">{errors.businessType}</small>
            )}
          </div>
        </fieldset>

        <fieldset>
          <legend>Address Details</legend>

          <div className="input-box">
            <input
              type="text"
              name="district"
              // value={form.district}
              onChange={handleChange}
            />
            <span>District</span>
            {errors.district && (
              <small className="error-msg">{errors.district}</small>
            )}
          </div>

          <div className="input-box">
            <input
              type="text"
              name="taluka"
              // value={form.taluka}
              onChange={handleChange}
            />
            <span>Taluka</span>
          </div>

          <div className="input-box">
            <textarea
              // value={form.address}
              name="address"
              onChange={handleChange}
            ></textarea>
            <span>Address</span>
            {errors.address && (
              <small className="error-msg">{errors.address}</small>
            )}
          </div>
        </fieldset>

        <fieldset>
          <legend>Contact Details</legend>

          <div className="input-box">
            <input
              type="text"
              name="ownerName"
              // value={form.ownerName}
              onChange={handleChange}
            />
            <span>Owner Name</span>
            {errors.ownerName && (
              <small className="error-msg">{errors.ownerName}</small>
            )}
          </div>

          <div className="input-box">
            <input
              type="number"
              // value={form.mobileNumber}
              name="mobileNumber"
              onChange={handleChange}
              mobileNumber
            />
            <span>Mobile Number</span>
            {errors.mobileNumber && (
              <small className="error-msg">{errors.mobileNumber}</small>
            )}
          </div>

          <div className="input-box">
            <input
              type="email"
              name="emailId"
              // value={form.emailId}
              onChange={handleChange}
            />
            <span>Email ID</span>
            {errors.emailId && (
              <small className="error-msg">{errors.emailId}</small>
            )}
          </div>
        </fieldset>

        <fieldset>
          <legend>Account Details</legend>
          <div className="input-box">
            <input
              type="text"
              name="userName"
              // value={form.userName}
              onChange={handleChange}
            />
            <span>Username</span>
            {errors.userName && (
              <small className="error-msg">{errors.userName}</small>
            )}
          </div>
          <div className="input-box">
            <input
              type="password"
              name="password"
              // value={form.password}
              onChange={handleChange}
            />
            <span>Password</span>
            {errors.password && (
              <small className="error-msg">{errors.password}</small>
            )}
          </div>

          <div className="input-box">
            <input
              type="password"
              name="confirmPassword"
              // value={form.confirmPassword}
              onChange={handleChange}
            />
            <span>Confirm Password</span>
            {errors.confirmPassword && (
              <small className="error-msg">{errors.confirmPassword}</small>
            )}
          </div>
        </fieldset>

        <button type="submit">Submit</button>
      </form>
      {success && (
        <div className="confirm-msg">
          <p>Successfully Submitted</p>
          {Object.keys(form)
            ?.filter((key) => key !== "password" && key !== "confirmPassword")
            .map((item) => {
              if (form[item] === "") return;
              return (
                <div>
                  <span>{item}</span>
                  <span>:</span>
                  <span>{form[item]}</span>
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
}

export default App;