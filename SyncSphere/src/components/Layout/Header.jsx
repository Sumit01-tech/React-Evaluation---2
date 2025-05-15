import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
    const { user, logout } = useContext(AuthContext);
    const { theme } = useSelector(state => state.preferences);
    const headerStyle = {
        display: "flex",
        justifyContent: "space-between",
        alignItem: "center",
        padding: "16px 24px",
        backgroundColor: theme === "light" ? "green" : "blue",
        color: theme === "light" ? "#333333" : "#ffffff",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        position: "sticky",
        top: 0,
        zIndex: 100
    };
    const navStyle = {
        display: "flex",
        gap: "20px",
        alignItem: "center"
    };
    const buttonStyle = {
        padding: "8px 16px",
        borderRadius: "4px",
        border: "none",
        backgroundColor: theme === "light" ? "#4CAF50" : "#81C784",
        color: "white",
        cursor: "pointer",
        fontWeight: "bold"
    }

    return (
        <header style={headerStyle}>
            <Link to="/inbox" style={logoStyle}>
                SyncSphere
            </Link>
            <nav style={navStyle}>
                {user && (
                    <>
                        <span>Welcome, {user.name}</span>
                        <button onClick={logout} style={buttonStyle}>
                            Logout
                        </button>
                    </>
                )}
            </nav>
        </header>
    );
};

export default Header; 