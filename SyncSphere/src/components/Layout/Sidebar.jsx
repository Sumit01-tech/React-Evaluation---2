import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
    const location = useLocation();
    const { theme } = useSelector(state => state.preferences);
    const sidebarStyle = {
        width: "220px",
        height: "100vh",
        backgroundColor: theme === "light" ? "#f5f5f5" : "#424242",
        padding: "24px 16px",
        position: "fixed",
        left: 0,
        top: "60px"
    };
    const navStyle = {
        display: "flex",
        flexDirection: "column",
        gap: "8px"
    };
    const linkStyle = {
        padding: "12px 16px",
        borderRadius: "4px",
        textDecoration: "none",
        color: theme === "light" ? "#333" : "#fff",
        fontWeight: "500",
        display: "flex",
        alignItem: "center",
        gap: "8px"
    };
    const activeLinkStyle = {
        ...linkStyle,
        backgroundColor: theme === "light" ? "#E&F5E9" : "#2E7D32",
        color: theme === "light" ? "#2E7D32" : "#E8F5E9"
    };
    const iconStyle = {
        width: "20px",
        height: "20px"
    };
    const isActive = (path) => location.pathname === path;

    return (
        <aside style={sidebarStyle}>
            <nav style={navStyle}>
                <Link to="/inbox" style={isActive("/inbox") ? activeLinkStyle : linkStyle}>
                    <svg style={iconStyle} viewBox="0 0 24 24">
                        <path fill="currentColor" />
                    </svg>
                    Inbox
                </Link>
                <Link to="/settings" style={isActive("/settings") ? activeLinkStyle : linkStyle}>
                    <svg style={iconStyle} viewBox="0 0 24 24">
                        <path fill="currentColor" />
                    </svg>
                    Settings
                </Link>
            </nav>
        </aside>
    );
};

export default Sidebar;