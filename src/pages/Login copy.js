import React, { useEffect, useState } from "react";
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    let userdata = {
      username: username,
      password: password,
    };
    axios.post("https://dummyjson.com/auth/login", userdata).then((res) => {
      console.log(res);
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        id="username"
        name="username"
        value={username}
        placeholder="Username"
        onChange={(event) => setUsername(event.target.value)}
      />

      <br />
      <br />

      <input
        type="password"
        id="password"
        name="password"
        value={password}
        placeholder="Password"
        onChange={(event) => {
          setPassword(event.target.value);
        }}
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default Login;
