import { useSelector } from "react-redux"

const Loading = ({ size = 40, thickness = 4 }) => {
    const { theme } = useSelector(state => state.preferences);
    const containerStyle = {
        display: "flex",
        justifyContent: "center",
        alignItem: "center",
        height: "100px",
        width: "100%"
    };
    const spinnerStyle = {
        display: "inline-block",
        width: `${size}px`,
        height: `${size}px`,
        border: `${thickness}px solid ${theme === "light" ? "#f3f3f3" : "#424242"}`,
        borderTop: `${thickness}px solid ${theme === "light" ? "#4CAF50" : "#81C784"}`,
        borderRadius: "50%",
    };
    return (
        <div style={containerStyle}>
            <div style={spinnerStyle}></div>
        </div>
    );
};

export default Loading;