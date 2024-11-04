import { useState } from "react";
import { createContext } from "react";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import auth from "../firebase/firebase.config";
import { useEffect } from "react";
import useAxiosPublic from "../hooks/useAxiosPublic";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  const axiosPublic = useAxiosPublic();

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
      console.log("User created successfully", result.user);
      return result.user;
    } catch (error) {
      console.error("Error create user accound", error);
      throw error;
    } finally {
      setLoading(false);
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
      console.error("Error signing in user", error);
      throw error;
    } finally {
      setLoading(false); //always stop loading
    }
  };

  const googleSign = async () => {
    setLoading(true);
    try {
      const result = await signInWithPopup(auth, googleProvider);
      setUser(result.user);
      return result;
    } catch (error) {
      console.log("Google SignIn Message:", error);
    }
  };

  //   TODO LogOut user

  const logOut = async () => {
    setLoading(true);
    try {
      await signOut(auth);
      setUser(null);
      console.log("User logged out successfully");
    } catch (error) {
      console.error("User logout Failed", error);
    } finally {
      setLoading(false);
    }
  };

  // ! UPDATE USER PROFILE
  const updateUserProfile = async (name, photo) => {
    try {
      return await updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photo,
      });
    } catch (error) {
      console.log(error);
    }
  };

  // ! USER TRACKING

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        // get tken and store client
        const userInfo = { email: currentUser.email };
        axiosPublic.post("/jwt", userInfo).then((res) => {
          if (res.data.token) {
            localStorage.setItem("access_token", res.data.token);
          }
        });
      } else {
        // do something

        localStorage.removeItem("access_token");
      }
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
    logOut,
    updateUserProfile,
    googleSign,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
