import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import "./App.css";
import AuthProvider from "./contexts/AuthContext/AuthProvider";
import useAuth from "./hooks/useAuth";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Perfil from "./pages/Perfil";

function RotasProtegidas(props) {
  const auth = useAuth();

  return (
    <Route
      render={() => (auth.token ? props.children : <Redirect to={"/login"} />)}
    />
  );
}

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Router>
          <main>
            <Switch>
              <Route path={"/"} exact component={Home} />
              <Route path={"/login"} component={Login} />
              <RotasProtegidas>
                <Route path={"/perfil/:user"} component={Perfil} />
              </RotasProtegidas>
            </Switch>
          </main>
        </Router>
      </div>
    </AuthProvider>
  );
}

export default App;
