import { createContext, useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { app } from "../../../firebase.config";
import { Navigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const provider = new GoogleAuthProvider();
const auth = getAuth(app);
export const AuthContext = createContext();





const AuthProvider = ({ children }) => {
    // DECLARING ALL STATE HERE=============
    const [user, setUser] = useState(null);
    const [chefID, setChefID] = useState('') //THIS IS USEFULL FOR PROTECTIVE ROUTE======
    const [isLoggedin, setIsLoggedIn] = useState(false);







    //GOOGLE AUTHENTICATION HANDLER FUNCTION======
    const handleGoogle = () => {

        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                setUser(user)
                // IdP data available using getAdditionalUserInfo(result)
                // ...
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
                console.log('somethinw went wrong')
            });
    }



    // FUNCTION TO CREATE ACCOUNT USING EMAIL, PASSWORD===========
    const handleCreateAccountUsingEmail = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                setUser(user)

            })
            .catch((error) => {
                console.log(error.message)

            });

    }



    // FUNCTION TAHT HANDLE LOGIN USER THROUGH EMAIL, PASSWORD==================
    const handleLogin = (email, password) => {
        console.log(email, password)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                setUser(user)



            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage)


            });
    }



    // FUNCTION TO LOGOUT AN USER=============
    const logoutUser = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            setUser(null)
        }).catch((error) => {
            // An error happened.
        });

    }




    // state value that is passing to other components====
    const sharingValue = {
        handleLogin,
        handleGoogle,
        handleCreateAccountUsingEmail,
        logoutUser,
        user,
        setChefID,
        chefID,
        isLoggedin,
        setIsLoggedIn
    }

    return (
        <AuthContext.Provider value={sharingValue}>
            <ToastContainer />
            {children}
        </AuthContext.Provider>


    );
};

export default AuthProvider;