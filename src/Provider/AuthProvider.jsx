import { useState } from "react";
import { createContext } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import auth from "../firebase/firebase.config";
import { useEffect } from "react";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //   TODO: CREATE USER ACCOUNT IN FIREBASE

  const createUser = async (email, password) => {
    setLoading(true);
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      setUser(result.user); //start loading
      return result.user;
    } catch (error) {
      console.log("Error create user accound", error);
      throw error;
    }
  };

  //  TODO: SIGN IN USER FIREBASE ACCOUNT

  const signInUser = async (email, password) => {
    setLoading(true); // Start loading
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      setUser(result.user); // update the user state
      return result.user;
    } catch (error) {
      console.log("Error signing in user", error);
      throw error;
    } finally {
      setLoading(false); //always stop loading
    }
  };

  // ! USER TRACKING

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("Current user", currentUser);
      setLoading(false);
    });
    return () => {
      return unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    createUser,
    signInUser,
    loading,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
