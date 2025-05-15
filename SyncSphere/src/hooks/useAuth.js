import { useContext } from "react"
import { AuthContext } from "../Context/AuthContext"
import { useNavigate } from "react-router-dom";

const useAuth = () => {
    const context = useContext(AuthContext);
    const navigate = useNavigate();

    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    const { user, login, logout } = context;
    const enhancedLogin = async (email, password) => {
        try {
            await login(email, password);
            navigate("/inbox");
        } catch (error) {
            console.error("Login failed:", error);
            throw error;
        }
    };
    const enhancedLogout = () => {
        logout();
        navigate("/login");
    };
    return {
        user,
        isAuthenticated: !!user,
        login: enhancedLogin,
        logout: enhancedLogout
    };
};

export default useAuth;