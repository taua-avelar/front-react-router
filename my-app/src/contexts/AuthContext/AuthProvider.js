import useAuthProvider from "../../hooks/useAuthProvider";
import AuthContext from "./index.js";

export default function AuthProvider(props) {
  const auth = useAuthProvider();
  return (
    <AuthContext.Provider value={auth}>{props.children}</AuthContext.Provider>
  );
}
