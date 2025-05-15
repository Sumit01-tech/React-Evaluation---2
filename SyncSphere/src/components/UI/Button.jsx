import { useSelector } from "react-redux"

const Button = ({
    children,
    onClick,
    variant = "primary",
    size = "medium",
    diabled = false,
    fullWidth = false,
    type = "button"
}) => {
    const { theme } = useSelector(state => state.preferences);
    const variants = {
        primary: theme === "light" ? "#4CAF50" : "#81C784",
        secondary: theme === "light" ? "#2196F3" : "364B5F6",
        danger: theme === "light" ? "#f44336" : "#e57373",
        text: "transparent"
    };
    const sizes = {
        small: {
            padding: "6px 12px",
            fontSize: '0.8rem'
        },
        medium: {
            padding: "8px 16px",
            fontSize: "1rem"
        },
        large: {
            padding: "12px 24px",
            fontSize: "1.125rem"
        }
    };
    const buttonStyle = {
        display: "inline-flex",
        alignItem: "center",
        justifyContent: "center",
        gap: "8px",
        borderRadius: "4px",
        border: "none",
        fontWeight: "500",
        transition: "all 0.2s ease",
        width: fullWidth ? "100%" : "auto",
    }
    return (
        <button style={buttonStyle} onClick={onClick} disabled={disabled} type={type}>
            {children}
        </button>
    );
};

export default Button;