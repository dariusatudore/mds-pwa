import { useState } from "react";

export default function useLoginToken() {
  const getToken = () => {
    const tokenString = localStorage.getItem("token");
    const userToken = JSON.parse(tokenString);
    return userToken?.token;
  };

  const [token, setToken] = useState(getToken());

  const saveToken = (userToken, rememberMe) => {
    if (rememberMe === true) {
      localStorage.setItem("token", JSON.stringify(userToken));
    } else {
      sessionStorage.setItem("token", JSON.stringify(userToken));
    }
    setToken(userToken.token);
  };

  const removeToken = () => {
    sessionStorage.removeItem("token");
    localStorage.removeItem("token");
    window.location.reload(false);
  };

  return {
    setToken: saveToken,
    token,
    removeToken,
  };
}
