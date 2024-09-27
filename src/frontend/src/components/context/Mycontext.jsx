import { useState, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";
import CircularProgress from '@mui/material/CircularProgress'


const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const navigate = useNavigate();
    const [isAuth, setIsAuth] = useState(null);

    useEffect(() => {
        const checkAuth = async () => {
            const authenticated = true;
            setIsAuth(authenticated);
            if (!authenticated) {
                navigate('/');
            }
        };

        checkAuth();
    }, [navigate]);

    if (isAuth === null) {
        return  <div style={{textAlign: "center"}}>
        <CircularProgress size={50} color="primary" />
    </div>;
    }

    return (
        <AuthContext.Provider value={{ isAuth }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;