import React from "react";
import { useState } from "react";
import axios from "axios";
import { redirect } from "react-router-dom";

const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, id, ...inputProps } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <div className="formInput">
      <label>{label}</label>
      <input
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() => inputProps.name === setFocused(true)}
        focused={focused.toString()}
      />
      <span>{errorMessage}</span>
    </div>
  );
};

const Login = () => {
  // const [error, setError] = useState("");
  const [error2, setError2] = useState("");

  const [values, setValues] = useState({
    name: "",
    password: "",
  });

  const inputs = [
    {
      id: 1,
      name: "name",
      type: "text",
      placeholder: "Your User Name ",
      errorMessage: "Please write your user name ...",
      label: "Name",
      pattern: "^[A-Za-z0-9]{0,100}$",
      required: true,
    },
    // {
    //   id: 2,
    //   name: "email",
    //   type: "email",
    //   placeholder: "Email",
    //   errorMessage: "Your email address not valid !",
    //   label: "Email",
    //   required: true,
    // },
    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage: "Please write your password ...",
      label: "Your Password",
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
    setValues({ name: "", password: "" });

    let userdata = {
      username: values.name,
      password: values.password,
    };

    axios
      .post("https://dummyjson.com/auth/login", userdata)
      .then((res) => {
        console.log(res);
        localStorage.setItem("auth", res.data.token);
        window.location.replace("/Dashboard");
      })
      .catch((err) => {
        console.log(err.response.data.message);
        setError2(err.response.data.message);
      });

    console.log("submit done ...");
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  return (
    <div className="LoginForm">
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button>Submit</button>
      </form>
      <h2>{error2}</h2>
    </div>
  );
};

export default Login;
