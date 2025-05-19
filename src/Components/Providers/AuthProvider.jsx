import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { createContext, useState } from "react";
import auth from "../Firebase/firebase.init";

export const AuthContext=createContext(null)

const AuthProvider = ({children}) => {
    const[user,setUser]=useState(null)
    const[loading,setLoading]=useState(true)

    const googleProvider=new GoogleAuthProvider()

    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const logInUser=(email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

   const googleSignIn=()=>{
    return signInWithPopup(auth, googleProvider)
   }

   const allInfo={
        user,
        setUser,
        createUser,
        logInUser,
        googleSignIn
    }

    return (
        <AuthContext.Provider value={allInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;