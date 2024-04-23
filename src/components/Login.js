import React from 'react'

function Login() {

    return (
        <div style={{textAlign: 'center'}}>
            <h1>Login Page</h1>
            <form>
                Username: <input type="text" placeholder="Username" />
                <br />
                <br />
                Password: <input type="password" placeholder="Password" />
                <br />
                <br />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login