import { useCallback, useContext } from "react"

const useTasks = () => {
    const context = useContext(TaskContext);

    if (!context) {
        throw new Error("useTasks must be used within a TaskProvider");
    }

    const { tasks, loading, error, updateTask, changedTaskId } = context;
    const getTaskById = useCallback((id) => {
        return tasks.find(task => task.id === id);
    }, [tasks]);

    const completeTask = async (taskId) => {
        try {
            updateTask(taskId, { completed: true });
        } catch (error) {
            console.error("Error completing task:", error);
            throw error;
        }
    };
    const updateTaskUrgency = async (taskId, urgency) => {
        try {
            updateTask(taskId, { urgency });
        } catch (error) {
            console.error("Error updating task urgency:", error);
            throw error;
        }
    };
    const addTaskNote = async (taskId, note) => {
        try {
            updateTask(taskId, { note });
        } catch (error) {
            console.error("Error adding task note:", error);
            throw error;
        }
    };
    return (
        tasks,
        loading,
        error,
        getTaskById,
        completeTask,
        updateTaskUrgency,
        addTaskNote,
        changedTaskId,
        updateTask
    );
};

export default useTasks;