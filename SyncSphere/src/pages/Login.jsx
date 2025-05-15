import { useState } from "react"
import useAuth from "../hooks/useAuth";
import { useSelector } from "react-redux";
import Button from "../components/UI/Button";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const { login } = useAuth();
    const { theme } = useSelector(state => state.preferences);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await login(email, password);
        } catch (error) {
            setError('Invalid credentials, Please try again');
        }
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>SyncSphere Login</h1>
                {error && (
                    <div>{error}</div>
                )}
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <Button type="submit" variant="primary">Login</Button>
            </form>
        </div>
    );
};
export default Login;