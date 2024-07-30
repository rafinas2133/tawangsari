import { Form } from 'react-router-dom';

export const Admin = () => {

    return (
        <div className="flex w-full h-screen justify-center items-center">
            <div className='w-screen h-screen'>
                <img src="https://images.unsplash.com/photo-1510987836583-e3fb9586c7b3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="WP"
                className='h-screen w-full object-cover'
                />
            </div>
            <div className="absolute w-max h-max bg-card p-8 rounded-lg">
                <h2 className="text-white text-center mb-4">Admin Login</h2>
                <Form method="post" className="flex flex-col">
                    <label className="text-white mb-2" htmlFor="username">Username:</label>
                    <input type="text" id="username" name="username" className="mb-4 p-2 rounded-md"/>

                    <label className="text-white mb-2" htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" className="mb-4 p-2 rounded-md"/>

                    <button type="submit" className="bg-mist text-white p-2 rounded-md mt-4">Login</button>
                </Form>
            </div>
        </div>
    )
}
