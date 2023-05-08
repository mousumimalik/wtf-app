import React, { useState } from "react";

function Temp() {
  const initialState = {
    username: "",
    email: "",
    number: "",
    password: "",
    confirmpassword: "",
  };

  const [formValues, setFormValues] = useState(initialState);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    setFormErrors(validate(formValues));
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (Object.keys(formErrors).length === 0) {
      setIsSubmit(true);
    }

    if (isSubmit) {
      setFormValues(initialState);
    }
  };

  const validate = (values) => {
    const errors = {};
    const REGX_EMAIL = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const REGX_NUMBER =
      /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;
    const REGX_PASSWORD =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

    if (!values.username) {
      errors.username = "Username is required!";
    }

    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!REGX_EMAIL.test(values.email)) {
      errors.email = "This is not a valid email!";
    }

    if (!values.number) {
      errors.number = "Number is required!";
    } else if (!REGX_NUMBER.test(values.number)) {
      errors.number = "This is not a valid Number!";
    }

    if (!values.password) {
      errors.password = "Password is required!";
    } else if (!REGX_PASSWORD.test(values.password)) {
      errors.password = "This is not a valid password!";
    }

    if (!values.confirmpassword) {
      errors.confirmpassword = "Confirm Password is required!";
    }
    if (values.password !== values.confirmpassword) {
      errors.confirmpassword = "Password and Confirm Password must be matched!";
    }

    return errors;
  };

  return (
    <div className="w-full h-[100vh] flex flex-col justify-center items-center bg-black">
      <form className="w-[40%] h-[90%] flex flex-col justify-center items-center bg-cyan-950" onSubmit={onSubmitHandler}>
        <div className="w-full h-auto flex justify-evenly items-center">
          <label htmlFor="username" className="text-xl text-white capitalize">
            Username:
          </label>
          <input
            type="text"
            name="username"
            value={formValues.username}
            onChange={onChangeHandler}
            className="border-2 border-blue-400 w-[400px] h-[50px]"
          />
          <span className="text-red-500 text-md">{formErrors.username}</span>
        </div>

        <div className="w-full h-auto flex justify-around items-center mt-8">
          <label htmlFor="email" className="text-xl text-white capitalize">
            Email:
          </label>
          <input
            type="email"
            name="email"
            value={formValues.email}
            onChange={onChangeHandler}
            className="border-2 border-blue-400 w-[400px] h-[50px]"
          />

          <span className="text-red-500 text-md">{formErrors.email}</span>
        </div>

        <div className="w-full h-auto flex justify-around items-center mt-8">
          <label htmlFor="number" className="text-xl text-white capitalize">
            Number:
          </label>
          <input
            type="number"
            name="number"
            value={formValues.number}
            onChange={onChangeHandler}
            className="border-2 border-blue-400 w-[400px] h-[50px]"
          />

          <span className="text-red-500 text-md">{formErrors.number}</span>
        </div>

        <div className="w-full h-auto flex justify-around items-center mt-8">
          <label htmlFor="password" className="text-xl text-white capitalize">
            password:
          </label>
          <input
            type="password"
            name="password"
            value={formValues.password}
            onChange={onChangeHandler}
            className="border-2 border-blue-400 w-[400px] h-[50px]"
          />

          <span className="text-red-500 text-md">{formErrors.password}</span>
        </div>

        <div className="w-full h-auto flex justify-around items-center mt-8">
          <label
            htmlFor="confirmpassword"
            className="text-xl text-white capitalize"
          >
            confirm password:
          </label>
          <input
            type="confirmpassword"
            name="confirmpassword"
            value={formValues.confirmpassword}
            onChange={onChangeHandler}
            className="border-2 border-blue-400 w-[400px] h-[50px]"
          />

          <span className="text-red-500 text-md">
            {formErrors.confirmpassword}
          </span>
        </div>

        <button
          type="submit"
          className="w-[100px] h-[50px] mt-8 bg-white text-black text-md capitalize cursor-pointer"
        >
          submit
        </button>
      </form>
    </div>
  );
}

export default Temp;
