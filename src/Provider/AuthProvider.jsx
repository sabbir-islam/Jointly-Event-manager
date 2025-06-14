import React, { createContext, useEffect, useState } from "react";
import { app } from "../Firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import axios from "axios";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [serverUserData, setServerUserData] = useState(null);

  const register = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    return signOut(auth);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);

      const fetchServerUser = async () => {
        if (currentUser?.email) {
          try {
            const res = await axios.get(
              `https://jointly-event-management.vercel.app/users/${currentUser.email}`
            );
            setServerUserData(res.data);
          } catch (error) {
            console.error("Failed to fetch user data from server:", error);
            setServerUserData(null);
          }
        } else {
          setServerUserData(null);
        }
      };

      fetchServerUser();
    });

    return () => unsubscribe();
  }, []);

  const authData = {
    user,
    setUser,
    register,
    login,
    logOut,
    serverUserData,
  };
  return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;
