import { useState } from 'react';
import { Form, useNavigate } from 'react-router-dom';
import { login } from "../api/authAPI";
import { Alert } from "./components/Alert";

export const Admin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        setError(null);
        setSuccessMessage(null);

        try {
            await login(username, password);
            setSuccessMessage('Login successful');
            navigate('/admin/news');
        } catch (err) {
            setError(err.response?.data?.message || 'An error occurred');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex w-full h-screen justify-center items-center relative">
            {error && <Alert message={error} type="error" onClose={() => setError(null)} />}
            {successMessage && <Alert message={successMessage} type="success" onClose={() => setSuccessMessage(null)} />}
            <div className='w-screen h-screen'>
                <img
                    src="https://images.unsplash.com/photo-1510987836583-e3fb9586c7b3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="WP"
                    className='h-screen w-full object-cover'
                />
            </div>
            <div className="absolute w-max h-max bg-card p-8 rounded-lg">
                <h2 className="text-white text-center mb-4">Admin Login</h2>
                <Form method="post" className="flex flex-col" onSubmit={handleSubmit}>
                    <label className="text-white mb-2" htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        className="mb-4 p-2 rounded-md"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <label className="text-white mb-2" htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        className="mb-4 p-2 rounded-md"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button
                        type="submit"
                        className="bg-mist text-white p-2 rounded-md mt-4"
                        disabled={isLoading}
                    >
                        {isLoading ? 'Logging in...' : 'Login'}
                    </button>
                </Form>
            </div>
        </div>
    );
};
