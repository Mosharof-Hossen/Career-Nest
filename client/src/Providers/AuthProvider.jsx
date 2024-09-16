import { createUserWithEmailAndPassword } from "firebase/auth";
import PropTypes from 'prop-types';
import { createContext, useState } from 'react';
import auth from '../Firebase/Firebase';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    // Email password Sign up
    const signUpUsingEmailPassword = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const authInfo = {
        user,
        signUpUsingEmailPassword
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