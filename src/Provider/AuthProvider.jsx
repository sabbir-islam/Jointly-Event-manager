import React from "react";
import { AuthContext } from "../Contexts/AuthContext";
import { app } from "../Firebase/firebase.config";
import { getAuth } from "firebase/auth";
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const authData = {};
  return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;
