import { useState } from "react";

export default function useAuthProvider() {
  const [token, setToken] = useState(false);
  const [username, setUsername] = useState("");

  const logar = (callback) => {
    try {
      fetch(`https://api.github.com/users/${username}`).then((response) =>
        response.json().then((data) => {
          if (data.login) {
            setToken(true);
            callback();
          }
        })
      );
    } catch (error) {
      console.log(error.message);
      setUsername("");
      return;
    }
  };

  const deslogar = (callback) => {
    setToken(false);
    setUsername("");
    callback();
  };
  return {
    logar,
    deslogar,
    token,
    username,
    setUsername,
  };
}
