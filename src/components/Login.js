import React from 'react'
import useInput from './CustomHooks/useInput';

/*
What is rendering?
Website UI(User Interface) - HTML CSS
HTML web structure
CSS design or make it beautiful
    Rendering is a process of loading the page of HTML, CSS. Then interactivity will apply on the loaded website page by using JS.
    Rendering two types:
    1. Client Side Rendering (CSR)
    2. Pre-rendering 

1.*** Client Side Rendering (CSR) - React, Angular, Vue
Client side rendering will happen on the client side or browser side.

Server will send the HTML, CSS, JS(project minified bundle files)  block to the client side , not the full block of HTML,CSS.
Client side will load the HTML, CSS, JS files and render the website page.

JS load as minified bundle file.
After load JS is activated.

Note: JS will make dynamic elements on the loaded website page.
Push it to the root element that was arrived from the server.

Source page will show only root element in the browser. Didn,t see the dynamic elements on the source page which was created by JS.
view source browser will show only sended by server html, css, js.

So google or Search engine didn,t SEO on the content on th web page using crawler. 
Page content didn,t SEO on the React client side app.
Example : React, Angular, Vue JS 
Like Admin panel can be used for client side rendering.

HTML are genrated or rendered on the client side by JS . So, SEO is not possible on the client side rendering.

 2. Pre-rendering  *****Pre-rendering example is Laravel blade template, PHP, Django, Next.js, Nuxt.js

 -- HTML generated or rendered on the server side as already pre- rendered on the server.
 WHen we request the page from the server, server will send the full block of HTML.
 Note: When we need SEO on the website then we use pre-rendering. SEO friendly.
Pre-rendering performance optimization can be 2 types:
1. Static Site Generation (SSG)
2. Server Side Rendering (SSR)

 


What is the differnece between rendering and re-rendering?

*/

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