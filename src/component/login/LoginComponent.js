import * as React from "react";

const LoginComponent = () => {
    return(
        <form action="">
            <div>
                <label htmlFor="username">
                    Username
                </label>
                <input type="text" name="username" id="username"/>
                <br/>
                <label htmlFor="password">
                    Password
                </label>
                <input type="password" name="password" id="password"/>
                <br/>
                <button type="submit">Login</button>
            </div>
        </form>
    )
}

export default LoginComponent;
