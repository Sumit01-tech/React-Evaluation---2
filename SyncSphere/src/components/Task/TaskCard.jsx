import { useContext } from "react"
import { TaskContext } from "../../Context/TaskContext"
import { useSelector } from "react-redux"

const TaskCard = ({ task }) => {
    const { changedTaskId } = useContext(TaskContext);
    const { layout } = useSelector(state => state.preferences);
    const highlightStyle = {
        backgroundColor: changedTaskId === task.id ? "#ffde7" : "transparent",
        transition: "background-Color 0.3s ease"
    };
    const urgencyColors = {
        1: "#f44336",
        2: "#ff9800",
        3: "#4caf50"
    };
    const cardStyle = {
        borderLeft: `px solid ${urgencyColors[task.urgency]}`,
        padding: "16px",
        marginBottom: "12px",
        borderRadius: "4px",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        ...highlightStyle
    };
    const listStyle = {
        display: "flex",
        alignItems: "center",
        padding: "12px",
        borderBottom: "1px solid #eee",
        ...highlightStyle
    };

    return (
        <div style={layout === "cards" ? cardStyle : listStyle}>
            <div style={{ flex: 1 }}>
                <h3 style={{ margin: "0 0 8px 0", textDecoration: task.completed ? "line-through" : "none" }}>
                    {task.todo}
                </h3>
                <div style={{ display: "flex", gap: "16px", fontSize: "0.9em", color: "#666" }}>
                    <span>Due: {new Date(task.dueDate).toLocaleDateString()}</span>
                    <span>Urgency: {task.urgency}</span>
                </div>
            </div>
        </div>
    );
};

export default TaskCard;