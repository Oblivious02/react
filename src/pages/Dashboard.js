import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Dashboard() {
  const handleClick = () => {
    localStorage.removeItem("auth");
    setAuth(false);
    window.location.replace("/");
  };

  const [auth, setAuth] = useState(false);

  useEffect(() => {
    const key = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("auth")}`,
      },
    };
    axios
      .get("https://dummyjson.com/auth/users", key)
      .then((res) => {
        console.log(res.status);
        setAuth(true);
      })
      .catch((err) => {
        window.location.replace("/");
        console.log(err.response.status);
      });
  }, []);

  return (
    <div className="App">
      {auth && (
        <div className="Dashboard">
          <h1>Welcome to Dashboard .... </h1>
          <button onClick={handleClick}>Logout</button>
        </div>
      )}
    </div>
  );
}
