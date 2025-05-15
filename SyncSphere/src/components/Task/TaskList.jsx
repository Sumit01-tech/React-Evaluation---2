import { useContext } from "react"
import { TaskContext } from "../../Context/TaskContext"
import { useSelector } from "react-redux";
import TaskCard from "./TaskCard";
import Loading from "../UI/Loading";

const TaskList = () => {
    const { tasks, loading, error } = useContext(TaskContext);
    const { layout, tasksPerPage } = useSelector(state => state.preferences);

    const containerStyle = {
        padding: "16px",
        maxWidth: "1000px",
        margin: "0 auto"
    };

    const listContainerStyle = {
        display: "flex",
        flexDirection: "column",
        gap: layout === "cards" ? "16px" : "0"
    };
    if (loading) return <loading />;
    if (error) return <div style={{ color: "red", textAlign: "center" }}>Error: {error}</div>

    return (
        <div style={containerStyle}>
            <h1 style={{ marginBottom: "24px" }}>Your Tasks</h1>
            <div style={listContainerStyle}>
                {tasks.slice(0, tasksPerPage).map(task => (
                    <TaskCard key={task.id} task={task} />
                ))}
            </div>
        </div>
    );
};

export default TaskList;