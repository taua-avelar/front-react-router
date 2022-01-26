import { Link } from "react-router-dom";
import "./styles.css";
import useAuth from "../../hooks/useAuth";

function Home() {
  const auth = useAuth();
  console.log(auth);
  return (
    <div className="home">
      <h1>Home</h1>
      <Link to={`/perfil/${auth.username}`}>Perfil</Link>
      {!auth.token && <Link to={"/login"}>Login</Link>}
      {}
    </div>
  );
}

export default Home;
