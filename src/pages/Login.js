import React, {useContext} from 'react';
import {AuthContext} from "../context";

function Login() {
    const {isAuth, setIsAuth} = useContext(AuthContext);

    const login = event => {
        event.preventDefault();
        setIsAuth(true);
        localStorage.setItem('auth', 'true')
    }

    return (
        <div className="container">
            <div className="text-center">
                <main className="form-signin w-100 m-auto">
                    <form onSubmit={login}>
                        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

                        <div className="form-floating">
                            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"></input>
                            <label htmlFor="floatingInput">Email address</label>
                        </div>
                        <div className="form-floating">
                            <input type="password" className="form-control" id="floatingPassword" placeholder="Password"></input>
                            <label htmlFor="floatingPassword">Password</label>
                        </div>
                        {/*
                <div className="checkbox mb-3">
                    <input type="checkbox" value="remember-me"> Remember me</input>
                </div>*/}
                        <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
                        <p className="mt-5 mb-3 text-muted">© 2017–2022</p>
                    </form>
                </main>
            </div>
        </div>


    );

}

export default Login;