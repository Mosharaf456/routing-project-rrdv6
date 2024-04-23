import React from 'react'
import useInput from './CustomHooks/useInput';


function Login() {
    const [username, bindUsername, resetUsername] = useInput('');

    const [password, bindPassword, resetPassword] = useInput('');


    const handleSubmit = e => {
        e.preventDefault();
        alert(`Provided Credentials ${username} ${password}`);
        resetUsername();
        resetPassword();
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