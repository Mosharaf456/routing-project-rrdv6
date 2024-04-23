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

1. Static Site Generation (SSG) - 
We didn,t do any dynamic works on the web page. 
No dynamic code , just HTML code.

Like /index.html /about.html /contact.html   will send the pre-rendered HTML by the server.
It is static site generation.
But we didn,t do for all the web site SSG cause we need dynamic tasks on the website.

2. Server Side Rendering (SSR)
Like we need the content of the website from the database to show on the website.
Need content from API to show on the website.
Then we need dynamic server side language.PHP, NODE JS, DJANGO, LARAVEL, PYTHON, RUBY, JAVA, .NET
That server will generate the HTML by using data on the server side - didn,t make HTML already when we request the page to the server.

**Backend making the full block of HTML , after that it will send to the client side that is the server side rendering.


What is the differnece between rendering and re-rendering?
Already maked html on the server will send to the client side by the server that is SSG
but in CSR, HTML will be generated by the JS backend on the client side.


If you want to CSR to SEO then it is much advance and difficult to convert by taking the control of the webpack bundler.
It is not recommended to do that control.Very Advance expert can do that.
React package slit and merge by using yourself on your own webpack bundler is very difficult.

Recommended to do CSR by using create-react-app

NEXT JS  - complete framework of React JS.

NEXT JS - is the best solution for SEO friendly and CSR.
NEXT JS - CSR , SSG and SSR both three are possible.

You can mix all CSR, SSG, SSR on the routes of the NEXT JS.
SSG on the build time data collect and pre-rendered on the server.
SSR on the request time data collect and amking pre-rendered HTML on the server then send to client.
CSR will like that react JS.
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