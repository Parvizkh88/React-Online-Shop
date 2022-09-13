import React, { useEffect, useState } from "react";

const useLogin = () => {
  const [token, setToken] = useState();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"));
    }
  });

  return token;
};

export default useLogin;
