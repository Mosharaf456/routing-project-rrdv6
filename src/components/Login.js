import React from 'react'
import useInput from './CustomHooks/useInput';


function Login() {
    const [username, bindUsername, resetUsername] = useInput('');

    const [password, bindPassword, resetPassword] = useInput('');

    const employee = {
        username: "mh", //string
        password: "1234"
    };
    const handleSubmit = e => {
        e.preventDefault();
        // alert(`Provided Credentials ${username} ${password}`);

        // resetUsername();
        // resetPassword();

        if (username === employee.username && password === employee.password) {
            console.log("Success! Logged in.");

        } else {
            console.log("Invalid username or password");
        }
    }
    return (
        <div style={{textAlign: 'center'}}>
            <h1>Login Page</h1>
            <form onSubmit={handleSubmit}>
                Username: 
                <input 
                        {...bindUsername}
                        type="text" 
                    />
                <br />
                <br />
                Password: 
                <input 
                        {...bindPassword}
                        type="password" 
                    />
                <br />
                <br />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login