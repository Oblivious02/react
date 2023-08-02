import React, { useEffect } from "react";
import { redirect } from "react-router-dom";

export default function Dashboard() {
  const handleClick = () => {
    localStorage.removeItem("auth");
    window.location.replace("/Login");
  };

  useEffect(() => {
    if (!localStorage.getItem("auth")) {
      window.location.replace("/Login");
    }
    // redirect("/Login");

    // console.log("hi");
    // console.log(localStorage.getItem("auth"));
  }, []);

  return (
    <div className="Dashboard">
      <h1>Welcome to Dashboard .... </h1>
      <button onClick={handleClick}>Logout</button>
    </div>
  );
}
