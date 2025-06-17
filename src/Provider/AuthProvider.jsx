import React, { createContext, useEffect, useState } from "react";
import { app } from "../Firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import axios from "axios";

export const AuthContext = createContext();
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [serverUserData, setServerUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  const register = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const googleLogin = () => {
    return signInWithPopup(auth, provider);
  };

  const logOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);

      // jwt
      if (currentUser?.email) {
        axios
          .post("https://jointly-event-management.vercel.app/jwt", {
            email: currentUser?.email,
          })
          .then((res) => {
            localStorage.setItem("token", res.data.token);
          });
      }

      const fetchServerUser = async () => {
        if (currentUser?.email) {
          try {
            
            const res = await axios.get(
              `https://jointly-event-management.vercel.app/users/${currentUser.email}`,
            );
            console.log("Server Response: ", res.data);
            setServerUserData(res.data);
          } catch (error) {
            console.error("Failed to fetch user data from server:", error);
            setServerUserData(null);
          }
        } else {
          setServerUserData(null);
        }
        setLoading(false);
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
    googleLogin,
    logOut,
    serverUserData,
    setLoading,
  };
  return (
    <AuthContext.Provider value={authData}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
