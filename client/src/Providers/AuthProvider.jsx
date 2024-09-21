import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';
import auth from '../Firebase/Firebase';
import axiosInstance from "../api/axiosInstance";


export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    // Sign up Email password 
    const signUpUsingEmailPassword = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // Sign In Email Password
    const signInUsingEmailPassword = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // Login with Google
    const loginByGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider);
    }

    // LogIn by Github
    const loginByGithub = () => {
        setLoading(true)
        return signInWithPopup(auth, githubProvider)
    }

    // Log Out 
    const logOut = () => {
        setLoading(true)
        return signOut(auth);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false)
            const jwt = { email: currentUser?.email, userId: currentUser?.uid }
            if (currentUser) {
                axiosInstance.post("/jwt", jwt, { withCredentials: true })
                    .then(() => {
                        // console.log(data);
                    })
            }
            else {
                axiosInstance.post("/logout", jwt, { withCredentials: true })
                // .then(data=>console.log(data))
            }
            return () => {
                return unSubscribe()
            }

        })
    }, [])

    const authInfo = {
        user,
        signUpUsingEmailPassword,
        logOut,
        signInUsingEmailPassword,
        loginByGithub,
        loginByGoogle,
        loading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired
};

export default AuthProvider;