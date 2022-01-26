import { useContext } from "react";
import AuthContext from "../contexts/AuthContext/index.js";

export default function useAuth() {
  return useContext(AuthContext);
}
