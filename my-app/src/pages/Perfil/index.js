import { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./styles.css";

function Perfil() {
  const auth = useAuth();
  const history = useHistory();
  const params = useParams();
  const [userJson, setUserJson] = useState({});

  useEffect(() => {
    fetch(`https://api.github.com/users/${params.user}`).then((response) =>
      response.json().then((data) => setUserJson(data))
    );
  }, [params]);

  return (
    <div className="perfil">
      <h1>Perfil</h1>
      <Link to={"/"}>Home</Link>
      <h2>User: {userJson.login}</h2>
      <span>Id: {userJson.id}</span>
      <img className="avatar" src={userJson.avatar_url} />
      {console.log(userJson)}
      <button onClick={() => auth.deslogar(() => history.push("/login"))}>
        Deslogar
      </button>
    </div>
  );
}

export default Perfil;
