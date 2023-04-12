import React from "react";
import { useFormik } from "formik";

export default function GeneralForm() {
  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: "",
      age: "",
      password: "",
      confirmPassword: "",
    },
  });

  //   console.log(formik);

  return (
    <form>
      <div className="inputDiv">
        <label>Email</label>
        <input
          type="email"
          value={values.email}
          onChange={handleChange}
          id="email"
          placeholder="Enter your email..."
        />
      </div>
      <div className="inputDiv">
        <label>Age</label>
        <input
          type="number"
          value={values.age}
          onChange={handleChange}
          id="age"
          placeholder="Enter your age..."
        />
      </div>
      <div className="inputDiv">
        <label>Password</label>
        <input
          type="password"
          value={values.password}
          onChange={handleChange}
          id="password"
          placeholder="Enter your password..."
        />
      </div>
      <div className="inputDiv">
        <label>Confirm Password</label>
        <input
          type="password"
          value={values.confirmPassword}
          onChange={handleChange}
          id="confirmPassword"
          placeholder="Enter your confirm password..."
        />
      </div>
      <button type="submit">Save</button>
    </form>
  );
}
