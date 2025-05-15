import { createContext, useCallback, useEffect, useState } from "react";

export const TaskContext = createContext();
export const TaskProvider = ({ children }) => {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [changedTaskId, setChangedTaskId] = useState(null);

    const fetchTasks = useCallback(async () => {
        try {
            const response = await axios.get("https://dummyjson.com/todos");
            const todos = response.data.todos.map(task => ({
                ...task, urgency: Math.floor(Math.random() * 3) + 1,
                dueDate: new Date(Date.now() + Math.random() * 7 * 24 * 60 * 1000)
            }));
            setTasks(sortTasks(todos));
            setLoading(false);
        } catch (error) {
            setError(error.message);
            setLoading(false);
        }
    }, []);

    const sortTasks = (tasks) => {
        return [...tasks].sort((a, b) => {
            if (a.urgency !== b.urgency) return b.urgency - a.urgency;
            return new Date(a.dueDate) - new Date(b.dueDate);
        });
    };
    useEffect(() => {
        fetchTasks();

        const interval = setInterval(() => {
            setTasks(prevTasks => {
                if (prevTasks.length === 0) return prevTasks;
                const randomIndex = Math.floor(Math.random() * prevTasks.length);
                const updatedTasks = [...prevTasks];
                if (Math.random() > 0.5) {
                    updatedTasks[randomIndex].urgency = Math.floor(Math.random() * 3) + 1;
                } else {
                    updatedTasks[randomIndex].completed = !updatedTasks[randomIndex].completed;
                }
                setChangedTaskId(updatedTasks[randomIndex].id);
                setTimeout(() => setChangedTaskId(null), 3000);
                return sortTasks(updatedTasks);
            });
        }, 10000);
        return () => clearInterval(interval);
    }, [fetchTasks]);
    const updateTask = async (taskId, updates) => {
        setTasks(prevTasks => {
            const updatedTasks = prevTasks.map(task => task.id === taskId ? { ...task, ...updates } : task);
            return sortTasks(updatedTasks);
        });
    };

    return (
        <TaskContext.Provider value={{ tasks, loading, error, updateTask, changedTaskId }}>
            {children}
        </TaskContext.Provider>
    );
};