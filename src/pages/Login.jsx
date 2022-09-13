import React from "react";

const Login = () => {
  return (
    <div className="container">
      <form
        className="d-flex mx-auto flex-column border shadow-lg p-5 rounded my-5"
        style={{ maxWidth: "500px" }}
      >
        <div className="d-flex justify-content-between p-1">
          <label style={{ minWidth: "150px" }}>Username:</label>
          <input placeholder="username" className="p-2 border rounded"></input>
        </div>
        <div className="d-flex justify-content-between p-1 my-2">
          <label style={{ minWidth: "150px" }}>Password:</label>
          <input placeholder="password" className="p-2 border rounded"></input>
        </div>
        <button type="submit" className="btn btn-success my-2">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
