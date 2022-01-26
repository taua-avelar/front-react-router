import { Link, useHistory } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./styles.css";

function Login() {
  const auth = useAuth();
  const history = useHistory();
  return (
    <div className="login">
      <h1>Login</h1>
      <Link to={"/perfil"}>Perfil</Link>
      <Link to={"/"}>Home</Link>

      <input onChange={(e) => auth.setUsername(e.target.value)} />
      <button
        onClick={() =>
          auth.logar(() => history.push(`/perfil/${auth.username}`))
        }
      >
        Logar
      </button>
    </div>
  );
}

export default Login;
