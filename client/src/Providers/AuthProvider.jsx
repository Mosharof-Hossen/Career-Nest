import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';
import auth from '../Firebase/Firebase';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    // Sign up Email password 
    const signUpUsingEmailPassword = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // Sign In Email Password
    const signInUsingEmailPassword = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // Login with Google
    const loginByGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    }

    // LogIn by Github
    const loginByGithub = () => {
        return signInWithPopup(auth, githubProvider)
    }

    // Log Out 
    const logOut = () => {
        return signOut(auth);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);

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
        loginByGoogle
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